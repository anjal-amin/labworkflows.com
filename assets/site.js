document.addEventListener('DOMContentLoaded',()=>{
  const cards=[...document.querySelectorAll('.project-card')];
  if('IntersectionObserver'in window){
    const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}})},{threshold:.12});
    cards.forEach(c=>{c.classList.add('reveal-card');io.observe(c)});
  }else{cards.forEach(c=>c.classList.add('is-visible'))}

  const demo=document.querySelector('[data-lab-demo]');
  if(demo){
    const sample=demo.querySelector('[data-demo-sample]');
    const value=demo.querySelector('[data-demo-value]');
    const threshold=demo.querySelector('[data-demo-threshold]');
    const run=demo.querySelector('[data-demo-run]');
    const blink=demo.querySelector('[data-demo-blink]');
    const led=demo.querySelector('[data-demo-led]');
    const ledLabel=demo.querySelector('[data-demo-led-label]');
    const ledRule=demo.querySelector('[data-demo-led-rule]');
    const reading=demo.querySelector('[data-demo-reading]');
    const state=demo.querySelector('[data-demo-state]');
    const codeValue=demo.querySelector('[data-code-value]');
    const codeThreshold=demo.querySelector('[data-code-threshold]');
    const codeSample=demo.querySelector('[data-code-sample]');
    const record=demo.querySelector('[data-demo-record]');
    const recordStatus=demo.querySelector('[data-demo-record-status]');
    let blinkTimer=null;

    const cleanSample=()=>((sample.value||'UNLABELED').trim().slice(0,24)||'UNLABELED');
    const numeric=(el,fallback)=>{const n=Number.parseFloat(el.value);return Number.isFinite(n)?Math.min(100,Math.max(0,n)):fallback};
    const syncCode=()=>{
      const v=numeric(value,0).toFixed(1), t=numeric(threshold,0).toFixed(1), s=cleanSample();
      codeValue.textContent=v;codeThreshold.textContent=t;codeSample.textContent=s;reading.textContent=`${v} °C`;
    };
    [sample,value,threshold].forEach(el=>el.addEventListener('input',syncCode));
    syncCode();

    const setLed=(on,alert=false)=>{
      led.classList.toggle('is-on',on);
      led.classList.toggle('is-alert',alert&&on);
      ledLabel.textContent=on?(alert?'Alert light on':'Status light on'):'Light off';
    };
    run.addEventListener('click',()=>{
      if(blinkTimer){clearInterval(blinkTimer);blinkTimer=null;blink.textContent='Blink light';led.classList.remove('is-blinking')}
      const v=numeric(value,0),t=numeric(threshold,0),s=cleanSample(),alert=v>=t;
      value.value=v.toFixed(1);threshold.value=t.toFixed(1);sample.value=s;syncCode();
      state.textContent='STORED';setLed(alert,alert);
      ledRule.textContent=alert?`${v.toFixed(1)} °C meets or exceeds the ${t.toFixed(1)} °C threshold.`:`${v.toFixed(1)} °C is below the ${t.toFixed(1)} °C threshold.`;
      const payload={sample_id:s,temperature_c:Number(v.toFixed(1)),status:alert?'ON':'OFF',source:'raspberry-pi-lab-01',stored_at:new Date().toISOString()};
      record.textContent=JSON.stringify(payload,null,2);recordStatus.textContent='Measurement stored';
      demo.classList.remove('has-run');void demo.offsetWidth;demo.classList.add('has-run');
    });
    blink.addEventListener('click',()=>{
      if(blinkTimer){clearInterval(blinkTimer);blinkTimer=null;blink.textContent='Blink light';led.classList.remove('is-blinking');setLed(false);state.textContent='READY';return}
      let on=false;state.textContent='BLINK TEST';blink.textContent='Stop blinking';led.classList.add('is-blinking');
      blinkTimer=setInterval(()=>{on=!on;setLed(on,false)},420);
    });
  }

  const buttons=[...document.querySelectorAll('[data-lightbox]')];
  if(buttons.length){
    const box=document.createElement('div');box.className='bio-lightbox';box.setAttribute('role','dialog');box.setAttribute('aria-modal','true');box.innerHTML='<button class="bio-lightbox__close" type="button" aria-label="Close image">×</button><img alt="">';document.body.appendChild(box);
    const img=box.querySelector('img');const close=()=>{box.classList.remove('is-open');document.body.style.overflow=''};
    buttons.forEach(b=>b.addEventListener('click',()=>{const source=b.querySelector('img');img.src=source.src;img.alt=source.alt;box.classList.add('is-open');document.body.style.overflow='hidden';box.querySelector('button').focus()}));
    box.addEventListener('click',e=>{if(e.target===box||e.target.closest('.bio-lightbox__close'))close()});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  }
});
