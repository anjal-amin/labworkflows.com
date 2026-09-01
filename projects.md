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
          <div class="research-step"><span>01</span><strong>Acquire</strong><small>Plate image</small></div><div class="research-arrow">→</div>
          <div class="research-step"><span>02</span><strong>Detect</strong><small>Candidate colonies</small></div><div class="research-arrow">→</div>
          <div class="research-step"><span>03</span><strong>Review</strong><small>Scientist corrections</small></div><div class="research-arrow">→</div>
          <div class="research-step"><span>04</span><strong>Train</strong><small>Curated annotations</small></div><div class="research-arrow">→</div>
          <div class="research-step"><span>05</span><strong>Validate</strong><small>Compare performance</small></div>
        </div>
        <h3>Current experimental workflow</h3>
        <ul><li>Detect colony candidates from uploaded plate images, including difficult small, overlapping, and low-contrast colonies.</li><li>Separate measurements into defined inner and outer assay regions using a consistent plate-centered spatial rule.</li><li>Use a 6 mm antibiotic paper disk as the physical reference for converting image-space radius measurements into millimeters.</li><li>Present automated detections to the scientist for correction before they become annotation or training checkpoints.</li><li>Save reviewed examples into selectable computer-vision profiles that can be used to train subsequent models.</li><li>Keep newly trained models separate from production use until explicitly promoted, preserving the distinction between an experiment and an accepted model.</li><li>Export counts and associated metadata even when a model has not yet been promoted.</li></ul>
        <h3>What is being evaluated</h3>
        <div class="research-metrics"><div><span>Detection</span><strong>Missed colonies vs. false positives</strong></div><div><span>Morphology</span><strong>Small and overlapping colonies</strong></div><div><span>Geometry</span><strong>Plate center and region consistency</strong></div><div><span>Measurement</span><strong>Pixel-to-mm reproducibility</strong></div><div><span>Modeling</span><strong>Training-set quality and model versioning</strong></div><div><span>Workflow</span><strong>Scientist review efficiency</strong></div></div>
        <div class="research-note"><strong>Scientific status:</strong> The system is currently a methods-development and validation platform. It is not presented as a finalized microbiology assay or autonomous result-producing instrument.</div>
      </div>
    </section>

    <section class="project-card project-card--research">
      <div class="project-card__header"><div><div class="project-status"><span class="project-status__dot"></span>Field prototype · Deployed concept</div><h2>5. Flow-Meter Addition to Dinoflagellate Sampler</h2></div><span class="project-card__number">05</span></div>
      <div class="project-card__body">
        <p>Jamie Pierson's lab wanted to measure dinoflagellate density in bays and esuaries of Puerto Rico. An earlier project connected up the phytometer, and we needed to measure the flow-rate to calculate the density.</p>
        <div class="research-summary"><div class="research-summary__item"><span class="research-summary__label">Primary objective</span><strong>Quantify sampled water volume</strong><span>Add flow-rate measurement so dinoflagellate density can be calculated from field sampling.</span></div><div class="research-summary__item"><span class="research-summary__label">System</span><strong>Arduino + inexpensive flow meter</strong><span>Portable electronics integrated into a battery-powered field setup.</span></div><div class="research-summary__item"><span class="research-summary__label">Environment</span><strong>On-site marine sampling</strong><span>Designed for portable use in bays and estuaries.</span></div></div>
        <div class="research-pipeline"><div class="research-step"><span>01</span><strong>Sample</strong><small>Water intake</small></div><div class="research-arrow">→</div><div class="research-step"><span>02</span><strong>Measure</strong><small>Flow rate</small></div><div class="research-arrow">→</div><div class="research-step"><span>03</span><strong>Calculate</strong><small>Volume sampled</small></div><div class="research-arrow">→</div><div class="research-step"><span>04</span><strong>Estimate</strong><small>Cell density</small></div></div>
        <h3>System design</h3><ul><li>Inexpensive flow-meter.</li><li>Arduino based system.</li><li>Built into a portable "tub" for on site use with a battery.</li></ul>
        <h3>Engineering value</h3><div class="research-metrics"><div><span>Measurement</span><strong>Flow-rate capture</strong></div><div><span>Portability</span><strong>Battery-powered field use</strong></div><div><span>Integration</span><strong>Connects physical sampling to quantitative density calculations</strong></div></div>
        <div class="project-media"><button type="button" data-lightbox><img src="/assets/images/flow-meter-test-setup-800x700.jpg" alt="Test Setup"></button><button type="button" data-lightbox><img src="/assets/images/flow-meter-arduino-800x480.jpg" alt="Arduino"></button></div>
        <div class="research-note"><strong>Project status:</strong> A practical instrumentation addition that converts a previously qualitative field workflow into one with a directly measurable sampling parameter.</div>
      </div>
    </section>

    <section class="project-card project-card--research">
      <div class="project-card__header"><div><div class="project-status"><span class="project-status__dot"></span>Operational monitoring · Remote alerting</div><h2>4. Pump Monitor for Zebra-fish Circulation</h2></div><span class="project-card__number">04</span></div>
      <div class="project-card__body">
        <p>The ARC needs to replace filters before they are too clogged, using pressure as an excellent proxy. The system was an analog pressure-gauge that has to be checked manually. Remote monitoring allows for 24/7 access, and notification, saving time and improving responsiveness.</p>
        <div class="research-summary"><div class="research-summary__item"><span class="research-summary__label">Primary objective</span><strong>Detect filter loading earlier</strong><span>Use pressure as a proxy for filter condition instead of relying on manual gauge checks.</span></div><div class="research-summary__item"><span class="research-summary__label">System</span><strong>IoT pressure monitoring</strong><span>Remote sensing, historical visualization, and alerting.</span></div><div class="research-summary__item"><span class="research-summary__label">Users</span><strong>Research aquaculture group</strong><span>Designed for the ARC at IMET.</span></div></div>
        <div class="research-pipeline"><div class="research-step"><span>01</span><strong>Sense</strong><small>System pressure</small></div><div class="research-arrow">→</div><div class="research-step"><span>02</span><strong>Transmit</strong><small>IoT telemetry</small></div><div class="research-arrow">→</div><div class="research-step"><span>03</span><strong>Visualize</strong><small>Dashboard + history</small></div><div class="research-arrow">→</div><div class="research-step"><span>04</span><strong>Alert</strong><small>TXT + email</small></div></div>
        <h3>Current capabilities</h3><ul><li>IOT based, <a href="https://gitlab.com/LabworkFlows/iot-manifold-pressure">open-source</a>.</li><li>Designed for the research-aquaculture group (ARC) at IMET.</li><li>Provides a dashboard showing the current and historical data.</li><li>Can send TXT and email alerts.</li></ul>
        <h3>Operational impact</h3><div class="research-metrics"><div><span>Availability</span><strong>24/7 remote access</strong></div><div><span>Response</span><strong>Automatic notification</strong></div><div><span>Maintenance</span><strong>Pressure used as a filter-condition proxy</strong></div></div>
        <div class="project-media"><button type="button" data-lightbox><img src="/assets/images/arc-dashboard-700x384.png" alt="Dashboard"></button><button type="button" data-lightbox><img src="/assets/images/arc-monitor-512x480.jpg" alt="Device"></button></div>
        <div class="research-note"><strong>Project status:</strong> The workflow replaces periodic manual observation with continuous telemetry, historical context, and alert-driven response.</div>
      </div>
    </section>

    <section class="project-card project-card--research">
      <div class="project-card__header"><div><div class="project-status"><span class="project-status__dot"></span>Research instrumentation · Automated control</div><h2>3. Six-Headed Peristaltic Pump</h2></div><span class="project-card__number">03</span></div>
      <div class="project-card__body">
        <p>A multi-channel fluid-control system designed for biocement experiments as part of an NSF grant.</p>
        <div class="research-summary"><div class="research-summary__item"><span class="research-summary__label">Primary objective</span><strong>Automate repeatable fluid delivery</strong><span>Coordinate multiple pumps without continuous manual intervention.</span></div><div class="research-summary__item"><span class="research-summary__label">System</span><strong>Six independent pump channels</strong><span>Each channel can be operated independently or as part of a programmed pattern.</span></div><div class="research-summary__item"><span class="research-summary__label">Control model</span><strong>IoT + browser access</strong><span>Remote control and monitoring through a lab-facing interface.</span></div></div>
        <div class="research-pipeline"><div class="research-step"><span>01</span><strong>Define</strong><small>Pump pattern</small></div><div class="research-arrow">→</div><div class="research-step"><span>02</span><strong>Schedule</strong><small>Channel actions</small></div><div class="research-arrow">→</div><div class="research-step"><span>03</span><strong>Run</strong><small>Forward / reverse</small></div><div class="research-arrow">→</div><div class="research-step"><span>04</span><strong>Monitor</strong><small>Remote interface</small></div></div>
        <h3>Current capabilities</h3><ul><li>IoT-based control and monitoring.</li><li>Runs pumps independently or in complex patterns, including reverse flow.</li><li>Open-source and remotely accessible via browser or lab interface.</li></ul>
        <h3>Experimental value</h3><div class="research-metrics"><div><span>Repeatability</span><strong>Programmed pumping patterns</strong></div><div><span>Flexibility</span><strong>Independent channel control</strong></div><div><span>Access</span><strong>Remote browser operation</strong></div></div>
        <div class="project-media single"><button type="button" data-lightbox><img src="/assets/images/pump-outer-512x512.jpg" alt="Pump"></button></div>
        <div class="research-note"><strong>Project status:</strong> A custom research instrument created to make complex fluid-delivery procedures programmable, repeatable, and remotely accessible.</div>
      </div>
    </section>

    <section class="project-card project-card--research">
      <div class="project-card__header"><div><div class="project-status"><span class="project-status__dot"></span>Operational safety · Equipment monitoring</div><h2>2. Freezer Alarm System</h2></div><span class="project-card__number">02</span></div>
      <div class="project-card__body">
        <p>An alarm system for -80°C freezers intended to reduce the risk of unnoticed temperature excursions and preserve critical stored material.</p>
        <div class="research-summary"><div class="research-summary__item"><span class="research-summary__label">Primary objective</span><strong>Detect temperature failures quickly</strong><span>Provide automatic notification when freezer conditions leave the expected range.</span></div><div class="research-summary__item"><span class="research-summary__label">Resilience</span><strong>Designed for outages</strong><span>Operates during power outages or loss of internet connectivity.</span></div><div class="research-summary__item"><span class="research-summary__label">Design goal</span><strong>Open and adaptable</strong><span>No subscription fee and customizable for lab-specific monitoring needs.</span></div></div>
        <div class="research-pipeline"><div class="research-step"><span>01</span><strong>Sense</strong><small>Freezer temperature</small></div><div class="research-arrow">→</div><div class="research-step"><span>02</span><strong>Evaluate</strong><small>Threshold condition</small></div><div class="research-arrow">→</div><div class="research-step"><span>03</span><strong>Alert</strong><small>Text / email</small></div><div class="research-arrow">→</div><div class="research-step"><span>04</span><strong>Respond</strong><small>Protect samples</small></div></div>
        <h3>Current capabilities</h3><ul><li>Sends text or email alerts during temperature issues.</li><li>Operates during power outages or internet loss.</li><li>Open-source, adaptable, and no subscription fee, offering a cost-effective alternative to commercial solutions.</li></ul>
        <h3>Operational value</h3><div class="research-metrics"><div><span>Resilience</span><strong>Continues through outages</strong></div><div><span>Notification</span><strong>Text and email alerting</strong></div><div><span>Cost</span><strong>No recurring monitoring subscription</strong></div></div>
        <div class="project-media single"><button type="button" data-lightbox><img src="/assets/images/minus80-innards-512x512.jpg" alt="Innards"></button></div>
        <div class="research-note"><strong>Project status:</strong> A practical monitoring system focused on reliable notification and continuity during the failure modes that matter most in cold-storage workflows.</div>
      </div>
    </section>

    <section class="project-card project-card--research">
      <div class="project-card__header"><div><div class="project-status"><span class="project-status__dot"></span>Data acquisition · Workflow automation</div><h2>1. Spectrophotometer Data Logger</h2></div><span class="project-card__number">01</span></div>
      <div class="project-card__body">
        <p>A custom-built data logger for the Shimadzu UV 1601 spectrophotometer that captures instrument output and moves it directly into a digital analysis workflow.</p>
        <div class="research-summary"><div class="research-summary__item"><span class="research-summary__label">Primary objective</span><strong>Eliminate manual transcription</strong><span>Capture "% transmission" measurements directly from the instrument.</span></div><div class="research-summary__item"><span class="research-summary__label">Data path</span><strong>Instrument → cloud database</strong><span>Measurements are centralized and immediately available for visualization and analysis.</span></div><div class="research-summary__item"><span class="research-summary__label">Scientific benefit</span><strong>Faster time-sensitive analysis</strong><span>Reduces friction between measurement, interpretation, and publication-ready output.</span></div></div>
        <div class="research-pipeline"><div class="research-step"><span>01</span><strong>Measure</strong><small>% transmission</small></div><div class="research-arrow">→</div><div class="research-step"><span>02</span><strong>Capture</strong><small>Digital logger</small></div><div class="research-arrow">→</div><div class="research-step"><span>03</span><strong>Store</strong><small>Cloud database</small></div><div class="research-arrow">→</div><div class="research-step"><span>04</span><strong>Analyze</strong><small>Plots + outputs</small></div></div>
        <h3>Current capabilities</h3><ul><li>Captures "% transmission" values for biomass.</li><li>Uploads data to a cloud database, plots in real time, and allows for direct analysis or publication-ready outputs.</li><li>Open-source and tailored to speed up experiments, especially where time-sensitive accuracy is critical.</li></ul>
        <h3>Workflow value</h3><div class="research-metrics"><div><span>Data quality</span><strong>Reduces transcription steps</strong></div><div><span>Accessibility</span><strong>Centralized cloud records</strong></div><div><span>Analysis</span><strong>Immediate plotting and downstream use</strong></div></div>
        <div class="project-media"><button type="button" data-lightbox><img src="/assets/images/button-1.png" alt="Button A"></button><button type="button" data-lightbox><img src="/assets/images/button-2.png" alt="Button B"></button></div>
        <div class="research-note"><strong>Project status:</strong> A data-acquisition bridge that turns an older laboratory instrument into a connected source for realtime visualization, centralized records, and downstream analysis.</div>
      </div>
    </section>
  </div>
</div>

<script src="{{ '/assets/site.js' | relative_url }}" defer></script>
