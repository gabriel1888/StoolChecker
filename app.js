'use strict';

/* Set this to your business contact email to enable the detailed enquiry form.
   The form opens the visitor's own email application; it does not send mail itself. */
const BUSINESS_EMAIL = '';

(function () {
  const $ = (id) => document.getElementById(id);
  const pageIds = { home: 'page-landing', checker: 'page-checker', business: 'page-business', privacy: 'page-privacy' };
  const titles = { home: 'Stool Checker — Know Your Gut', checker: 'Checker — Stool Checker', business: 'For Businesses — Stool Checker', privacy: 'Privacy — Stool Checker' };
  let initialRoute = true;

  function getRoute() {
    const parts = location.hash.replace(/^#\/?/, '').split('/');
    const page = Object.prototype.hasOwnProperty.call(pageIds, parts[0]) ? parts[0] : 'home';
    return { page, tab: parts[1] === 'urine' ? 'urine' : 'stool' };
  }

  function setTab(tab) {
    for (const name of ['stool', 'urine']) {
      const selected = name === tab;
      const button = $('tab-' + name);
      const panel = $('panel-' + name);
      if (!button || !panel) continue;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
      panel.classList.toggle('active', selected);
      panel.hidden = !selected;
    }
  }

  function applyRoute() {
    const { page, tab } = getRoute();
    const oldPage = document.querySelector('.page.active');
    const nextPage = $(pageIds[page]);
    if (!nextPage) return;
    Object.values(pageIds).forEach((id) => {
      const element = $(id);
      if (element) element.classList.toggle('active', element === nextPage);
    });
    setTab(tab);
    document.title = titles[page];
    if (!initialRoute && oldPage !== nextPage) {
      window.scrollTo(0, 0);
      const heading = nextPage.querySelector('h1, [data-page-heading]');
      if (heading) {
        if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');
        heading.focus({ preventScroll: true });
      }
    }
    initialRoute = false;
  }

  function switchTab(tab) {
    const hash = '#checker/' + tab;
    if (location.hash === hash) setTab(tab);
    else location.hash = hash;
  }

  for (const tab of ['stool', 'urine']) {
    const button = $('tab-' + tab);
    if (!button) continue;
    button.addEventListener('click', () => switchTab(tab));
    button.addEventListener('keydown', (event) => {
      let target;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') target = tab === 'stool' ? 'urine' : 'stool';
      if (event.key === 'Home') target = 'stool';
      if (event.key === 'End') target = 'urine';
      if (!target) return;
      event.preventDefault();
      switchTab(target);
      $('tab-' + target).focus();
    });
  }

  function announce(message) {
    const status = $('result-announcement');
    if (status) status.textContent = message;
  }

  function renderResult(kind, type) {
    const data = (kind === 'stool' ? STOOL_TYPES : URINE_TYPES)[type];
    if (!data || !Array.isArray(data.advice)) return;
    const prefix = kind === 'stool' ? 'r' : 'ur';
    const screenPrefix = kind === 'stool' ? 'cscreen' : 'ucscreen';
    $(screenPrefix + '-select').classList.remove('active');
    $(screenPrefix + '-result').classList.add('active');

    const pill = $(prefix + '-pill');
    pill.textContent = data.pill;
    pill.style.backgroundColor = data.pillBg;
    pill.style.color = data.pillColor;
    $(prefix + '-type-label').textContent = data.typeLabel;
    const headline = $(prefix + '-headline');
    headline.textContent = data.headline;

    const scale = $(prefix + '-scale');
    scale.replaceChildren();
    const scaleLabels = scale.parentElement.querySelector('.scale-labels');
    const hasScale = Number.isInteger(data.scalePos);
    scale.hidden = !hasScale;
    if (scaleLabels) scaleLabels.hidden = !hasScale;
    const colors = kind === 'stool' ? STOOL_SCALE_COLORS : URINE_SCALE_COLORS;
    const count = kind === 'stool' ? 7 : 6;
    if (hasScale) {
      for (let i = 1; i <= count; i++) {
        const segment = document.createElement('span');
        segment.className = kind === 'stool' ? 'scale-seg' : 'urine-scale-seg';
        if (kind === 'stool') {
          if (i === data.scalePos) segment.style.backgroundColor = colors[i - 1];
        } else {
          segment.style.backgroundColor = colors[i - 1];
          segment.style.opacity = i === data.scalePos ? '1' : '0.3';
        }
        scale.append(segment);
      }
    }

    const advice = $(prefix + '-advice');
    advice.replaceChildren();
    for (const text of data.advice) {
      const item = document.createElement('div');
      item.className = 'advice-item';
      const marker = document.createElement('span');
      marker.className = 'advice-marker';
      marker.setAttribute('aria-hidden', 'true');
      marker.textContent = '•';
      const content = document.createElement('p');
      content.className = 'advice-text';
      content.textContent = text;
      item.append(marker, content);
      advice.append(item);
    }

    const gp = $(prefix + '-gp');
    gp.replaceChildren();
    gp.hidden = !data.gp.show;
    if (data.gp.show) {
      gp.style.backgroundColor = data.gp.bg;
      gp.style.borderColor = data.gp.border;
      gp.style.color = data.gp.color;
      const title = document.createElement('strong');
      title.textContent = data.gp.urgent ? 'When to seek help' : 'When to speak to a health professional';
      const text = document.createElement('p');
      text.textContent = data.gp.text;
      gp.append(title, text);
    }
    announce(data.typeLabel + ': ' + data.headline);
    headline.focus();
  }

  function reset(kind) {
    const screenPrefix = kind === 'stool' ? 'cscreen' : 'ucscreen';
    $(screenPrefix + '-result').classList.remove('active');
    $(screenPrefix + '-select').classList.add('active');
    announce('Choose another ' + (kind === 'stool' ? 'stool type.' : 'urine appearance.'));
    const button = document.querySelector(kind === 'stool' ? '[data-stool-type]' : '[data-urine-type]');
    if (button) button.focus();
  }

  document.querySelectorAll('[data-stool-type]').forEach((button) => {
    button.addEventListener('click', () => renderResult('stool', Number(button.dataset.stoolType)));
  });
  document.querySelectorAll('[data-urine-type]').forEach((button) => {
    button.addEventListener('click', () => renderResult('urine', Number(button.dataset.urineType)));
  });
  document.querySelectorAll('[data-reset]').forEach((button) => {
    button.addEventListener('click', () => reset(button.dataset.reset));
  });

  document.querySelectorAll('[data-load-tally]').forEach((button) => {
    button.addEventListener('click', () => {
      const frame = $(button.dataset.loadTally);
      if (!frame || !frame.dataset.tallySrc) return;
      frame.loading = 'eager';
      frame.src = frame.dataset.tallySrc;
      frame.hidden = false;
      button.hidden = true;
      frame.focus();
    });
  });

  document.querySelectorAll('[data-action="scroll-business-form"]').forEach((button) => {
    button.addEventListener('click', () => {
      const target = $('biz-enquiry');
      if (target) {
        target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
        const heading = $('business-contact-title');
        if (heading) {
          heading.tabIndex = -1;
          heading.focus({ preventScroll: true });
        }
      }
    });
  });

  document.querySelectorAll('[data-action="skip-main"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      $('main-content').focus();
    });
  });

  const form = $('biz-enquiry-form');
  const fallback = $('biz-fallback');
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(BUSINESS_EMAIL);
  if (form && validEmail) {
    form.hidden = false;
    if (fallback) fallback.hidden = true;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const fields = new FormData(form);
      const body = [
        'Name: ' + fields.get('name'),
        'Email: ' + fields.get('email'),
        'Enquiry type: ' + fields.get('enquiryType'),
        'Organisation: ' + fields.get('organisation'),
        '',
        'Message:',
        fields.get('message')
      ].join('\n');
      const subject = 'Business enquiry — ' + fields.get('enquiryType');
      window.location.href = 'mailto:' + encodeURIComponent(BUSINESS_EMAIL) + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

  window.addEventListener('hashchange', applyRoute);
  applyRoute();
})();
