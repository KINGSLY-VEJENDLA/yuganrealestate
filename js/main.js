
document.addEventListener('DOMContentLoaded', () => {
  if(document.querySelector('[data-lucide]')){
    const iconScript = document.createElement('script');
    iconScript.src = 'https://unpkg.com/lucide@0.468.0/dist/umd/lucide.min.js';
    iconScript.onload = () => window.lucide?.createIcons();
    document.head.append(iconScript);
  }

  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav-links');
  if(menuBtn && nav){
    menuBtn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      menuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });
  }

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      if(window.innerWidth <= 850 && !a.parentElement.classList.contains('dropdown')){
        nav?.classList.remove('open');
        menuBtn?.setAttribute('aria-expanded', 'false');
        menuBtn?.setAttribute('aria-label', 'Open menu');
      }
    });
  });

  document.querySelectorAll('.dropdown > a').forEach(a => {
    a.addEventListener('click', e => {
      if(window.innerWidth <= 850){
        e.preventDefault();
        a.parentElement.classList.toggle('open');
      }
    });
  });

  document.addEventListener('keydown', e => {
    if(e.key === 'Escape' && nav?.classList.contains('open')){
      nav.classList.remove('open');
      menuBtn?.setAttribute('aria-expanded', 'false');
      menuBtn?.setAttribute('aria-label', 'Open menu');
      menuBtn?.focus();
    }
  });

  document.querySelectorAll('form[data-contact-form]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const old = btn.textContent;
      btn.textContent = 'Message Submitted ✓';
      btn.disabled = true;
      setTimeout(() => { btn.textContent = old; btn.disabled = false; form.reset(); }, 1800);
    });
  });

  const year = document.querySelector('[data-year]');
  if(year) year.textContent = new Date().getFullYear();
});
