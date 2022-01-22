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
const swiper = new Swiper('.hotel-slider', {
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