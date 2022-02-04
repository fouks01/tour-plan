$(document).ready(function () {
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
    autoHeight: true,

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

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
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

  const modalButton = $("[data-toggle=modal]");
  const closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  const bodyLock = $("body");

  function openModal() {
    const targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
    bodyLock.addClass("_lock");
  }

  function closeModal(event) {
    event.preventDefault();
    const modalOverlay = $(".modal__overlay");
    const modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    bodyLock.removeClass("_lock");
  }
  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Enter a name",
          minlength: "The name must be at least 2 characters",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Phone required",
          minlength: "Phone must be at least 11 characters",
        },
        // newsletter: {
        //   required: "We need your email address to contact you",
        //   email: "Your email address must be in the format of name@domain.com",
        // },
      },
    });
  });



  $(".subscribe").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        newsletter: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
      },
    });
  });



  $('.modal__input-2').mask("+7 (999) 999-99-99");
  $('.footer__input-2').mask("+7 (999) 999-99-99");

  AOS.init();

  // var disableBodyScroll = function () {
  //   window.body_scroll_pos = $(window).scrollTop(); // write page scroll position in a global variable
  //   $('body').css('overflow-y', 'hidden');
  // }

  // // Run this function when you close your popup:
  // var enableBodyScroll = function () {
  //   $('body').css('overflow-y', 'scroll');
  //   $(window).scrollTop(window.body_scroll_pos); // restore page scroll position from the global variable
  // }
});