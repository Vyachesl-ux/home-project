
//accordion
let accordion = document.querySelectorAll('.faq-accordion__item')
	accordion.forEach(elem => elem.addEventListener('click', ()=>elem.classList.toggle('active')));

//Swiper https://swiperjs.com/get-started

const swiper = new Swiper('.section-hero-image', {
  // pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

new Swiper('.blog-swiper-container',{
  pagination: {
    el: '.swiper-pagination',
  },
    navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  }
});

new Swiper('.section-quotes__right',{
  pagination: {
    el: '.swiper-pagination'
  }
});