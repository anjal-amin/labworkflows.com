---
layout: default
---

<link rel="stylesheet" href="{{ '/assets/home-dashboard.css' | relative_url }}">

<div class="home-dashboard">
  <section class="home-hero">
    <div>
      <span class="home-eyebrow">Labwork Flows</span>
      <h1>Automation, instrumentation, and data systems for better laboratory work.</h1>
      <p>Practical tools for reducing repetitive work, centralizing measurements, connecting instruments, and making experimental workflows more reliable and reusable.</p>
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
