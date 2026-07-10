// ==================== ANIMATIONS & INTERACTIONS ====================

// لغة التبديل
function toggleLang() {
  const html = document.documentElement;
  const currentLang = html.getAttribute('lang');
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  const newDir = newLang === 'ar' ? 'rtl' : 'ltr';
  
  html.setAttribute('lang', newLang);
  html.setAttribute('dir', newDir);
  
  const btn = document.getElementById('langBtn');
  btn.textContent = newLang === 'ar' ? 'EN' : 'AR';
  
  localStorage.setItem('lang', newLang);
}

// Restore language from localStorage
window.addEventListener('load', () => {
  const savedLang = localStorage.getItem('lang') || 'ar';
  if (savedLang !== 'ar') {
    toggleLang();
  }
});

// ==================== SCROLL ANIMATIONS ====================

const revealElements = document.querySelectorAll('.reveal');

const revealOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, revealOptions);

revealElements.forEach(element => revealOnScroll.observe(element));

// ==================== PARTICLE EFFECT ====================

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 3 + 1;
    this.speedX = (Math.random() - 0.5) * 4;
    this.speedY = (Math.random() - 0.5) * 4;
    this.color = ['#D4AF37', '#3159C9', '#F4F6FB'][Math.floor(Math.random() * 3)];
    this.life = 1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life -= 0.02;
  }
}

let particles = [];

document.addEventListener('mousemove', (e) => {
  if (Math.random() > 0.98) {
    particles.push(new Particle(e.clientX, e.clientY));
  }
});

function animateParticles() {
  particles = particles.filter(p => p.life > 0);
  particles.forEach(p => p.update());
  requestAnimationFrame(animateParticles);
}

animateParticles();

// ==================== TYPEWRITER EFFECT ====================

function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Typewriter on hero title
window.addEventListener('load', () => {
  const heroTitle = document.getElementById('heroTitle');
  if (heroTitle) {
    const originalText = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    let charIndex = 0;
    
    function typeChar() {
      if (charIndex < originalText.length) {
        heroTitle.innerHTML += originalText.charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, 40);
      }
    }
    typeChar();
  }
});

// ==================== COUNTER ANIMATION ====================

function animateCounter(element, target, duration = 2000) {
  let current = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// ==================== EMAIL COPY ====================

function copyEmail() {
  const email = document.getElementById('emailText').textContent;
  navigator.clipboard.writeText(email).then(() => {
    const btn = document.getElementById('copyBtn');
    const originalText = btn.textContent;
    btn.textContent = '✓ تم النسخ';
    setTimeout(() => {
      btn.textContent = originalText;
    }, 2000);
  });
}

// ==================== FORM SUBMISSION ====================

const orderForm = document.getElementById('orderForm');
if (orderForm) {
  orderForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(orderForm);
    const url = 'https://api.web3forms.com/submit';
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        document.getElementById('formSuccess').style.display = 'block';
        orderForm.style.display = 'none';
        setTimeout(() => {
          orderForm.reset();
          orderForm.style.display = 'block';
          document.getElementById('formSuccess').style.display = 'none';
        }, 3000);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
}

// ==================== SMOOTH SCROLL ====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ==================== CURSOR GLOW EFFECT ====================

const cursorGlow = document.createElement('div');
cursorGlow.style.cssText = `
  position: fixed;
  width: 40px;
  height: 40px;
  background: radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  display: none;
`;
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = (e.clientX - 20) + 'px';
  cursorGlow.style.top = (e.clientY - 20) + 'px';
  cursorGlow.style.display = 'block';
});

document.addEventListener('mouseleave', () => {
  cursorGlow.style.display = 'none';
});

// ==================== BUTTON RIPPLE EFFECT ====================

document.querySelectorAll('.btn-primary, .btn-ghost, .pick').forEach(button => {
  button.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%);
      border-radius: 50%;
      left: ${x}px;
      top: ${y}px;
      pointer-events: none;
      animation: ripple 0.6s ease-out;
    `;
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ==================== HERO BACKGROUND ANIMATION ====================

function createBackgroundAnimation() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  
  const canvas = document.createElement('canvas');
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.1;
  `;
  
  document.body.insertBefore(canvas, document.body.firstChild);
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = [];
  const particleCount = 50;
  
  class BgParticle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.radius = Math.random() * 2 + 1;
    }
    
    update() {
      this.x += this.vx;
      this.y += this.vy;
      
      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;
      if (this.y < 0) this.y = canvas.height;
      if (this.y > canvas.height) this.y = 0;
    }
    
    draw() {
      ctx.fillStyle = '#D4AF37';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  for (let i = 0; i < particleCount; i++) {
    particles.push(new BgParticle());
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    
    requestAnimationFrame(animate);
  }
  
  animate();
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

window.addEventListener('load', createBackgroundAnimation);

// ==================== SMOOTH SCROLL HEADER ====================

let lastScrollY = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  lastScrollY = window.scrollY;
  
  if (lastScrollY > 50) {
    nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// ==================== LAZY LOAD IMAGES ====================

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ==================== PAGE LOAD ANIMATION ====================

window.addEventListener('load', () => {
  document.body.style.opacity = '1';
  document.body.style.transition = 'opacity 0.5s ease-in';
});

// ==================== PERFORMANCE OPTIMIZATION ====================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '50px'
};

const elementObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.tier, .cat-item, .port-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease';
  elementObserver.observe(el);
});

console.log('🚀 BlancoDev Script Loaded Successfully!');