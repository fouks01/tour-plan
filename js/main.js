const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("Клик по кнопке меню");
  document
    .querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom--visible");
});
// var myMap;

// // Дождёмся загрузки API и готовности DOM.
// ymaps.ready(init);

// function init() {
//   // Создание экземпляра карты и его привязка к контейнеру с
//   // заданным id ("map").
//   myMap = new ymaps.Map('map', {
//     // При инициализации карты обязательно нужно указать
//     // её центр и коэффициент масштабирования.
//     center: [7.845936, 98.297179], // Москва
//     zoom: 16
//   }, {
//     searchControlProvider: 'yandex#search'
//   });
// }