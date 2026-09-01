document.addEventListener('DOMContentLoaded',()=>{
  const root=document.querySelector('[data-monitoring-app]');
  if(!root)return;
  const tempCanvas=root.querySelector('[data-chart="temperature"]');
  const humidityCanvas=root.querySelector('[data-chart="humidity"]');
  const pauseBtn=root.querySelector('[data-pause]');
  const injectBtn=root.querySelector('[data-inject-alert]');
  const speedSelect=root.querySelector('[data-speed]');
  const streamStatus=root.querySelector('[data-stream-status]');
  const messageCount=root.querySelector('[data-message-count]');
  const alertFeed=root.querySelector('[data-alert-feed]');
  const topicTable=root.querySelector('[data-topic-table]');
  const packet=root.querySelector('[data-packet]');
  const ruleInputs={cold:root.querySelector('[data-rule="cold"]'),incubator:root.querySelector('[data-rule="incubator"]'),freezer:root.querySelector('[data-rule="freezer"]'),humidity:root.querySelector('[data-rule="humidity"]')};
  const kpis={cold:root.querySelector('[data-kpi="cold"]'),incubator:root.querySelector('[data-kpi="incubator"]'),freezer:root.querySelector('[data-kpi="freezer"]'),humidity:root.querySelector('[data-kpi="humidity"]')};
  const state={paused:false,timer:null,count:0,alerts:0,values:{cold:4.2,incubator:36.8,freezer:-79.6,humidity:46},history:{cold:[],incubator:[],freezer:[],humidity:[]}};
  const topics={cold:'lab/coldroom/temperature',incubator:'lab/incubator/temperature',freezer:'lab/freezer/temperature',humidity:'lab/environment/humidity'};
  const units={cold:'°C',incubator:'°C',freezer:'°C',humidity:'%'};
  const clamp=(n,min,max)=>Math.min(max,Math.max(min,n));
  const now=()=>new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit',second:'2-digit'});
  function seed(){for(let i=0;i<42;i++){state.history.cold.push(4.2+(Math.random()-.5)*.6);state.history.incubator.push(36.8+(Math.random()-.5)*.5);state.history.freezer.push(-79.6+(Math.random()-.5)*1.2);state.history.humidity.push(46+(Math.random()-.5)*4)}}
  function drawChart(canvas,series,ranges){
    const ctx=canvas.getContext('2d'); const dpr=window.devicePixelRatio||1; const cssW=canvas.clientWidth||canvas.width; const cssH=canvas.clientHeight||canvas.height;
    if(canvas.width!==Math.floor(cssW*dpr)||canvas.height!==Math.floor(cssH*dpr)){canvas.width=Math.floor(cssW*dpr);canvas.height=Math.floor(cssH*dpr)}
    ctx.setTransform(dpr,0,0,dpr,0,0); const w=cssW,h=cssH; ctx.clearRect(0,0,w,h);
    ctx.fillStyle='#111217';ctx.fillRect(0,0,w,h); const pad={l:42,r:16,t:16,b:28}; const pw=w-pad.l-pad.r,ph=h-pad.t-pad.b;
    ctx.strokeStyle='#2a2d35';ctx.lineWidth=1;ctx.fillStyle='#8e95a3';ctx.font='11px system-ui';
    for(let i=0;i<5;i++){const y=pad.t+ph*(i/4);ctx.beginPath();ctx.moveTo(pad.l,y);ctx.lineTo(w-pad.r,y);ctx.stroke();const val=(ranges.max-(ranges.max-ranges.min)*(i/4)).toFixed(ranges.decimals||0);ctx.fillText(val,4,y+4)}
    const colors=['#73bf69','#5794f2','#f2cc0c','#ff9830'];
    series.forEach((s,idx)=>{const arr=s.data;if(arr.length<2)return;ctx.strokeStyle=colors[idx%colors.length];ctx.lineWidth=2;ctx.beginPath();arr.forEach((v,i)=>{const x=pad.l+pw*(i/(arr.length-1));const y=pad.t+ph*(1-(v-ranges.min)/(ranges.max-ranges.min));if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y)});ctx.stroke();});
    ctx.fillStyle='#6f7682';ctx.font='10px system-ui';ctx.fillText('live',w-36,h-8);
  }
  function renderCharts(){drawChart(tempCanvas,[{data:state.history.cold},{data:state.history.incubator},{data:state.history.freezer}],{min:-90,max:45,decimals:0});drawChart(humidityCanvas,[{data:state.history.humidity}],{min:30,max:80,decimals:0})}
  function evaluate(key,value){const threshold=parseFloat(ruleInputs[key].value);if(!Number.isFinite(threshold))return false;if(key==='incubator')return value<threshold;return value>threshold}
  function addTopic(key,value,triggered){const row=document.createElement('div');row.innerHTML=`<span>${topics[key]}</span><span>{ value: ${value.toFixed(1)} }</span><span>${triggered?'alerts/critical':'telemetry/store'}</span><span class="${triggered?'topic-alert':'topic-ok'}">${triggered?'ALERT':'OK'}</span>`;topicTable.insertBefore(row,topicTable.children[1]||null);while(topicTable.children.length>6)topicTable.removeChild(topicTable.lastElementChild)}
  function addAlert(key,value){state.alerts++;if(alertFeed.querySelector('.alert-empty'))alertFeed.innerHTML='';const el=document.createElement('div');el.className='alert-item';el.innerHTML=`<span class="alert-item__dot"></span><div><strong>${key==='humidity'?'Humidity':key.charAt(0).toUpperCase()+key.slice(1)} threshold triggered</strong><small>${now()} · ${topics[key]} · ${value.toFixed(1)} ${units[key]}</small></div><span>routed</span>`;alertFeed.prepend(el);while(alertFeed.children.length>5)alertFeed.removeChild(alertFeed.lastElementChild)}
  function tick(forceAlert=false){
    if(state.paused&&!forceAlert)return;
    state.values.cold=clamp(state.values.cold+(Math.random()-.5)*.35,2,11);
    state.values.incubator=clamp(state.values.incubator+(Math.random()-.5)*.25,33,39);
    state.values.freezer=clamp(state.values.freezer+(Math.random()-.5)*.7,-84,-66);
    state.values.humidity=clamp(state.values.humidity+(Math.random()-.5)*1.6,35,72);
    if(forceAlert){state.values.cold=parseFloat(ruleInputs.cold.value)+1.8;state.values.humidity=parseFloat(ruleInputs.humidity.value)+4}
    Object.keys(state.values).forEach(key=>{const value=state.values[key];state.history[key].push(value);if(state.history[key].length>42)state.history[key].shift();kpis[key].textContent=`${value.toFixed(1)} ${units[key]}`;const triggered=evaluate(key,value);addTopic(key,value,triggered);if(triggered&&(forceAlert||Math.random()<.18))addAlert(key,value);state.count++;});
    messageCount.textContent=state.count;packet.textContent=packet.textContent==='•••'?'● • •':packet.textContent==='● • •'?'• ● •':'•••';renderCharts();
  }
  function restart(){clearInterval(state.timer);state.timer=setInterval(()=>tick(false),parseInt(speedSelect.value,10)||1500)}
  pauseBtn.addEventListener('click',()=>{state.paused=!state.paused;pauseBtn.textContent=state.paused?'Resume stream':'Pause stream';streamStatus.textContent=state.paused?'MQTT stream paused':'Receiving MQTT telemetry'});
  injectBtn.addEventListener('click',()=>tick(true));speedSelect.addEventListener('change',restart);window.addEventListener('resize',renderCharts);
  seed();renderCharts();restart();
});
