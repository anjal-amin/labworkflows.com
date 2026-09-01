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
    <section class="project-card project-card--research">
      <div class="project-card__header">
        <div>
          <div class="project-status"><span class="project-status__dot"></span>Active development · Validation stage</div>
          <h2>6. Automated Colony Detection &amp; Antibiotic Plate Analysis</h2>
        </div>
        <span class="project-card__number">06</span>
      </div>
      <div class="project-card__body">
        <p>A computer-vision workflow for detecting and counting bacterial colonies on antibiotic diffusion assay plates, measuring spatial regions around the antibiotic disk, and preserving scientist review as part of the analytical process.</p>

        <div class="research-summary">
          <div class="research-summary__item"><span class="research-summary__label">Current stage</span><strong>Prototype validation</strong><span>Detection, review, annotation, training, and model-promotion workflows are being integrated and tested.</span></div>
          <div class="research-summary__item"><span class="research-summary__label">Primary objective</span><strong>Reproducible colony quantification</strong><span>Reduce manual counting while retaining traceability and scientist control over ambiguous detections.</span></div>
          <div class="research-summary__item"><span class="research-summary__label">Scientific constraint</span><strong>Human-in-the-loop</strong><span>Automated predictions are treated as candidates until reviewed or accepted by a scientist.</span></div>
        </div>

        <div class="research-pipeline" aria-label="Colony detection research workflow">
          <div class="research-step"><span>01</span><strong>Acquire</strong><small>Plate image</small></div>
          <div class="research-arrow" aria-hidden="true">→</div>
          <div class="research-step"><span>02</span><strong>Detect</strong><small>Candidate colonies</small></div>
          <div class="research-arrow" aria-hidden="true">→</div>
          <div class="research-step"><span>03</span><strong>Review</strong><small>Scientist corrections</small></div>
          <div class="research-arrow" aria-hidden="true">→</div>
          <div class="research-step"><span>04</span><strong>Train</strong><small>Curated annotations</small></div>
          <div class="research-arrow" aria-hidden="true">→</div>
          <div class="research-step"><span>05</span><strong>Validate</strong><small>Compare performance</small></div>
        </div>

        <h3>Current experimental workflow</h3>
        <ul>
          <li>Detect colony candidates from uploaded plate images, including difficult small, overlapping, and low-contrast colonies.</li>
          <li>Separate measurements into defined inner and outer assay regions using a consistent plate-centered spatial rule.</li>
          <li>Use a 6 mm antibiotic paper disk as the physical reference for converting image-space radius measurements into millimeters.</li>
          <li>Present automated detections to the scientist for correction before they become annotation or training checkpoints.</li>
          <li>Save reviewed examples into selectable computer-vision profiles that can be used to train subsequent models.</li>
          <li>Keep newly trained models separate from production use until explicitly promoted, preserving the distinction between an experiment and an accepted model.</li>
          <li>Export counts and associated metadata even when a model has not yet been promoted.</li>
        </ul>

        <h3>What is being evaluated</h3>
        <div class="research-metrics">
          <div><span>Detection</span><strong>Missed colonies vs. false positives</strong></div>
          <div><span>Morphology</span><strong>Small and overlapping colonies</strong></div>
          <div><span>Geometry</span><strong>Plate center and region consistency</strong></div>
          <div><span>Measurement</span><strong>Pixel-to-mm reproducibility</strong></div>
          <div><span>Modeling</span><strong>Training-set quality and model versioning</strong></div>
          <div><span>Workflow</span><strong>Scientist review efficiency</strong></div>
        </div>

        <div class="research-note">
          <strong>Scientific status:</strong> The system is currently a methods-development and validation platform. It is not presented as a finalized microbiology assay or autonomous result-producing instrument. The immediate goal is to establish a repeatable annotated dataset, quantify model performance against scientist-reviewed plates, and determine when a trained model is sufficiently reliable to promote for routine use.
        </div>
      </div>
    </section>

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
