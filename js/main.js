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

  const modalButton = $("[data-toggle=modal]");
  const closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  const modalOverlay = $(".modal__overlay");
  const modalDialog = $(".modal__dialog");
  const bodyLock = $("body");

  function openModal() {
    const targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
    bodyLock.addClass("_lock");
  }

  function closeModal(event) {
    event.preventDefault();
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    bodyLock.removeClass("_lock");
  }

  $(document).on("keydown", function (e) {
    if (e.which === 27) {
      if (modalDialog.hasClass("modal__dialog--visible")) {
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
        bodyLock.removeClass("_lock");
      }
    }
  });

  $(document).click(function (e) {
    if ($(e.target).is('.modal__overlay')) {
      closeModal(e);
    }
  });

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

});