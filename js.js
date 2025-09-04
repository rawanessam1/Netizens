document.addEventListener('DOMContentLoaded', () => {

  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('header nav ul');

  // Toggle mobile menu
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Toggle icon between bars & X
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
  });

  // Smooth scrolling for nav links + close mobile menu after click
  document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });

      // Close mobile menu
      navMenu.classList.remove('active');
      menuToggle.querySelector('i').classList.add('fa-bars');
      menuToggle.querySelector('i').classList.remove('fa-xmark');
    });
  });

});
