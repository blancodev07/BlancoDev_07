// ============ BlancoDev shared script ============

let currentLang = 'ar';

const T = {
  nav1:{ar:"الخدمات",en:"Services"}, nav2:{ar:"المتجر",en:"Store"}, nav3:{ar:"أعمالي",en:"Work"}, nav4:{ar:"من أنا",en:"About"},
  navCta:{ar:"تواصل معي",en:"Contact Me"},
  heroLead:{ar:"برمجة سكربتات Lua نظيفة ومنظمة لألعاب Roblox — من إصلاح خطأ واحد إلى بناء نظام لعب كامل، بأسعار واضحة من البداية.",en:"Clean, organized Lua scripting for Roblox games — from a single bug fix to a full gameplay system, with clear pricing upfront."},
  heroCta1:{ar:"اطلب خدمة",en:"Request a Service"}, heroCta2:{ar:"شوف أعمالي",en:"See My Work"},

  fieldsEyebrow:{ar:"المجالات",en:"FIELDS"}, fieldsTitle:{ar:"مو بس Roblox — نطاق أوسع من الخدمات",en:"Not just Roblox — a wider range of services"},
  fieldsDesc:{ar:"نفس مبدأ التسعير بصفحة الخدمات يطبّق على كل المجالات التالية.",en:"The same pricing tiers on the Services page apply across all the fields below."},
  f1n:{ar:"سكربتات Roblox",en:"Roblox Scripts"}, f1d:{ar:"Lua، أنظمة لعب، إصلاح أخطاء",en:"Lua, gameplay systems, bug fixes"},
  f2n:{ar:"أكواد مواقع",en:"Website Code"}, f2d:{ar:"HTML, CSS, JavaScript — صفحات وأدوات",en:"HTML, CSS, JavaScript — pages & tools"},
  f3n:{ar:"بحوث Word",en:"Word Research Papers"}, f3d:{ar:"بحوث مدرسية منسقة واحترافية",en:"Formatted, professional school papers"},
  f4n:{ar:"عروض PowerPoint",en:"PowerPoint Presentations"}, f4d:{ar:"تصميم شرائح احترافي لأي موضوع",en:"Professional slide design on any topic"},
  f5n:{ar:"إصلاح أخطاء الماب",en:"Map Bug Fixes"}, f5d:{ar:"أرسل ملف Roblox Studio، وأرجعه مصلّحًا",en:"Send your Studio file, get it back fixed"},
  f6n:{ar:"نظام كامل على ماپك",en:"Full System on Your Map"}, f6d:{ar:"تبعتلي ملف الماب، وأبرمج فيه نظام كامل",en:"Send your map file, I'll build a full system into it"},
  f7n:{ar:"تصميم لوجو وصور",en:"Logo & Graphics Design"}, f7d:{ar:"شعار أو صور بسيطة تعكس هوية مشروعك",en:"A logo or simple graphics reflecting your project's identity"},

  svcEyebrow:{ar:"الخدمات",en:"SERVICES"}, svcTitle:{ar:"ثلاث مستويات، حسب عمق المهمة",en:"Three tiers, by task depth"},
  svcDesc:{ar:"مو باقات جاهزة بلا معنى — كل مستوى يمثل نوع المهمة فعليًا، من إصلاح صغير إلى نظام متكامل.",en:"Not generic packages — each tier reflects a real task depth, from a small fix to a complete system."},
  t1name:{ar:"إصلاح وتعديل",en:"Fix & Tweak"}, perTask:{ar:"/ مهمة",en:"/ task"},
  t1a:{ar:"إصلاح خطأ واحد محدد في سكربت",en:"Fix one specific bug in a script"},
  t1b:{ar:"تعديل بسيط على منطق موجود",en:"Small tweak to existing logic"},
  t1c:{ar:"تسليم من 24 ساعة",en:"Delivery from 24 hours"},
  t2name:{ar:"بناء نظام",en:"Build a System"}, perSystem:{ar:"/ نظام",en:"/ system"},
  t2a:{ar:"نظام كامل (حوار، متجر، حفظ..)",en:"A full system (dialogue, shop, saving..)"},
  t2b:{ar:"هيكلة نظيفة قابلة للتوسع",en:"Clean, scalable architecture"},
  t2c:{ar:"شرح مكان كل سكربت بالتفصيل",en:"Detailed placement guide for every script"},
  t3name:{ar:"مشروع متكامل",en:"Full Project"}, perProject:{ar:"+ / مشروع",en:"+ / project"},
  t3a:{ar:"عدة أنظمة مرتبطة ببعض",en:"Multiple interconnected systems"},
  t3b:{ar:"تخطيط Architecture قبل الكود",en:"Architecture planning before code"},
  t3c:{ar:"متابعة ومراجعة بعد التسليم",en:"Follow-up review after delivery"},
  pickBtn:{ar:"اطلب هذا المستوى",en:"Choose this tier"},
  tierNote:{ar:'<strong>ملاحظة:</strong> كل ما رفعت المستوى، صار التنفيذ أشمل وأكثر احترافية. نقدر حتى نبني معك ماب كامل — بس تخصصي الأساسي هو البرمجة (Lua)، والتصميم البصري نتفق عليه بشكل خاص حسب حالة المشروع.',
            en:'<strong>Note:</strong> higher tiers mean broader, more polished delivery. We can even build a full map together — but my core specialty is scripting (Lua); visual design is arranged separately per project.'},

  catEyebrow:{ar:"المتجر",en:"STORE"}, catTitle:{ar:"سكربتات جاهزة للبيع",en:"Ready-made scripts"},
  catDesc:{ar:"أنظمة مبرمجة مسبقًا بمجالات مختلفة — جاهزة للتسليم السريع بدون انتظار برمجة من الصفر.",en:"Pre-built systems across different categories — ready for fast delivery, no from-scratch wait."},
  c1n:{ar:"نظام حفظ بيانات",en:"Data Save System"}, c1d:{ar:"يحفظ تقدّم اللاعب تلقائيًا (DataStore)",en:"Auto-saves player progress (DataStore)"},
  c2n:{ar:"متجر داخل اللعبة",en:"In-Game Shop"}, c2d:{ar:"واجهة شراء وبيع كاملة (Shop GUI)",en:"Full buy/sell interface (Shop GUI)"},
  c3n:{ar:"لوحة صدارة",en:"Leaderboard"}, c3d:{ar:"ترتيب اللاعبين تلقائيًا (Leaderboard)",en:"Automatic player ranking"},
  c4n:{ar:"أوامر إدارية",en:"Admin Commands"}, c4d:{ar:"تحكم كامل بالسيرفر (Admin Commands)",en:"Full server control toolkit"},
  c5n:{ar:"حوار NPC",en:"NPC Dialogue"}, c5d:{ar:"محادثة تفاعلية بمراحل متعددة",en:"Interactive multi-stage conversation"},
  c6n:{ar:"تأثيرات حركة",en:"Movement Effects"}, c6d:{ar:"سرعة، قفزة مزدوجة، سباحة سلسة",en:"Speed, double jump, smooth swimming"},
  c7n:{ar:"نظام قتال أساسي",en:"Basic Combat System"}, c7d:{ar:"صحة، ضرر، وواجهة عرضهم",en:"Health, damage, and display UI"},
  c8n:{ar:"جائزة يومية",en:"Daily Reward"}, c8d:{ar:"مكافأة تلقائية عند الدخول اليومي",en:"Automatic reward on daily login"},
  c9n:{ar:"حماية أساسية",en:"Basic Anti-Exploit"}, c9d:{ar:"فحص الطلبات المشبوهة (Anti-Exploit)",en:"Flags suspicious requests"},
  c10n:{ar:"نظام انتقال",en:"Teleport System"}, c10d:{ar:"تنقّل بين مناطق اللعبة (Teleport)",en:"Move between in-game areas"},
  c11n:{ar:"نظام كرافتنق",en:"Crafting System"}, c11d:{ar:"دمج عناصر لصناعة أدوات جديدة",en:"Combine items to craft new tools"},
  c12n:{ar:"نظام Quests",en:"Quest System"}, c12d:{ar:"مهام يومية مع مكافآت تلقائية",en:"Daily tasks with automatic rewards"},
  c13n:{ar:"نظام Trading",en:"Trading System"}, c13d:{ar:"تبادل عناصر آمن بين لاعبين",en:"Safe item exchange between players"},
  c14n:{ar:"قالب موقع شخصي",en:"Personal Site Template"}, c14d:{ar:"صفحة تعريفية جاهزة بتصميم نظيف",en:"A ready-made bio page with a clean design"},
  c15n:{ar:"نموذج تواصل لموقع",en:"Website Contact Form"}, c15d:{ar:"فورم يرسل الرسائل لإيميلك مباشرة",en:"A form that emails submissions straight to you"},
  c16n:{ar:"لوحة إدارة بسيطة",en:"Simple Admin Panel"}, c16d:{ar:"صفحة تحكم بسيطة لعرض وتعديل بيانات",en:"A basic dashboard to view and edit data"},
  customTitle:{ar:"ما لقيت اللي تحتاجه؟",en:"Didn't find what you need?"},
  customDesc:{ar:"اطلب سكربت مخصص لفكرتك الخاصة، ونتفق على السعر حسب حجم المهمة.",en:"Request a custom script for your own idea, priced based on scope."},
  customBtn:{ar:"اطلب شي مخصص",en:"Request Custom Work"},

  workEyebrow:{ar:"أعمالي",en:"WORK"}, workTitle:{ar:"أمثلة على شغلي بكل مجال",en:"Examples across every field"},
  workDesc:{ar:"نماذج توضيحية لنوع الشغل اللي أسلمه — كل مثال يمثل مهمة حقيقية ممكن تطلبها.",en:"Sample deliverables showing the kind of work I ship — each one reflects a real task you could request."},
  w1n:{ar:"سكربت Roblox",en:"Roblox Script"}, w1d:{ar:"نظام حفظ بيانات كامل (DataStore) مع معالجة الأخطاء",en:"A full DataStore save system with error handling"},
  w2n:{ar:"كود موقع",en:"Website Code"}, w2d:{ar:"صفحة هبوط تفاعلية بـHTML/CSS/JS بدون مكتبات ثقيلة",en:"An interactive landing page in plain HTML/CSS/JS"},
  w3n:{ar:"بحث Word",en:"Word Research Paper"}, w3d:{ar:"بحث مدرسي منسّق بفهرس وترقيم صفحات تلقائي",en:"A formatted school paper with auto index & page numbers"},
  w4n:{ar:"عرض PowerPoint",en:"PowerPoint Deck"}, w4d:{ar:"شرائح بهوية بصرية موحّدة وتصميم غير قوالب جاهزة",en:"Slides with a consistent identity, not generic templates"},
  w5n:{ar:"إصلاح ماب Roblox",en:"Roblox Map Fix"}, w5d:{ar:"تشخيص خطأ في سكربت موجود وإصلاحه دون كسر باقي اللعبة",en:"Diagnosing and fixing a bug without breaking the rest"},
  w6n:{ar:"تصميم لوجو",en:"Logo Design"}, w6d:{ar:"شعار بسيط ونظيف يعكس هوية المشروع",en:"A clean, simple mark that reflects your project's identity"},

  aboutEyebrow:{ar:"من أنا",en:"ABOUT"}, aboutTitle:{ar:"شغل متقن، مو مجرد تنفيذ سريع",en:"Careful work, not just fast delivery"},
  about1:{ar:'<strong>بدأت بالبرمجة والتصميم بشغف حقيقي، وكل مشروع أسويه يعلّمني شي جديد أطبّقه بالي بعده.</strong> ما أدّعي إني أعرف كل شي، لكن اللي أشتغل فيه أتقنه بعناية وما أسلّمه إلا وأنا مقتنع فيه.',
           en:'<strong>I started coding and designing out of genuine passion, and every project teaches me something I carry into the next one.</strong> I don\'t claim to know everything, but what I do take on, I handle with real care and won\'t deliver until I\'m satisfied with it.'},
  about2:{ar:"أتعامل مع كل طلب بجدية: أفهم وش تحتاجه بالضبط قبل ما أبدأ، أنظّم شغلي بطريقة واضحة، وأراجع النتيجة أكثر من مرة قبل ما توصلك. هذا الأسلوب هو اللي خلاني أتحسّن باستمرار — وهو نفسه اللي بيوصلك بأفضل صورة ممكنة.",
          en:"I take every request seriously: understanding exactly what you need before starting, keeping my work clearly organized, and reviewing the result more than once before it reaches you. That habit is what keeps me improving — and it's what gets you the best possible version of it."},
  about3:{ar:"تقدر تتوقع مني: صدق بالتواصل (لو شي ما أقدر أسويه، بقولك بصراحة)، ومتابعة حتى بعد التسليم لو احتجت أي تعديل بسيط.",
          en:"What you can expect from me: honest communication (if something's outside my ability, I'll tell you straight up), and follow-up support after delivery for small tweaks."},

  contactEyebrow:{ar:"تواصل معي",en:"CONTACT"}, contactTitle:{ar:"عندك مهمة؟ يلا نبدأ",en:"Have a task? Let's start"},
  contactBoxTitle:{ar:"تواصل مباشر",en:"Direct Contact"}, contactBoxDesc:{ar:"راسلني على الإيميل، وأرد عليك خلال 24–48 ساعة.",en:"Email me, and I'll reply within 24–48 hours."},
  copyBtn:{ar:"نسخ الإيميل",en:"Copy Email"},
  formTitle:{ar:"أو عبّي طلبك هنا",en:"Or fill in your request"},
  formName:{ar:"اسمك",en:"Your Name"}, formEmail:{ar:"إيميلك",en:"Your Email"}, formService:{ar:"وش تحتاج؟",en:"What do you need?"},
  formOpt1:{ar:"Tier I — إصلاح وتعديل ($5)",en:"Tier I — Fix & Tweak ($5)"},
  formOpt2:{ar:"Tier II — بناء نظام ($25)",en:"Tier II — Build a System ($25)"},
  formOpt3:{ar:"Tier III — مشروع متكامل ($50+)",en:"Tier III — Full Project ($50+)"},
  formOpt4:{ar:"سكربت جاهز من المتجر",en:"Ready-made script from the store"},
  formOpt5:{ar:"طلب مخصص",en:"Custom request"},
  formMsg:{ar:"تفاصيل الطلب",en:"Request Details"}, formSubmit:{ar:"إرسال الطلب",en:"Send Request"},
  formDiscount:{ar:"كود الخصم (إن وجد)",en:"Discount code (if any)"},
  formSuccessMsg:{ar:"تم استلام طلبك! بترد عليك بأقرب وقت.",en:"Your request was received! I'll get back to you soon."},

  payEyebrow:{ar:"الدفع",en:"PAYMENT"}, payTitle:{ar:"ادفع مباشرة عبر PayPal",en:"Pay directly via PayPal"},
  payDesc:{ar:"اختر مبلغ الفئة اللي اتفقنا عليها بصفحة الخدمات وادفع بأمان — بالدولار، من رصيدك أو بطاقتك.",en:"Pick the tier amount from the Services page and pay securely — billed in USD, using your PayPal balance or card."},
  payNote:{ar:"بعد الدفع، تواصل معي عبر الإيميل وأرفق تفاصيل طلبك — الدفع لا يرسل التفاصيل تلقائيًا.",en:"After paying, email me your request details — payment alone doesn't send them."},
};

