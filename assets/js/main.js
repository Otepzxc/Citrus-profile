/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

// dark theme.js
document.addEventListener('DOMContentLoaded', function() {
  const themeButton = document.getElementById('theme-button');
  const body = document.body;

  // Check for saved theme preference
  const theme = localStorage.getItem('theme');
  if (theme) {
      body.classList.add(theme);
      // Toggle moon/sun icon based on the theme
      if (theme === 'dark-theme') {
          themeButton.classList.add('bx-sun');
          themeButton.classList.remove('bx-moon');
      } else {
          themeButton.classList.add('bx-moon');
          themeButton.classList.remove('bx-sun');
      }
  }

  themeButton.addEventListener('click', function() {
      if (body.classList.contains('dark-theme')) {
          body.classList.remove('dark-theme');
          localStorage.setItem('theme', 'light-theme');
          // Change icon to sun when switching to light theme
          themeButton.classList.add('bx-moon');
          themeButton.classList.remove('bx-sun');
      } else {
          body.classList.add('dark-theme');
          localStorage.setItem('theme', 'dark-theme');
          // Change icon to moon when switching to dark theme
          themeButton.classList.add('bx-sun');
          themeButton.classList.remove('bx-moon');
      }
  });
});