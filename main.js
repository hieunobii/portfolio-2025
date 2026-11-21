'use strict';
(() => {
  const t = (key, variables) => window.PortfolioI18n.t(key, variables);
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const panels = [...document.querySelectorAll('[role="tabpanel"]')];
  const label = document.querySelector('#current-view');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const animationFrames = new Map();
  let animatedPanel = null;
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      counterObserver.unobserve(entry.target);
      animateValue(entry.target.matches('.skill-container') ? entry.target.querySelector('.skill-percentage') : entry.target);
    });
  }, { threshold: 0.25 });
  document.querySelectorAll('.metric strong, .fun-fact-block-value').forEach(element => {
    const numberNode = [...element.childNodes].find(node => node.nodeType === Node.TEXT_NODE && /\d/.test(node.textContent));
    if (!numberNode) return;
    const match = numberNode.textContent.match(/^(\D*)(\d+)(.*)$/);
    if (!match) return;
    const number = document.createElement('span');
    number.className = 'counter-value';
    number.dataset.target = match[2];
    number.textContent = match[2];
    numberNode.replaceWith(document.createTextNode(match[1]), number, document.createTextNode(match[3]));
  });
  document.querySelectorAll('.skill').forEach(skill => {
    const target = parseInt(skill.querySelector('.skill-value').textContent, 10);
    const bar = skill.nextElementSibling;
    const fill = bar.querySelector('.skill-percentage');
    fill.dataset.progress = target;
    fill.style.width = `${target}%`;
    bar.setAttribute('role', 'progressbar');
    bar.setAttribute('aria-label', skill.querySelector('h4').textContent);
    bar.setAttribute('aria-valuemin', '0');
    bar.setAttribute('aria-valuemax', '100');
    bar.setAttribute('aria-valuenow', String(target));
  });
  function finalValue(element) {
    if (element.dataset.progress !== undefined) element.style.width = `${element.dataset.progress}%`;
    else element.textContent = element.dataset.target;
  }
  function animateValue(element) {
    if (reducedMotion.matches) { finalValue(element); return; }
    const progress = element.dataset.progress !== undefined;
    const original = progress ? element.dataset.progress : element.dataset.target;
    const target = Number(original);
    const start = performance.now();
    function frame(now) {
      const fraction = Math.min((now - start) / 1250, 1);
      const eased = 1 - Math.pow(1 - fraction, 3);
      if (progress) element.style.width = `${eased * target}%`;
      else element.textContent = String(Math.round(eased * target)).padStart(original.length, '0');
      if (fraction < 1) animationFrames.set(element, requestAnimationFrame(frame));
      else { finalValue(element); animationFrames.delete(element); }
    }
    animationFrames.set(element, requestAnimationFrame(frame));
  }
  function animatePanel(id) {
    if (animatedPanel === id) return;
    animatedPanel = id;
    counterObserver.disconnect();
    animationFrames.forEach((frame, element) => { cancelAnimationFrame(frame); finalValue(element); });
    animationFrames.clear();
    document.querySelectorAll(`#${id} .counter-value, #${id} [data-progress]`).forEach(element => {
      if (reducedMotion.matches) { finalValue(element); return; }
      if (element.dataset.progress !== undefined) element.style.width = '0%';
      else element.textContent = '0'.padStart(element.dataset.target.length, '0');
      counterObserver.observe(element.dataset.progress !== undefined ? element.parentElement : element);
    });
  }
  reducedMotion.addEventListener('change', () => {
    if (!reducedMotion.matches) return;
    counterObserver.disconnect();
    animationFrames.forEach((frame, element) => { cancelAnimationFrame(frame); finalValue(element); });
    animationFrames.clear();
    document.querySelectorAll('.counter-value, [data-progress]').forEach(finalValue);
  });
  function activate(id, focus = false) {
    const current = tabs.find(tab => tab.dataset.tab === id) || tabs[0];
    tabs.forEach(tab => {
      const selected = tab === current;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    panels.forEach(panel => { panel.hidden = panel.id !== current.dataset.tab; });
    label.textContent = current.getAttribute('aria-label');
    document.title = `${label.textContent} — Hieu Minh Duong`;
    animatePanel(current.dataset.tab);
    if (focus) current.focus();
  }
  tabs.forEach(tab => tab.addEventListener('click', () => {
    if (location.hash === `#${tab.dataset.tab}`) activate(tab.dataset.tab);
    else location.hash = tab.dataset.tab;
  }));
  document.querySelector('.tabs').addEventListener('keydown', event => {
    const index = tabs.indexOf(document.activeElement);
    if (index < 0) return;
    let next;
    if (['ArrowRight', 'ArrowDown'].includes(event.key)) next = (index + 1) % tabs.length;
    if (['ArrowLeft', 'ArrowUp'].includes(event.key)) next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    location.hash = tabs[next].dataset.tab;
    activate(tabs[next].dataset.tab, true);
  });
  window.addEventListener('hashchange', () => {
    const id = location.hash.slice(1);
    if (!tabs.some(tab => tab.dataset.tab === id)) return;
    const previous = panels.find(panel => !panel.hidden);
    const focusWasInside = previous && previous.contains(document.activeElement);
    activate(id);
    if (focusWasInside) document.getElementById(id).focus();
  });
  const mobileLayout = matchMedia('(max-width: 800px)');
  function updateTabOrientation() {
    document.querySelector('.tabs').setAttribute('aria-orientation', mobileLayout.matches ? 'horizontal' : 'vertical');
  }
  mobileLayout.addEventListener('change', updateTabOrientation);
  updateTabOrientation();
  activate(location.hash.slice(1));
  document.querySelector('#year').textContent = new Date().getFullYear();

  const projects = [...document.querySelectorAll('.portfolio-grid figure')];
  const count = document.createElement('p');
  count.className = 'project-count';count.setAttribute('role','status');
  document.querySelector('.portfolio-grid').before(count);
  const categoryNames={category_all:'Design meets development',category_graphics:'Graphics',category_landing:'Landing Page',category_uiux:'Ui/Ux',category_web:'Website'};
  function updateCount(){
    const category=document.querySelector('.portfolio-filters [aria-pressed=true]').dataset.group;
    const visible=projects.filter(project=>!project.hidden).length;
    count.textContent=t('{count} projects · {category}',{count:visible,category:t(categoryNames[category])});
  }
  document.querySelectorAll('.portfolio-filters button').forEach(button=>button.addEventListener('click',()=>{
    document.querySelectorAll('.portfolio-filters button').forEach(filter=>filter.setAttribute('aria-pressed',String(filter===button)));
    projects.forEach(project=>project.hidden=!JSON.parse(project.dataset.groups).includes(button.dataset.group));updateCount();
  }));
  document.querySelectorAll('.testimonial').forEach(card=>{card.querySelector('img').alt=card.querySelector('.author').textContent;});
  document.querySelectorAll('img:not(.avatar img)').forEach(image=>{image.loading='lazy';image.decoding='async';});
  // Styled language picker with native buttons, listbox semantics and keyboard navigation.
  const languageSelect = document.querySelector('#language-select');
  const languageToggle = document.querySelector('#language-toggle');
  const languageMenu = document.querySelector('#language-menu');
  const languageOptions = [...languageMenu.querySelectorAll('[role=option]')];
  document.body.append(languageMenu);
  const languageNames = {en:'English',vi:'Tiếng Việt',ja:'日本語'};
  let languageOpen = false;
  let languageAnimation;
  function syncLanguageMenu() {
    const value = languageSelect.value;
    document.querySelector('[data-language-label]').textContent = {en:'EN',vi:'VI',ja:'日本語'}[value];
    languageToggle.setAttribute('aria-label', `${t('Language')}: ${languageNames[value]}`);
    languageOptions.forEach(option => option.setAttribute('aria-selected', String(option.dataset.language === value)));
  }
  function positionLanguageMenu() {
    const anchor=languageToggle.getBoundingClientRect(),width=Math.min(220,innerWidth-24);
    languageMenu.style.width=`${width}px`;
    languageMenu.style.left=`${Math.max(12,Math.min(anchor.right-width,innerWidth-width-12))}px`;
    languageMenu.style.top=`${Math.max(12,Math.min(anchor.bottom+9,innerHeight-languageMenu.offsetHeight-12))}px`;
  }
  function setLanguageMenu(open, restoreFocus = false) {
    languageOpen = open;
    languageToggle.setAttribute('aria-expanded', String(open));
    const currentMenuStyle=getComputedStyle(languageMenu);
    const menuStart=languageMenu.hidden
      ? {opacity:0,transform:'translateY(-6px) scale(.97)'}
      : {opacity:currentMenuStyle.opacity,transform:currentMenuStyle.transform};
    languageAnimation?.cancel();
    if (open) {
      languageMenu.hidden = false;
      positionLanguageMenu();
      if (!reducedMotion.matches) languageAnimation = languageMenu.animate(
        [menuStart,{opacity:1,transform:'none'}],
        {duration:190,easing:'cubic-bezier(.22,1,.36,1)'}
      );
    } else if (!reducedMotion.matches && !languageMenu.hidden) {
      languageAnimation = languageMenu.animate(
        [menuStart,{opacity:0,transform:'translateY(-4px) scale(.98)'}],
        {duration:130,easing:'ease-in',fill:'forwards'}
      );
      languageAnimation.finished.then(() => {if(!languageOpen) languageMenu.hidden = true;}).catch(() => {});
    } else languageMenu.hidden = true;
    if (restoreFocus) languageToggle.focus({preventScroll:true});
  }
  function focusLanguage(index) {languageOptions[(index + languageOptions.length) % languageOptions.length].focus();}
  languageToggle.addEventListener('click', () => setLanguageMenu(!languageOpen));
  languageToggle.addEventListener('keydown', event => {
    if (!['ArrowDown','ArrowUp','Home','End'].includes(event.key)) return;
    event.preventDefault();setLanguageMenu(true);
    focusLanguage(event.key === 'Home' ? 0 : event.key === 'End' ? languageOptions.length-1 : languageOptions.findIndex(option => option.dataset.language === languageSelect.value));
  });
  languageOptions.forEach(option => option.addEventListener('click', () => {
    languageSelect.value = option.dataset.language;
    languageSelect.dispatchEvent(new Event('change',{bubbles:true}));
    setLanguageMenu(false,true);
  }));
  languageMenu.addEventListener('keydown', event => {
    const index = languageOptions.indexOf(document.activeElement);
    if (['ArrowDown','ArrowUp','Home','End'].includes(event.key)) {
      event.preventDefault();
      focusLanguage(event.key === 'Home' ? 0 : event.key === 'End' ? languageOptions.length-1 : index + (event.key === 'ArrowDown' ? 1 : -1));
    } else if (event.key === 'Escape') {event.preventDefault();event.stopPropagation();setLanguageMenu(false,true);}
    else if (event.key === 'Tab') {
      event.preventDefault();setLanguageMenu(false);
      const focusable=[...document.querySelectorAll('a[href],button:not([tabindex="-1"]),input,textarea,select,[tabindex="0"]')].filter(element=>element.getClientRects().length && !element.closest('#language-menu,[hidden]'));
      const index=focusable.indexOf(languageToggle),step=event.shiftKey?-1:1;
      focusable[(index+step+focusable.length)%focusable.length]?.focus();
    }
  });
  languageToggle.addEventListener('keydown', event => {
    if(event.key === 'Escape' && languageOpen){event.preventDefault();setLanguageMenu(false,true);}
    if(event.key === 'Tab' && languageOpen)setLanguageMenu(false);
  });
  document.addEventListener('pointerdown', event => {
    if(languageOpen && !event.target.closest('.language-control') && !languageMenu.contains(event.target))setLanguageMenu(false);
  });
  window.addEventListener('resize', () => {if(languageOpen)positionLanguageMenu();});
  const dialog=document.querySelector('#project-dialog');
  const projectImage=document.querySelector('#project-image');
  const viewer = dialog.querySelector('.project-viewer');
  const previewStatus = document.querySelector('#preview-status');
  const previewBody = dialog.querySelector('.dialog-body');
  let activeProject='';
  let viewerAnimation;
  let closingProject = false;
  let backdropPress = false;
  function updatePreviewStatus(state) {
    previewBody.dataset.imageState = state;
    previewStatus.textContent = state === 'loading' ? t('Loading preview…') : state === 'error' ? t('Preview could not be loaded. Open the full image instead.') : '';
    previewBody.setAttribute('aria-busy',String(state === 'loading'));
  }
  projectImage.addEventListener('load', () => updatePreviewStatus('ready'));
  projectImage.addEventListener('error', () => updatePreviewStatus('error'));
  function openProject(link) {
    if(dialog.open)return;
    activeProject=link.closest('figure').querySelector('.name').dataset.projectTitle;
    updatePreviewStatus('loading');
    projectImage.src=link.href;
    document.querySelector('#project-original').href=link.href;
    updateProjects();
    closingProject=false;
    dialog.dataset.state='opening';
    dialog.showModal();
    previewBody.scrollTop=0;
    if(projectImage.complete)updatePreviewStatus(projectImage.naturalWidth ? 'ready' : 'error');
    viewerAnimation?.cancel();
    if(!reducedMotion.matches) {
      viewerAnimation=viewer.animate(
        [{opacity:0,transform:'translateY(22px) scale(.965)',filter:'blur(5px)'},{opacity:1,transform:'none',filter:'blur(0px)'}],
        {duration:320,easing:'cubic-bezier(.16,1,.3,1)'}
      );
      viewerAnimation.finished.then(()=>{if(!closingProject)dialog.dataset.state='open';}).catch(()=>{});
    } else dialog.dataset.state='open';
  }
  async function closeProject() {
    if(!dialog.open || closingProject)return;
    closingProject=true;
    const current=getComputedStyle(viewer);
    const viewerStart={opacity:current.opacity,transform:current.transform,filter:current.filter};
    dialog.dataset.state='closing';viewerAnimation?.cancel();
    if(!reducedMotion.matches) {
      viewerAnimation=viewer.animate(
        [viewerStart,{opacity:0,transform:'translateY(12px) scale(.98)',filter:'blur(3px)'}],
        {duration:190,easing:'cubic-bezier(.4,0,1,1)',fill:'forwards'}
      );
      try{await viewerAnimation.finished;}catch{/* Motion preference may change mid-transition. */}
    }
    dialog.close();viewerAnimation?.cancel();dialog.dataset.state='closed';closingProject=false;
  }
  function outsideDialog(event) {
    const box=dialog.getBoundingClientRect();
    return event.clientX<box.left || event.clientX>box.right || event.clientY<box.top || event.clientY>box.bottom;
  }
  function updateProjects(){
    document.querySelectorAll('.lightbox').forEach(link=>{
      const title=t(link.closest('figure').querySelector('.name').dataset.projectTitle);
      link.setAttribute('aria-label',t('View {title}',{title}));
      link.closest('figure').querySelector('img').alt=t('{title} — design preview',{title});
    });
    if(activeProject){const title=t(activeProject);document.querySelector('#project-title').textContent=title;projectImage.alt=t('{title} — full design',{title});}
    document.querySelectorAll('.skill').forEach(skill=>{skill.nextElementSibling.setAttribute('aria-label',t(skill.querySelector('h4').dataset.sourceLabel));});
  }
  document.querySelectorAll('.lightbox').forEach(link=>link.addEventListener('click',event=>{
    event.preventDefault();openProject(link);
  }));
  document.querySelector('#close-dialog').addEventListener('click',closeProject);
  dialog.addEventListener('pointerdown',event=>{backdropPress=event.target===dialog && outsideDialog(event);});
  dialog.addEventListener('click',event=>{if(backdropPress && event.target===dialog && outsideDialog(event))closeProject();backdropPress=false;});
  dialog.addEventListener('cancel',event=>{event.preventDefault();closeProject();});
  dialog.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();closeProject();}});
  reducedMotion.addEventListener('change',()=>{
    if(!reducedMotion.matches)return;
    if(viewerAnimation?.playState==='running')viewerAnimation.finish();
    if(languageAnimation?.playState==='running')languageAnimation.finish();
  });
  // Reveal only visible cards; pointer lighting is a progressive desktop enhancement.
  const cards=[...document.querySelectorAll('.info-block-w-icon,.testimonial,.certificate-item,.fun-fact,.portfolio-grid figure')];
  if(!reducedMotion.matches){
    document.documentElement.classList.add('motion-ready');
    const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-revealed');reveal.unobserve(entry.target);}}),{threshold:.08});
    cards.forEach(card=>{card.classList.add('motion-card');reveal.observe(card);});
  }
  cards.forEach(card=>{
    card.addEventListener('pointermove',event=>{
      if(reducedMotion.matches||event.pointerType==='touch')return;
      const box=card.getBoundingClientRect();card.style.setProperty('--mx',`${event.clientX-box.left}px`);card.style.setProperty('--my',`${event.clientY-box.top}px`);
    });
    card.addEventListener('pointerleave',()=>{card.style.removeProperty('--mx');card.style.removeProperty('--my');});
  });
  document.querySelectorAll('.button').forEach(button=>{
    button.addEventListener('pointermove',event=>{
      if(reducedMotion.matches||event.pointerType==='touch')return;
      const box=button.getBoundingClientRect();button.style.setProperty('--btn-x',`${(event.clientX-box.left-box.width/2)*.055}px`);button.style.setProperty('--btn-y',`${(event.clientY-box.top-box.height/2)*.1}px`);
    });
    button.addEventListener('pointerleave',()=>{button.style.removeProperty('--btn-x');button.style.removeProperty('--btn-y');});
  });

  const form=document.querySelector('#contact-form');
  const status=document.querySelector('#form-status');
  const submit=form.querySelector('[type=submit]');
  const submitText=[...submit.childNodes].find(node=>node.nodeType===Node.TEXT_NODE&&node.textContent.trim());
  function setStatus(key,state){status.dataset.message=key;status.dataset.state=state;status.textContent=t(key);}
  function updateDynamic(){
    label.textContent=document.querySelector('[role=tab][aria-selected=true]').getAttribute('aria-label');
    document.title=`${label.textContent} — Hieu Minh Duong`;
    updateCount();updateProjects();syncLanguageMenu();
    updatePreviewStatus(previewBody.dataset.imageState || 'ready');
    submitText.textContent=t(submit.disabled?'Sending…':'Send message')+' ';
    if(status.dataset.message)status.textContent=t(status.dataset.message);
    form.querySelectorAll('input,textarea').forEach(input=>input.setCustomValidity(''));
  }
  document.addEventListener('portfolio:language',updateDynamic);updateDynamic();
  form.addEventListener('invalid',event=>{
    const input=event.target;
    if(input.validity.typeMismatch)input.setCustomValidity(t('Please enter a valid email address.'));
    else if(input.validity.tooShort)input.setCustomValidity(t('Please write at least 10 characters.'));
    else if(input.validity.valueMissing)input.setCustomValidity(t('Please complete this field.'));
  },true);
  form.addEventListener('input',event=>event.target.setCustomValidity?.(''));
  form.addEventListener('submit',async event=>{
    event.preventDefault();if(submit.disabled)return;
    ['name','email','phone','message'].forEach(name=>{form.elements.namedItem(name).value=form.elements.namedItem(name).value.trim();});
    if(!form.reportValidity())return;
    const data=Object.fromEntries(new FormData(form));if(data._honey)return;
    submit.disabled=true;submitText.textContent=t('Sending…');form.setAttribute('aria-busy','true');
    setStatus('Sending your message securely…','pending');
    const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),20000);
    try{
      const response=await fetch('https://formsubmit.co/ajax/hieunobii2809@gmail.com',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data),signal:controller.signal});
      const result=await response.json();
      if(!response.ok||(result.success!==true&&result.success!=='true'))throw new Error('Message not accepted');
      if(/activat|confirm your email/i.test(result.message||'')){
        setStatus('The contact service is awaiting inbox activation. Please email me directly at hieunobii2809@gmail.com for now.','error');return;
      }
      setStatus('Your enquiry was accepted. Thank you! If you need an urgent reply, please contact me directly by email or phone.','success');form.reset();
    }catch{
      setStatus('Your message could not be confirmed. Your draft is still here. Please retry, or email hieunobii2809@gmail.com directly.','error');
    }finally{
      clearTimeout(timeout);submit.disabled=false;submitText.textContent=t('Send message')+' ';form.removeAttribute('aria-busy');
    }
  });
})();