const heroTitleHTML = {
  ar:'أحوّل فكرتك<br>إلى <em>نظام يعمل</em><br>داخل Roblox',
  en:'I turn your idea<br>into a <em>working system</em><br>inside Roblox'
};
const codeCommentHTML = {
  ar:'<span class="ln">1</span><span class="c-com">-- حفظ بيانات اللاعب تلقائيًا</span>\n',
  en:'<span class="ln">1</span><span class="c-com">-- Auto-save player data</span>\n'
};

function applyLang(lang){
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  const langBtn = document.getElementById('langBtn');
  if (langBtn) langBtn.textContent = lang === 'ar' ? 'EN' : 'AR';

  const heroTitle = document.getElementById('heroTitle');
  if (heroTitle) heroTitle.innerHTML = heroTitleHTML[lang];

  const codeBlock = document.getElementById('codeBlock');
  if (codeBlock) {
    codeBlock.innerHTML = codeBlock.innerHTML.replace(
      /<span class="ln">1<\/span><span class="c-com">.*?<\/span>\n/,
      codeCommentHTML[lang]
    );
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!T[key]) return;
    const val = T[key][lang];
    if (val.includes('<strong>') || val.includes('<em>')) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  // carry the language choice across internal page links
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('#')) return;
    const base = href.split('?')[0];
    a.setAttribute('href', base + '?lang=' + lang);
  });
}

