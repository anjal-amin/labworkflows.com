document.addEventListener('DOMContentLoaded',()=>{
  const path=window.location.pathname.replace(/\/+$/,'')||'/';
  if(path==='/about')document.body.classList.add('page-about');
  if(path==='/projects')document.body.classList.add('page-projects');

  const cards=[...document.querySelectorAll('.project-card')];
  if('IntersectionObserver'in window){
    const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}})},{threshold:.12});
    cards.forEach(c=>{c.classList.add('reveal-card');io.observe(c)});
  }else{cards.forEach(c=>c.classList.add('is-visible'))}

  if(path==='/projects'){
    const colony=cards.find(c=>c.textContent.includes('Automated Colony Detection'));
    if(colony&&!colony.querySelector('.colony-visuals')){
      const note=colony.querySelector('.research-note');
      const block=document.createElement('section');
      block.className='colony-visuals';
      block.innerHTML=`
        <div class="colony-visuals__head"><span>Annotated zones</span><strong>Plate geometry + scientist review</strong></div>
        <div class="colony-visuals__grid">
          <figure class="colony-visual">
            <div class="colony-visual__plate" aria-label="Diagram of inner and outer assay zones">
              <svg viewBox="0 0 320 320" role="img" aria-labelledby="zone-title zone-desc">
                <title id="zone-title">Assay zone geometry</title><desc id="zone-desc">Petri plate with central antibiotic disk, inner Zone A and outer Zone B.</desc>
                <circle class="plate-bg" cx="160" cy="160" r="138"/>
                <circle class="zone-b" cx="160" cy="160" r="118"/>
                <circle class="zone-a" cx="160" cy="160" r="70"/>
                <circle class="disk" cx="160" cy="160" r="15"/>
                <line x1="160" y1="160" x2="230" y2="160" class="measure-a"/>
                <line x1="160" y1="160" x2="278" y2="160" class="measure-b"/>
                <text x="174" y="147" class="svg-label svg-label--a">A · inner region</text>
                <text x="220" y="107" class="svg-label svg-label--b">B · outer region</text>
                <text x="160" y="165" text-anchor="middle" class="svg-disk">6 mm</text>
              </svg>
            </div>
            <figcaption><strong>Zone geometry</strong><span>Zone A measures the inner assay region from the disk center. Zone B captures the surrounding outer region. The 6 mm paper disk provides the physical calibration reference.</span></figcaption>
          </figure>
          <figure class="colony-visual">
            <div class="colony-visual__plate" aria-label="Diagram of colony annotations">
              <svg viewBox="0 0 320 320" role="img" aria-labelledby="ann-title ann-desc">
                <title id="ann-title">Colony annotations</title><desc id="ann-desc">Petri plate with green primary detections and yellow secondary or uncertain detections.</desc>
                <circle class="plate-bg" cx="160" cy="160" r="138"/>
                <circle class="zone-b" cx="160" cy="160" r="118"/>
                <circle class="zone-a" cx="160" cy="160" r="70"/>
                <circle class="disk" cx="160" cy="160" r="15"/>
                <g class="primary-marks"><circle cx="98" cy="112" r="8"/><circle cx="129" cy="92" r="7"/><circle cx="189" cy="104" r="9"/><circle cx="220" cy="130" r="6"/><circle cx="114" cy="188" r="8"/><circle cx="196" cy="198" r="7"/><circle cx="245" cy="188" r="8"/><circle cx="84" cy="218" r="6"/><circle cx="228" cy="232" r="7"/></g>
                <g class="secondary-marks"><circle cx="142" cy="124" r="6"/><circle cx="205" cy="157" r="7"/><circle cx="148" cy="219" r="8"/><circle cx="255" cy="105" r="6"/></g>
                <path d="M76 260h14" class="legend-green"/><text x="96" y="264" class="svg-legend">primary detection</text>
                <path d="M188 260h14" class="legend-yellow"/><text x="208" y="264" class="svg-legend">secondary / uncertain</text>
              </svg>
            </div>
            <figcaption><strong>Annotation review</strong><span>Green circles represent primary colony detections used for counting. Yellow circles flag secondary or uncertain candidates for scientist review before they become annotation and training checkpoints.</span></figcaption>
          </figure>
        </div>
        <div class="colony-visuals__legend"><span><i class="zone-a-key"></i><strong>Zone A</strong> inner analysis region</span><span><i class="zone-b-key"></i><strong>Zone B</strong> outer analysis region</span><span><i class="colony-primary-key"></i><strong>Green</strong> accepted/primary colony</span><span><i class="colony-secondary-key"></i><strong>Yellow</strong> secondary or uncertain colony</span></div>`;
      if(note)note.before(block);else colony.querySelector('.project-card__body').appendChild(block);
    }
  }

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
