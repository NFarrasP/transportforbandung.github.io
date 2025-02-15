// hamburger.js
function initializeHamburger() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  console.log('Initializing hamburger...');
  console.log('Hamburger element:', hamburger);
  console.log('Nav links element:', navLinks);

  if (hamburger && navLinks) {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
      console.log('Hamburger clicked');
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.navbar') && navLinks.classList.contains('active')) {
        console.log('Clicked outside, closing menu');
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });

    // Close menu after clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        console.log('Link clicked, closing menu');
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  } else {
    console.error('Hamburger or nav-links element not found');
  }
}

// Export for dynamic loading
window.initializeHamburger = initializeHamburger;
