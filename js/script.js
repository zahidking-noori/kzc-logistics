// Mobile menu toggle
const toggleButton = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav');

toggleButton.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Animate on scroll
const faders = document.querySelectorAll('.fade-up');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Footer year auto
document.getElementById('year').textContent = new Date().getFullYear();
