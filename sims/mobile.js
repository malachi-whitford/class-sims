/* =====================================================================
   MOBILE HELPER (shared by every simulation)
   On phones the controls often sit far below the animation. When you
   use a control and the animation has scrolled off screen, this shows a
   live copy of the animation pinned to the top of the screen.
   Tap the pinned copy to jump back to it, or × to hide it.
   Nothing changes on wide screens.
   ===================================================================== */
(function(){
  if (window.__simMobile) return; window.__simMobile = true;
  var mq = window.matchMedia('(max-width: 820px)');
  var css = document.createElement('style');
  css.textContent =
    '#simPip{position:fixed;left:0;right:0;top:0;z-index:9999;display:none;padding:6px 8px 8px;background:#141a22;box-shadow:0 4px 14px rgba(0,0,0,.35);padding-top:calc(6px + env(safe-area-inset-top,0px))}' +
    '#simPip canvas{display:block;margin:0 auto;border-radius:8px;cursor:pointer;max-width:100%}' +
    '#simPip .bar{display:flex;justify-content:space-between;align-items:center;color:#c9d3df;font:12px system-ui,Arial,sans-serif;margin:0 2px 4px}' +
    '#simPip button{font:600 13px system-ui,Arial,sans-serif;color:#e7ecf2;background:transparent;border:1px solid rgba(255,255,255,.35);border-radius:6px;min-height:30px;min-width:30px;padding:2px 10px;cursor:pointer}';
  document.head.appendChild(css);

  var pip = document.createElement('div'); pip.id = 'simPip';
  pip.setAttribute('aria-hidden', 'true');   // visual convenience only; screen readers already get text descriptions
  pip.innerHTML = '<div class="bar"><span>Live view (tap to jump back)</span><button type="button" tabindex="-1" aria-label="Hide live view">×</button></div><canvas></canvas>';
  document.body.appendChild(pip);
  var pc = pip.querySelector('canvas'), px = pc.getContext('2d');
  var hidden = false, active = null, lastCtl = null, lastAt = 0;

  pip.querySelector('button').addEventListener('click', function(e){ e.stopPropagation(); hidden = true; pip.style.display = 'none'; });
  pc.addEventListener('click', function(){ if (active) active.scrollIntoView({behavior:'smooth', block:'center'}); });

  function shown(el){ return el && el.offsetParent !== null && el.getBoundingClientRect().width > 120; }
  function big(c){ var r = c.getBoundingClientRect(); return r.width * r.height; }
  function canvases(){
    return Array.prototype.filter.call(document.querySelectorAll('canvas'), function(c){ return c !== pc && shown(c) && !c.closest('#simPip'); });
  }
  function docTop(el){ var r = el.getBoundingClientRect(); return r.top + window.scrollY + r.height / 2; }
  function pickFor(ctl){
    var list = canvases(); if (!list.length) return null;
    if (!ctl) return list.sort(function(a,b){ return big(b) - big(a); })[0];
    var y = docTop(ctl), best = null, bd = 1e12;
    list.forEach(function(c){ var d = Math.abs(docTop(c) - y) / Math.sqrt(big(c)); if (d < bd){ bd = d; best = c; } });
    return best;
  }
  function isControl(t){
    return t && t.closest && t.closest('input,select,button,textarea,[role="tab"]') && !t.closest('#simPip') && !t.closest('.sim-notice');
  }
  ['input','change','click','pointerdown'].forEach(function(ev){
    document.addEventListener(ev, function(e){
      if (!isControl(e.target)) return;
      var t = e.target.closest('input,select,button,textarea,[role="tab"]');
      if (t.closest('nav')) { lastCtl = null; active = null; return; }   // switching tabs: start fresh
      lastCtl = t; lastAt = performance.now(); active = pickFor(t);
    }, true);
  });

  function offscreen(el){ var r = el.getBoundingClientRect(), vh = window.innerHeight; var vis = Math.max(0, Math.min(r.bottom, vh) - Math.max(r.top, 0)); return vis < r.height * 0.35; }
  function onscreen(el){ var r = el.getBoundingClientRect(); return r.bottom > 0 && r.top < window.innerHeight; }

  var raf = function(cb){ return window.requestAnimationFrame(cb); };
  function loop(){
    var want = false;
    if (mq.matches && !hidden && lastCtl && lastCtl.offsetParent !== null && onscreen(lastCtl)){
      if (!active || !shown(active)) active = pickFor(lastCtl);
      if (active && offscreen(active)) want = true;
    }
    if (want){
      var cr = active.getBoundingClientRect(), maxW = window.innerWidth - 16, maxH = window.innerHeight * 0.34;
      var ar = (active.height || cr.height) / (active.width || cr.width) || cr.height / cr.width;
      var w = Math.min(maxW, maxH / ar), h = w * ar, dpr = Math.min(2, window.devicePixelRatio || 1);
      if (pc.width !== Math.round(w * dpr) || pc.height !== Math.round(h * dpr)){ pc.width = Math.round(w * dpr); pc.height = Math.round(h * dpr); pc.style.width = w + 'px'; pc.style.height = h + 'px'; }
      try { px.clearRect(0, 0, pc.width, pc.height); px.drawImage(active, 0, 0, pc.width, pc.height); } catch(e){}
      if (pip.style.display !== 'block') pip.style.display = 'block';
      // keep the control being used from hiding under the pinned view
      var pr = pip.getBoundingClientRect(), lr = lastCtl.getBoundingClientRect();
      if (performance.now() - lastAt < 400 && lr.top < pr.bottom + 4 && lr.bottom > 0) window.scrollBy(0, lr.top - pr.bottom - 12);
    } else if (pip.style.display !== 'none'){ pip.style.display = 'none'; }
    raf(loop);
  }
  raf(loop);
})();
