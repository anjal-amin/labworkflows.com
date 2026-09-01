---
layout: default
title: Realtime Monitoring
permalink: /monitoring/
---

<div class="monitor-page" data-monitoring-app>
  <section class="monitor-hero">
    <div>
      <span class="monitor-eyebrow">Realtime Monitoring &amp; Custom Alerting</span>
      <h1>Live lab telemetry with Grafana-style monitoring and MQTT routing.</h1>
      <p>Sensor measurements can be published over MQTT, centralized, visualized in realtime, and evaluated against custom alert rules. This demo simulates a small laboratory monitoring stack with updating telemetry, triggered alerts, and message routing.</p>
    </div>
    <div class="monitor-status-card">
      <div class="monitor-status-line"><span class="monitor-live-dot"></span><strong>System live</strong></div>
      <div><span>Broker</span><strong>mqtt://lab-broker</strong></div>
      <div><span>Active sensors</span><strong data-sensor-count>4</strong></div>
      <div><span>Messages</span><strong data-message-count>0</strong></div>
    </div>
  </section>

  <section class="monitor-toolbar" aria-label="Monitoring controls">
    <label>Simulation speed
      <select data-speed>
        <option value="1500">Normal</option>
        <option value="700">Fast</option>
        <option value="3000">Slow</option>
      </select>
    </label>
    <button type="button" data-pause>Pause stream</button>
    <button type="button" class="monitor-button--alert" data-inject-alert>Inject alert</button>
    <span class="monitor-toolbar__status" data-stream-status>Receiving MQTT telemetry</span>
  </section>

  <section class="monitor-kpis" aria-label="Current sensor values">
    <article><span>Cold room</span><strong data-kpi="cold">4.2 °C</strong><small>lab/coldroom/temperature</small></article>
    <article><span>Incubator</span><strong data-kpi="incubator">36.8 °C</strong><small>lab/incubator/temperature</small></article>
    <article><span>Freezer</span><strong data-kpi="freezer">-79.6 °C</strong><small>lab/freezer/temperature</small></article>
    <article><span>Humidity</span><strong data-kpi="humidity">46.0 %</strong><small>lab/environment/humidity</small></article>
  </section>

  <section class="monitor-grid">
    <article class="monitor-panel monitor-panel--wide">
      <header><div><span>Panel A</span><h2>Temperature telemetry</h2></div><span class="monitor-panel__live">LIVE</span></header>
      <canvas data-chart="temperature" width="900" height="320" aria-label="Realtime temperature chart"></canvas>
      <div class="monitor-legend"><span><i class="series-cold"></i>Cold room</span><span><i class="series-incubator"></i>Incubator</span><span><i class="series-freezer"></i>Freezer</span></div>
    </article>

    <article class="monitor-panel">
      <header><div><span>Panel B</span><h2>Humidity</h2></div><span class="monitor-panel__live">LIVE</span></header>
      <canvas data-chart="humidity" width="430" height="250" aria-label="Realtime humidity chart"></canvas>
      <div class="monitor-threshold">Alert threshold <strong>&gt; 65%</strong></div>
    </article>

    <article class="monitor-panel">
      <header><div><span>Alert rules</span><h2>Custom thresholds</h2></div></header>
      <div class="monitor-rules">
        <label>Cold room high <span><input data-rule="cold" type="number" step="0.1" value="8"> °C</span></label>
        <label>Incubator low <span><input data-rule="incubator" type="number" step="0.1" value="35"> °C</span></label>
        <label>Freezer high <span><input data-rule="freezer" type="number" step="0.1" value="-70"> °C</span></label>
        <label>Humidity high <span><input data-rule="humidity" type="number" step="1" value="65"> %</span></label>
      </div>
    </article>

    <article class="monitor-panel monitor-panel--wide">
      <header><div><span>MQTT routing</span><h2>Message flow</h2></div></header>
      <div class="mqtt-flow">
        <div class="mqtt-node"><span>01</span><strong>Sensors</strong><small>Publish measurements</small></div>
        <div class="mqtt-link"><span data-packet>•••</span><small>MQTT</small></div>
        <div class="mqtt-node mqtt-node--broker"><span>02</span><strong>Broker</strong><small>Topic routing</small></div>
        <div class="mqtt-link"><span>→</span><small>subscribe</small></div>
        <div class="mqtt-node"><span>03</span><strong>Grafana</strong><small>Visualize streams</small></div>
        <div class="mqtt-link"><span>→</span><small>rules</small></div>
        <div class="mqtt-node mqtt-node--alert"><span>04</span><strong>Alert router</strong><small>Email · SMS · API</small></div>
      </div>
      <div class="topic-table" data-topic-table>
        <div><span>Topic</span><span>Payload</span><span>Route</span><span>Status</span></div>
      </div>
    </article>

    <article class="monitor-panel">
      <header><div><span>Alert timeline</span><h2>Triggered events</h2></div></header>
      <div class="alert-feed" data-alert-feed aria-live="polite">
        <div class="alert-empty">No active alerts. Rules are evaluating incoming telemetry.</div>
      </div>
    </article>

    <article class="monitor-panel">
      <header><div><span>Downstream systems</span><h2>Custom message routing</h2></div></header>
      <div class="route-list">
        <div><span class="route-icon">@</span><div><strong>Email</strong><small>Facilities + lab manager</small></div><span>enabled</span></div>
        <div><span class="route-icon">SMS</span><div><strong>Text alert</strong><small>Critical equipment only</small></div><span>enabled</span></div>
        <div><span class="route-icon">API</span><div><strong>Webhook</strong><small>LIMS / ticketing / automation</small></div><span>enabled</span></div>
      </div>
    </article>
  </section>

  <section class="monitor-explainer">
    <div><span>Why centralize?</span><h2>Elementary measurements become reusable infrastructure.</h2></div>
    <p>A temperature or humidity reading starts as a simple sensor value. Publishing it to MQTT creates a consistent event stream that can be consumed by Grafana, persisted for historical analysis, checked against custom thresholds, forwarded into a LIMS, used to trigger maintenance workflows, or exposed to other applications through APIs. The same measurement can support many systems without manual duplication.</p>
  </section>
</div>

<script src="{{ '/assets/monitoring.js' | relative_url }}" defer></script>
