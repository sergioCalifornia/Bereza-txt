// Burger

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.burger-menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

// Swiper

// new swiper('.swiper');


// let swiper = new Swiper('.swiper', {
//   direction: 'vertical',
//   loop: true,
// });


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


