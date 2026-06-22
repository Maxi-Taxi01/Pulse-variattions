(() => {
  const frame = document.querySelector('.site-frame');
  const stylesheet = document.body.dataset.stylesheet;
  const bodyClass = document.body.dataset.bodyClass || '';

  function applyIteration() {
    try {
      const doc = frame.contentDocument;
      if (!doc || !doc.head || !doc.body) return;

      const link = doc.createElement('link');
      link.rel = 'stylesheet';
      link.href = new URL(stylesheet, window.location.href).href;
      link.dataset.pulseIteration = 'true';
      doc.head.appendChild(link);

      doc.body.classList.add('pulse-iteration');
      bodyClass.split(/\s+/).filter(Boolean).forEach(name => doc.body.classList.add(name));

      link.addEventListener('load', () => document.body.classList.add('ready'), { once: true });
      window.setTimeout(() => document.body.classList.add('ready'), 900);
    } catch (error) {
      document.querySelector('.loading').textContent =
        'Open through a local web server to view this iteration';
      console.error(error);
    }
  }

  frame.addEventListener('load', applyIteration);
})();
