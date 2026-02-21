document.addEventListener('DOMContentLoaded', async () => {
  // Load Config (only for offer)
  let config = { offer: {} };
  try {
    const res = await fetch('/config.json?' + Date.now());
    config = await res.json();
  } catch (e) { console.warn('config.json not found'); }

  // Typewriter
  const title = document.querySelector('#typewriter .typewriter-text');
  const cursor = document.querySelector('.cursor');
  if (title) {
    const text = title.textContent;
    title.textContent = '';
    let i = 0;
    const type = () => {
      if (i < text.length) {
        title.textContent += text.charAt(i++);
        setTimeout(type, 100);
      } else cursor.style.animation = 'none';
    };
    setTimeout(type, 600);
  }

  // Mobile Menu
  const menuBtn = document.querySelector('.mobile-menu-button');
  const navLinks = document.querySelector('#nav-links');
  menuBtn?.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !expanded);
    menuBtn.querySelector('i').classList.toggle('fa-bars');
    menuBtn.querySelector('i').classList.toggle('fa-times');
    navLinks.classList.toggle('show');
  });

  // Welcome Popup
  const popup = document.getElementById('welcome-popup');
  const offerTitle = document.getElementById('offer-title');
  const offerText = document.getElementById('offer-text');
  if (popup && config.offer.active && !localStorage.getItem('offer-seen')) {
    setTimeout(() => {
      offerTitle.textContent = config.offer.title || 'Welcome!';
      offerText.textContent = config.offer.text || 'Enjoy your visit!';
      popup.hidden = false;
    }, 2000);
  }
  window.closePopup = () => {
    popup.hidden = true;
    localStorage.setItem('offer-seen', 'true');
  };
  popup?.addEventListener('click', e => { if (e.target === popup) closePopup(); });

  // Hero Rotation
  const heroImages = document.querySelectorAll('.hero-img');
  if (heroImages.length > 1) {
    let idx = 0;
    setInterval(() => {
      heroImages[idx].classList.remove('active');
      idx = (idx + 1) % heroImages.length;
      heroImages[idx].classList.add('active');
    }, 6000);
  }

  // Year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#' || href === '#home') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.pageYOffset - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});