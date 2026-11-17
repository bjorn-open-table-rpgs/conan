// Kliknięcie w obrazek w treści = pełny ekran (np. mapa). Esc lub klik zamyka.
document.addEventListener('click', function (e) {
  var img = e.target.closest && e.target.closest('main img');
  if (!img) return;
  var box = document.createElement('div');
  box.className = 'lightbox';
  var big = document.createElement('img');
  big.src = img.currentSrc || img.src;
  big.alt = img.alt;
  box.appendChild(big);
  function close() { box.remove(); document.removeEventListener('keydown', onKey); }
  function onKey(ev) { if (ev.key === 'Escape') close(); }
  box.addEventListener('click', close);
  document.addEventListener('keydown', onKey);
  document.body.appendChild(box);
});
