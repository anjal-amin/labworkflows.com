---
layout: default
permalink: /index.html
---

<link rel="stylesheet" href="{{ '/assets/home-dashboard.css?v=20260901-2' | relative_url }}">

<div class="home-dashboard">
  <section class="home-hero">
    <div>
      <span class="home-eyebrow">Labwork Flows</span>
      <h1>Automation, instrumentation, and data systems for better laboratory work.</h1>
      <p>Practical tools for reducing repetitive work, centralizing measurements, connecting instruments, and making experimental workflows more reliable and reusable.</p>

      <div class="shark-monitor" data-shark-monitor>
        <div class="shark-monitor__head">
          <div><span class="shark-monitor__dot"></span><strong>SHARK TANK · SENSOR DEMO</strong></div>
          <span data-shark-status>LIVE · NORMAL</span>
        </div>
        <div class="shark-monitor__metrics">
          <div><span>SHARKS TRACKED</span><strong data-shark-count>3</strong><small>RFID / acoustic tags</small></div>
          <div><span>WATER TEMP</span><strong><b data-shark-temp>24.2</b> °C</strong><small>Target 23–26 °C</small></div>
          <div><span>TURBIDITY</span><strong><b data-shark-turbidity>1.6</b> NTU</strong><small>Target &lt; 3 NTU</small></div>
          <div><span>DISSOLVED O₂</span><strong><b data-shark-oxygen>7.4</b> mg/L</strong><small>Target &gt; 6 mg/L</small></div>
        </div>
        <div class="shark-monitor__chart-wrap">
          <div class="shark-monitor__chart-head"><span>WATER QUALITY · LIVE TREND</span><span data-shark-time>SIMULATED</span></div>
          <svg class="shark-monitor__chart" viewBox="0 0 620 92" preserveAspectRatio="none" role="img" aria-label="Simulated shark tank sensor trend">
            <line x1="0" y1="23" x2="620" y2="23"></line><line x1="0" y1="46" x2="620" y2="46"></line><line x1="0" y1="69" x2="620" y2="69"></line>
            <polyline data-shark-line points="0,51 52,49 104,53 156,44 208,46 260,40 312,43 364,39 416,45 468,41 520,43 572,38 620,42"></polyline>
          </svg>
        </div>
        <div class="shark-monitor__footer">
          <div class="shark-monitor__track"><span>TRACKING</span><i></i><i></i><i></i><strong data-shark-track>3 sharks active</strong></div>
          <div class="shark-monitor__alert" data-shark-alert>All monitored conditions within range</div>
          <div class="shark-monitor__light"><span>LIGHTING</span><strong data-shark-light>DAY · 72%</strong></div>
        </div>
      </div>
    </div>
    <div class="home-status">
      <div class="home-status__live"><span class="home-status__dot"></span><strong>Systems-oriented lab automation</strong></div>
      <div><span>Focus</span><strong>Workflow improvement</strong></div>
      <div><span>Methods</span><strong>Software + instrumentation</strong></div>
      <div><span>Design</span><strong>Open + adaptable</strong></div>
    </div>
  </section>

  <section class="home-toolbar" aria-label="Core areas">
    <span>Automation</span><span>Monitoring</span><span>Computer vision</span><span>Data integration</span>
    <strong>Research infrastructure</strong>
  </section>

  <section class="home-kpis" aria-label="Core capabilities">
    <article><span>Workflow</span><strong>Automate repetitive tasks</strong><small>Reduce manual intervention</small></article>
    <article><span>Instrumentation</span><strong>Connect lab equipment</strong><small>Capture structured measurements</small></article>
    <article><span>Monitoring</span><strong>Centralize live data</strong><small>Dashboards, alerts, routing</small></article>
    <article><span>Analysis</span><strong>Make data reusable</strong><small>APIs, ML, reporting, LIMS</small></article>
  </section>

  {% assign latest_post = site.posts | first %}
  <section class="home-panel">
    <header>
      <div><span>Featured workflow</span><h2>{{ latest_post.title }}</h2></div>
      <span class="home-panel__state">INTERACTIVE</span>
    </header>
    <div class="home-article">
      <div class="home-brand">
        <img src="{{ 'assets/images/lw-logo.png' | relative_url }}" alt="Labwork Flows logo" class="logo">
        <div class="home-brand-copy"><span>Labwork Flows</span><strong>Automating laboratory procedures and data movement</strong></div>
      </div>
      <div class="post-content">
        {{ latest_post.content }}
      </div>
    </div>
  </section>

  <section class="home-bottom">
    <div><span>Design principle</span><h2>Turn isolated lab actions into connected infrastructure.</h2></div>
    <p>A measurement, button press, image, pressure reading, or temperature value becomes much more useful when it is captured consistently and made available to monitoring, analysis, alerting, automation, and downstream research systems.</p>
  </section>
</div>

<script>
(function(){
  const root=document.querySelector('[data-shark-monitor]'); if(!root)return;
  const temp=root.querySelector('[data-shark-temp]'), turb=root.querySelector('[data-shark-turbidity]'), oxy=root.querySelector('[data-shark-oxygen]'), line=root.querySelector('[data-shark-line]'), status=root.querySelector('[data-shark-status]'), alert=root.querySelector('[data-shark-alert]'), time=root.querySelector('[data-shark-time]'), light=root.querySelector('[data-shark-light]');
  let values=[51,49,53,44,46,40,43,39,45,41,43,38,42],tick=0;
  function update(){
    tick++;
    const t=24.2+(Math.random()-.5)*.45, u=1.6+(Math.random()-.5)*.7, o=7.4+(Math.random()-.5)*.55;
    temp.textContent=t.toFixed(1); turb.textContent=Math.max(.5,u).toFixed(1); oxy.textContent=o.toFixed(1);
    values.push(Math.max(22,Math.min(72,values[values.length-1]+(Math.random()-.5)*12))); values.shift();
    line.setAttribute('points',values.map((v,i)=>(i*(620/(values.length-1))).toFixed(1)+','+v.toFixed(1)).join(' '));
    time.textContent=new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit',second:'2-digit'});
    const warn=t>25.7||u>2.7||o<6.3;
    status.textContent=warn?'LIVE · CHECK':'LIVE · NORMAL'; status.classList.toggle('is-warning',warn); alert.classList.toggle('is-warning',warn);
    alert.textContent=warn?(u>2.7?'Turbidity approaching alert threshold':o<6.3?'Dissolved oxygen approaching threshold':'Temperature approaching upper range'):'All monitored conditions within range';
    light.textContent=((new Date().getHours()>=7&&new Date().getHours()<19)?'DAY · ':'NIGHT · ')+(68+Math.round(Math.random()*8))+'%';
  }
  update(); setInterval(update,2400);
})();
</script>
