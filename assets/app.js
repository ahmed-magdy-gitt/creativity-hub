(function () {
  var ICON = {
    logo: '<img src="assets/logo.png" alt="Creative Hub - Creative Design Studio">',
    arrow: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };
  window.CH = { ICON: ICON };
  var pages = [['index.html', 'الرئيسية'], ['work.html', 'أعمالنا'], ['services.html', 'خدماتنا'], ['about.html', 'من نحن'], ['contact.html', 'تواصل معنا']];
  var cur = document.body.getAttribute('data-page');
  var nav = pages.map(function (p) { return '<li><a href="' + p[0] + '"' + (p[0] === cur ? ' class="on"' : '') + '>' + p[1] + '</a></li>'; }).join('');
  nav += '<li><a href="login.html"' + (cur === 'login.html' ? ' class="on"' : '') + '>تسجيل الدخول</a></li>';
  document.body.insertAdjacentHTML('afterbegin', '<header class="top"><div class="wrap nav"><a class="logo" href="index.html">' + ICON.logo + '</a><button class="burger" id="burger" aria-label="القائمة"><svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M3 6h18M3 12h18M3 18h18"/></svg></button><ul id="menu">' + nav + '</ul></div></header>');
  var fl = function (a, b) { return '<li><a href="' + a + '">' + b + '</a></li>'; };
  var sb = function (n) { return '<li><button class="lnk" style="color:inherit" data-social="' + n + '">' + n + '</button></li>'; };
  document.body.insertAdjacentHTML('beforeend', '<footer><div class="wrap"><div class="fg"><div><a class="logo" href="index.html">' + ICON.logo + '</a><p>تصميم برقمية إبداعية على حلول مبتكرة لنستكشف انطلاق من بوابتك الرقمية المبتكرة.</p><p><a href="contact.html" style="text-decoration:underline">AI Design Labs</a> تم تطويره بواسطة</p></div>' +
    '<div><h4>روابط سريعة</h4><ul>' + fl('index.html', 'الرئيسية') + fl('services.html', 'خدماتنا') + fl('about.html', 'من نحن') + fl('work.html', 'أعمالنا') + fl('contact.html', 'تواصل معنا') + fl('work.html', 'مدونة Design') + '</ul></div>' +
    '<div><h4>الخدمات</h4><ul>' + fl('services.html#branding', 'هوية تجارية') + fl('services.html#apps', 'تطوير تطبيقات') + fl('services.html#web', 'إنشاء متاجر') + fl('services.html#uiux', 'UI/UX') + '</ul></div>' +
    '<div><h4>تواصل معنا</h4><ul>' + fl('contact.html', 'Email') + fl('contact.html', 'Phone') + fl('contact.html', 'Office Address') + fl('contact.html', 'Respmed') + '</ul></div>' +
    '<div><h4>Social Media Icons</h4><ul>' + sb('Linkedin') + sb('Instagram') + sb('Behance') + sb('Dribbble') + '</ul></div></div>' +
    '<div class="copy"><span>تم تطويره بواسطة AI Design Labs</span><span>&copy; 2024 Creative Hub. جميع الحقوق محفوظة.</span></div></div></footer>' +
    '<div class="ov" id="ov"><div class="modal" id="modal"></div></div><div class="toast" id="toast"></div>');
  document.getElementById('burger').onclick = function () { document.getElementById('menu').classList.toggle('on'); };
  var ov = document.getElementById('ov'), modal = document.getElementById('modal'), tt;
  window.toast = function (m) { var t = document.getElementById('toast'); t.textContent = m; t.classList.add('on'); clearTimeout(tt); tt = setTimeout(function () { t.classList.remove('on'); }, 2600); };
  window.openModal = function (h) { modal.innerHTML = '<button class="x" data-close aria-label="إغلاق">&times;</button>' + h; ov.classList.add('on'); };
  window.closeModal = function () { ov.classList.remove('on'); };
  ov.addEventListener('click', function (e) { if (e.target === ov || e.target.closest('[data-close]')) closeModal(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
  document.addEventListener('click', function (e) {
    var s = e.target.closest('[data-social]'); if (s) openModal('<h3>' + s.dataset.social + '</h3><p>تابع Creative Hub على ' + s.dataset.social + ' لمعرفة أحدث الأعمال وأخبار الاستوديو.</p><button class="btn pri" data-close data-follow="' + s.dataset.social + '">متابعة</button>');
    var f = e.target.closest('[data-follow]'); if (f) toast('شكرًا لمتابعتك على ' + f.dataset.follow + '!');
  });
  var P = {
    brand: { t: 'مشروع هوية تجارية', d: 'تصميم هوية بصرية لشركة Innovate Solutions.', tag: 'هوية', img: 'assets/p-brand.jpg' },
    app: { t: 'تطبيق تعليمي', d: 'تطوير تطبيق LearnSphere للتعلم التفاعلي.', tag: 'تطبيقات', img: 'assets/p-app.jpg' },
    shop: { t: 'موقع تجاري', d: 'إنشاء متجر "TechGear" لبيع الأجهزة الحديثة.', tag: 'مواقع', img: 'assets/p-shop.jpg' },
    dash: { t: 'لوحة تحليلات', d: 'تصميم واجهة لوحة بيانات لشركة ناشئة في اللوجستيات تركز على الوضوح والسرعة.', tag: 'UI/UX', g: 'linear-gradient(135deg,#0a2233,#0e4a5e)', svg: '<svg width="140" height="100" viewBox="0 0 140 100" fill="#22d3ee"><rect x="10" y="50" width="16" height="45" opacity=".5"/><rect x="40" y="30" width="16" height="65" opacity=".7"/><rect x="70" y="40" width="16" height="55"/><rect x="100" y="10" width="16" height="85" opacity=".8"/></svg>' },
    food: { t: 'تطبيق توصيل طعام', d: 'مفهوم تطبيق لخدمة توصيل طعام إقليمية، من الهياكل الأولية إلى النموذج النهائي.', tag: 'تطبيقات', g: 'linear-gradient(135deg,#7a2e12,#e5833a)', svg: '<svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M8 8v8M12 8v8M16 8v8"/></svg>' },
    mag: { t: 'هوية مجلة', d: 'هوية تحريرية ونظام تخطيط لمجلة تصميم فصلية.', tag: 'هوية', g: 'linear-gradient(135deg,#2b1a4a,#6a3fb0)', svg: '<b style="font:700 54px Georgia,serif;color:#fff">Aa</b>' }
  };
  window.CH.P = P;
  window.thumb = function (k) { var p = P[k]; if (p.img) return '<div class="thumb"><img src="' + p.img + '" alt="' + p.t + '"></div>'; return '<div class="thumb" style="background:' + p.g + ';text-align:center">' + p.svg + '</div>'; };
  window.projModal = function (k) { var p = P[k]; openModal('<h3>' + p.t + '</h3><p style="color:var(--cy)">' + p.tag + '</p>' + thumb(k) + '<p>' + p.d + '</p><div style="display:flex;gap:10px;margin-top:10px"><a class="btn pri" href="contact.html" style="text-decoration:none">ابدأ مشروعًا مشابهًا</a></div>'); };
  document.addEventListener('click', function (e) { var b = e.target.closest('[data-proj]'); if (b) projModal(b.dataset.proj); });
  window.field = function (form, name, ok, msg) { var el = form.querySelector('[name=' + name + ']'), er = form.querySelector('[data-err=' + name + ']'); var good = ok(el.value.trim()); er.textContent = good ? '' : msg; return good; };
})();
