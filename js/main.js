// слайдер
new Swiper('.swiper', {
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },
});

// модальное окно
$('.header__btn').on('click', function() {
  $('.popups__inner').addClass('active');
});

$('.close_popup').on('click', function() {
  $('.popups__inner').removeClass('active');
});

// бургер меню
$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__nav').toggleClass('active');
    // $('body').toggleClass('lock'); /* при открытом бургере, что бы страница не скролилась*/
  });
});


// const atmosfer__swiper = new Swiper('.atmosfer__swiper', {
//   direction: 'horizontal',
//   loop: false,
//   speed: 500,
//   slidesPerView: 1,
//   centeredSlides: true,
//   initialSlide: 1,
//   spaceBetween: 30,
//   // effect: 'coverflow',

//   // navigation: {
//   //   nextEl: '.swiper-button-next',
//   //   prevEl: '.swiper-button-prev',
//   // },
// });