function toggleLang(){
  applyLang(currentLang === 'ar' ? 'en' : 'ar');
}

function copyEmail(){
  const emailEl = document.getElementById('emailText');
  if (!emailEl) return;
  const email = emailEl.textContent;
  navigator.clipboard.writeText(email).then(() => {
    const btn = document.getElementById('copyBtn');
    const original = btn.textContent;
    btn.textContent = currentLang === 'ar' ? 'تم النسخ ✓' : 'Copied ✓';
    setTimeout(() => btn.textContent = original, 1800);
  });
}

function renderPayPalButton(containerId, amount, label){
  if (typeof paypal === 'undefined') return;
  paypal.Buttons({
    style:{ layout:'vertical', color:'gold', shape:'rect', label:'pay', height:38 },
    createOrder: function(data, actions){
      return actions.order.create({ purchase_units:[{ description:label, amount:{ value:amount } }] });
    },
    onApprove: function(data, actions){
      return actions.order.capture().then(function(details){
        alert(currentLang === 'ar' ? 'شكرًا! تم الدفع بنجاح. راسلني الحين بتفاصيل طلبك على الإيميل.' : 'Thank you! Payment successful. Now email me your request details.');
      });
    }
  }).render('#' + containerId);
}

window.addEventListener('DOMContentLoaded', function(){
  const params = new URLSearchParams(window.location.search);
  applyLang(params.get('lang') === 'en' ? 'en' : 'ar');

  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  const orderForm = document.getElementById('orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(orderForm);
      fetch('https://api.web3forms.com/submit', { method:'POST', body:data, headers:{'Accept':'application/json'} })
        .then(r => r.json())
        .then(() => {
          document.getElementById('formSuccess').style.display = 'block';
          orderForm.reset();
        })
        .catch(() => { alert(currentLang === 'ar' ? 'صار خطأ، جرب مرة ثانية' : 'Something went wrong, try again'); });
    });
  }

  if (document.getElementById('paypal-5')) {
    window.addEventListener('load', function(){
      renderPayPalButton('paypal-5', '5.00', 'BlancoDev — Tier I');
      renderPayPalButton('paypal-25', '25.00', 'BlancoDev — Tier II');
      renderPayPalButton('paypal-50', '50.00', 'BlancoDev — Tier III');
    });
  }
});
