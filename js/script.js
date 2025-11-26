document.addEventListener("DOMContentLoaded", () => {
  // ===== Mobile menu toggle =====
  const toggleButtons = document.querySelectorAll('.mobile-toggle');
  const nav = document.querySelector('.nav');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      if(nav) nav.classList.toggle('active');
    });
  });

  // ===== Fade-up on scroll =====
  const faders = document.querySelectorAll('.fade-up');

  if(faders.length > 0) {
    const appearOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach(fader => appearOnScroll.observe(fader));
  }

  // ===== Footer year auto-update =====
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // ===== Initialize Swiper slider =====
  if (typeof Swiper !== "undefined") {
    const swiper = new Swiper(".hero-slider", {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
});
