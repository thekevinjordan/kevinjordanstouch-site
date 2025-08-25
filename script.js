// Highlight navigation links on scroll and reveal sections
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');
const hiddenElements = document.querySelectorAll('.hidden');

// Observer for navigation link highlighting
const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove('active'));
        const id = entry.target.getAttribute('id');
        const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  },
  { threshold: 0.6 }
);

sections.forEach((section) => navObserver.observe(section));

// Observer for entrance animations
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

hiddenElements.forEach((el) => revealObserver.observe(el));
