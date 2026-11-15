(function () {
  var ICON = {
    logo: '<svg width="46" height="46" viewBox="0 0 48 48" fill="none" stroke="#22d3ee" stroke-width="3" stroke-linejoin="round"><path d="M24 4 41 14v20L24 44 7 34V14z"/><path d="M19 17v14l12-7z"/></svg>',
    arrow: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    user: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6z"/></svg>',
    lock: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    eye: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>'
  };
  window.CH = { ICON: ICON };
  var pages = [['index.html', 'Home'], ['work.html', 'Our Work'], ['services.html', 'Services'], ['about.html', 'About Us'], ['contact.html', 'Contact']];
  var cur = document.body.getAttribute('data-page');
  var nav = pages.map(function (p) { return '<li><a href="' + p[0] + '"' + (p[0] === cur ? ' class="on"' : '') + '>' + p[1] + '</a></li>'; }).join('');
  nav += '<li><a href="login.html"' + (cur === 'login.html' ? ' class="on"' : '') + '>Sign In</a></li>';
  document.body.insertAdjacentHTML('afterbegin', '<header class="top"><div class="wrap nav"><a class="logo" href="index.html">' + ICON.logo + '<span><b>CREATIVITY <i>HUB</i></b><small>Creative Design Studio</small></span></a><button class="burger" id="burger" aria-label="Menu"><svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M3 6h18M3 12h18M3 18h18"/></svg></button><ul id="menu">' + nav + '</ul></div></header>');
  var fl = function (a, b) { return '<li><a href="' + a + '">' + b + '</a></li>'; };
  document.body.insertAdjacentHTML('beforeend', '<footer><div class="wrap"><div class="fg"><div><a class="logo" href="index.html">' + ICON.logo + '<span><b>CREATIVITY <i>HUB</i></b><small>Creative Design Studio</small></span></a><p>Design with passion, deliver with precision. Innovative solutions for modern brands.</p></div>' +
    '<div><h4>Quick Links</h4><ul>' + fl('index.html', 'Home') + fl('services.html', 'Services') + fl('about.html', 'About Us') + fl('work.html', 'Our Work') + fl('contact.html', 'Contact') + '</ul></div>' +
    '<div><h4>Services</h4><ul>' + fl('services.html#branding', 'Branding') + fl('services.html#apps', 'App Development') + fl('services.html#web', 'E-commerce Sites') + fl('services.html#uiux', 'UI/UX') + '</ul></div>' +
    '<div><h4>Contact</h4><ul><li><a href="contact.html">Email</a></li><li><a href="contact.html">Phone</a></li><li><a href="contact.html">Office Address</a></li></ul></div>' +
    '<div><h4>Social</h4><ul><li><button class="lnk" style="color:inherit" data-social="LinkedIn">LinkedIn</button></li><li><button class="lnk" style="color:inherit" data-social="Instagram">Instagram</button></li><li><button class="lnk" style="color:inherit" data-social="Behance">Behance</button></li><li><button class="lnk" style="color:inherit" data-social="Dribbble">Dribbble</button></li></ul></div></div>' +
    '<div class="copy"><span>&copy; 2026 Creativity Hub. All rights reserved.</span><span>Site by Example Labs</span></div></div></footer>' +
    '<div class="ov" id="ov"><div class="modal" id="modal"></div></div><div class="toast" id="toast"></div>');
  document.getElementById('burger').onclick = function () { document.getElementById('menu').classList.toggle('on'); };
  var ov = document.getElementById('ov'), modal = document.getElementById('modal'), tt;
  window.toast = function (m) { var t = document.getElementById('toast'); t.textContent = m; t.classList.add('on'); clearTimeout(tt); tt = setTimeout(function () { t.classList.remove('on'); }, 2600); };
  window.openModal = function (h) { modal.innerHTML = '<button class="x" data-close aria-label="Close">&times;</button>' + h; ov.classList.add('on'); };
  window.closeModal = function () { ov.classList.remove('on'); };
  ov.addEventListener('click', function (e) { if (e.target === ov || e.target.closest('[data-close]')) closeModal(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
  document.addEventListener('click', function (e) {
    var s = e.target.closest('[data-social]'); if (s) openModal('<h3>' + s.dataset.social + '</h3><p>Follow Creativity Hub on ' + s.dataset.social + ' for new case studies and studio news.</p><button class="btn pri" data-close data-follow="' + s.dataset.social + '">Follow</button>');
    var f = e.target.closest('[data-follow]'); if (f) toast('Thanks for following on ' + f.dataset.follow + '!');
  });
  // projects
  var P = {
    brand: { t: 'Brand Identity Project', d: 'Visual identity design for Innovate Solutions: logo, palette, typography and brand guidelines.', tag: 'Branding', g: 'linear-gradient(135deg,#0b1d2b,#14394d)', svg: '<svg width="90" height="90" viewBox="0 0 48 48" fill="none" stroke="#22d3ee" stroke-width="2.5"><path d="M24 4 41 14v20L24 44 7 34V14z"/><path d="M19 17v14l12-7z"/></svg><b style="display:block;color:#fff;letter-spacing:3px;margin-top:6px">INNOVATE</b>' },
    app: { t: 'Educational App', d: 'Development of the LearnSphere app for interactive learning, with lessons, progress tracking and rewards.', tag: 'Apps', g: 'linear-gradient(135deg,#2a58d6,#4f8bf0)', svg: '<div style="width:90px;height:150px;border-radius:16px;background:#fff;border:4px solid #0b1d2b;display:grid;place-items:center"><div style="width:44px;height:44px;border-radius:50%;background:#2a6cf0"></div></div>' },
    shop: { t: 'E-commerce Website', d: 'Building the TechGear online store for selling the latest gadgets, with catalogue, cart and checkout.', tag: 'Web', g: 'linear-gradient(135deg,#e7eef3,#c7d6e0)', svg: '<div style="width:75%;height:70%;background:#fff;border-radius:8px;box-shadow:0 4px 14px #0003;padding:10px;color:#12242f;text-align:left"><b style="color:#0ea5b7">TechGear</b><div style="height:60px;background:#1c2a33;border-radius:6px;margin:8px 0;color:#fff;padding:8px">About Us</div><div style="display:flex;gap:6px"><i style="flex:1;height:30px;background:#c8864a;border-radius:5px"></i><i style="flex:1;height:30px;background:#aab;border-radius:5px"></i><i style="flex:1;height:30px;background:#678;border-radius:5px"></i></div></div>' },
    dash: { t: 'Analytics Dashboard', d: 'UI/UX design of a data dashboard for a logistics start-up, focusing on clarity and speed.', tag: 'UI/UX', g: 'linear-gradient(135deg,#0a2233,#0e4a5e)', svg: '<svg width="140" height="100" viewBox="0 0 140 100" fill="#22d3ee"><rect x="10" y="50" width="16" height="45" opacity=".5"/><rect x="40" y="30" width="16" height="65" opacity=".7"/><rect x="70" y="40" width="16" height="55"/><rect x="100" y="10" width="16" height="85" opacity=".8"/></svg>' },
    food: { t: 'Food Delivery App', d: 'Mobile app concept for a regional food delivery service, from wireframes to polished prototype.', tag: 'Apps', g: 'linear-gradient(135deg,#7a2e12,#e5833a)', svg: '<svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M8 8v8M12 8v8M16 8v8"/></svg>' },
    mag: { t: 'Magazine Rebrand', d: 'Editorial identity and layout system for a quarterly design magazine.', tag: 'Branding', g: 'linear-gradient(135deg,#2b1a4a,#6a3fb0)', svg: '<b style="font:700 54px Georgia,serif;color:#fff">Aa</b>' }
  };
  window.CH.P = P;
  window.thumb = function (k) { var p = P[k]; return '<div class="thumb" style="background:' + p.g + ';text-align:center">' + p.svg + '</div>'; };
  window.projModal = function (k) { var p = P[k]; openModal('<h3>' + p.t + '</h3><p style="color:var(--cy)">' + p.tag + '</p>' + thumb(k).replace('height:210px', 'height:150px') + '<p>' + p.d + '</p><div style="display:flex;gap:10px;margin-top:10px"><a class="btn pri" href="contact.html" style="text-decoration:none">Start a similar project</a></div>'); };
  document.addEventListener('click', function (e) { var b = e.target.closest('[data-proj]'); if (b) projModal(b.dataset.proj); });
  window.field = function (form, name, ok, msg) { var el = form.querySelector('[name=' + name + ']'), er = form.querySelector('[data-err=' + name + ']'); var good = ok(el.value.trim()); er.textContent = good ? '' : msg; return good; };
})();
