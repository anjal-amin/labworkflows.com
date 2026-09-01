---
layout: default
title: Projects
permalink: /projects/
---

<div class="projects-page">
  <header class="projects-intro">
    <h1>Projects</h1>
    <h2>Intro: Building Tools for Better Experimenting</h2>
    <p>Creating tools that enable open-science and improve experimental workflows.</p>
  </header>

  <div class="project-grid">
    <section class="project-card">
      <div class="project-card__header"><h2>5. Flow-Meter Addition to Dinoflagellate Sampler</h2><span class="project-card__number">05</span></div>
      <div class="project-card__body">
        <p>Jamie Pierson's lab wanted to measure dinoflagellate density in bays and esuaries of Puerto Rico. An earlier project connected up the phytometer, and we needed to measure the flow-rate to calculate the density.</p>
        <ul><li>Inexpensive flow-meter</li><li>Arduino based system</li><li>Built into a portable "tub" for on site use with a battery.</li></ul>
        <div class="project-media"><button type="button" data-lightbox><img src="/assets/images/flow-meter-test-setup-800x700.jpg" alt="Test Setup"></button><button type="button" data-lightbox><img src="/assets/images/flow-meter-arduino-800x480.jpg" alt="Arduino"></button></div>
      </div>
    </section>

    <section class="project-card">
      <div class="project-card__header"><h2>4. Pump Monitor for Zebra-fish Circulation</h2><span class="project-card__number">04</span></div>
      <div class="project-card__body">
        <p>The ARC needs to replace filters before they are too clogged, using pressure as an excellent proxy. The system was an analog pressure-gauge that has to be checked manually. Remote monitoring allows for 24/7 access, and notification, saving time and improving responsiveness.</p>
        <ul><li>IOT based, <a href="https://gitlab.com/LabworkFlows/iot-manifold-pressure">open-source</a>.</li><li>Designed for the research-aquaculture group (ARC) at IMET.</li><li>Provides a dashboard showing the current and historical data.</li><li>Can send TXT and email alerts.</li></ul>
        <div class="project-media"><button type="button" data-lightbox><img src="/assets/images/arc-dashboard-700x384.png" alt="Dashboard"></button><button type="button" data-lightbox><img src="/assets/images/arc-monitor-512x480.jpg" alt="Device"></button></div>
      </div>
    </section>

    <section class="project-card">
      <div class="project-card__header"><h2>3. Six-Headed Peristaltic Pump</h2><span class="project-card__number">03</span></div>
      <div class="project-card__body">
        <ul><li>Designed for biocement experiments as part of an NSF grant:<ul><li>IoT-based control and monitoring.</li><li>Runs pumps independently or in complex patterns, including reverse flow.</li><li>Open-source and remotely accessible via browser or lab interface.</li></ul></li></ul>
        <div class="project-media single"><button type="button" data-lightbox><img src="/assets/images/pump-outer-512x512.jpg" alt="Pump"></button></div>
      </div>
    </section>

    <section class="project-card">
      <div class="project-card__header"><h2>2. Freezer Alarm System</h2><span class="project-card__number">02</span></div>
      <div class="project-card__body">
        <ul><li>Alarm system for -80°C freezers:<ul><li>Sends text or email alerts during temperature issues.</li><li>Operates during power outages or internet loss.</li><li>Open-source, adaptable, and no subscription fee, offering a cost-effective alternative to commercial solutions.</li></ul></li></ul>
        <div class="project-media single"><button type="button" data-lightbox><img src="/assets/images/minus80-innards-512x512.jpg" alt="Innards"></button></div>
      </div>
    </section>

    <section class="project-card">
      <div class="project-card__header"><h2>1. Spectrophotometer Data Logger</h2><span class="project-card__number">01</span></div>
      <div class="project-card__body">
        <ul><li>Custom-built data logger for Shimadzu UV 1601 spectrophotometer:<ul><li>Captures "% transmission" values for biomass.</li><li>Uploads data to a cloud database, plots in real time, and allows for direct analysis or publication-ready outputs.</li><li>Open-source and tailored to speed up experiments, especially where time-sensitive accuracy is critical.</li></ul></li></ul>
        <div class="project-media"><button type="button" data-lightbox><img src="/assets/images/button-1.png" alt="Button A"></button><button type="button" data-lightbox><img src="/assets/images/button-2.png" alt="Button B"></button></div>
      </div>
    </section>
  </div>
</div>

<script src="{{ '/assets/site.js' | relative_url }}" defer></script>
