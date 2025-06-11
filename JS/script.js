'use strict';

document.addEventListener("DOMContentLoaded", function () {

  // NAVBAR
  const navbar = document.querySelector("[data-navbar]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const overlay = document.querySelector("[data-overlay]");

  const toggleNavbar = function () {
    navbar?.classList.toggle("active");
    overlay?.classList.toggle("active");
    document.body.classList.toggle("nav-active");
  };

  navTogglers.forEach(btn => {
    btn.addEventListener("click", toggleNavbar);
  });


  // HEADER
  const header = document.querySelector("[data-header]");
  let lastScrollPos = 0;

  const hideHeader = function () {
    const isScrollBottom = lastScrollPos < window.scrollY;
    if (isScrollBottom) {
      header?.classList.add("hide");
    } else {
      header?.classList.remove("hide");
    }
    lastScrollPos = window.scrollY;
  };

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 50) {
      header?.classList.add("active");
      hideHeader();
    } else {
      header?.classList.remove("active");
    }
  });


  // FILTER MENU
  const filterButtons = document.querySelectorAll('.filter-button .section-filter');
  const cardItems = document.querySelectorAll('.filterable-cards li');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.filter-button .active')?.classList.remove('active');
      button.classList.add('active');

      const filterValue = button.dataset.filter;

      cardItems.forEach(item => {
        const card = item.querySelector('.card');
        if (!card) return;

        if (filterValue === 'Semua' || card.classList.contains(filterValue)) {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  });


  // HERO SLIDER
  const heroSlider = document.querySelector("[data-hero-slider]");
  const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
  const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
  const heroSliderNextBtn = document.querySelector("[data-next-btn]");

  let currentSlidePos = 0;
  let lastActiveSliderItem = heroSliderItems[0];

  const updateSliderPos = function () {
    lastActiveSliderItem?.classList.remove("active");
    heroSliderItems[currentSlidePos]?.classList.add("active");
    lastActiveSliderItem = heroSliderItems[currentSlidePos];
  };

  const slideNext = function () {
    currentSlidePos = (currentSlidePos + 1) % heroSliderItems.length;
    updateSliderPos();
  };

  const slidePrev = function () {
    currentSlidePos = (currentSlidePos - 1 + heroSliderItems.length) % heroSliderItems.length;
    updateSliderPos();
  };

  if (heroSliderNextBtn && heroSliderPrevBtn) {
    heroSliderNextBtn.addEventListener("click", slideNext);
    heroSliderPrevBtn.addEventListener("click", slidePrev);
  }

  //auto slide
  let autoSlideInterval;
  const autoSlide = function () {
    autoSlideInterval = setInterval(slideNext, 7000);
  };

  if (heroSliderNextBtn && heroSliderPrevBtn) {
    [heroSliderNextBtn, heroSliderPrevBtn].forEach(btn => {
      btn.addEventListener("mouseover", () => clearInterval(autoSlideInterval));
      btn.addEventListener("mouseout", autoSlide);
    });
  }

  autoSlide();

});


// MENU & GALERI SLIDER
new Swiper('.card-wrapper', {
loop: true,
  spaceBetween: 30,

pagination: {
  el: '.swiper-pagination',
  clickable: true,
  dynamicBullets: true
},

navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},

// Responsive brakpoints
breakpoints:{
  0: {
      slidesPerView: 1
  },
  768: {
      slidesPerView: 2
  },
  1024: {
      slidesPerView: 3
      },
    }
  });


// POP-UP
  const popup = document.getElementById('menuPopup');
  const popupImg = document.getElementById('popupImage');
  const popupTitle = document.getElementById('popupTitle');
  const popupDesc = document.getElementById('popupDesc');
  const closePopup = document.getElementById('closePopup');

  document.querySelectorAll('.menu-card').forEach(card => {
    const img = card.querySelector('img');
    const title = card.querySelector('.card-title');
    const desc = card.querySelector('.card-text');

    function showPopup() {
      popupImg.src = img.src;
      popupTitle.textContent = title.textContent;
      popupDesc.textContent = desc.textContent;
      popup.classList.remove('hidden');
    }

    img.addEventListener('click', showPopup);
    title.addEventListener('click', showPopup);
  });

  closePopup.addEventListener('click', () => {
    popup.classList.add('hidden');
  });

//popup pesan meja

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("popupOverlay");
  const pesanBtn = document.getElementById("pesanBtn");
  const closeBtn = document.getElementById("closePopup");

  if (pesanBtn && popup && overlay && closeBtn) {
    pesanBtn.addEventListener("click", function (e) {
      e.preventDefault(); // Mencegah refresh
      popup.classList.add("active");
      overlay.classList.add("active");
      document.body.classList.add("popup-open");
    });

    closeBtn.addEventListener("click", function () {
      popup.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("popup-open");
    });
  }
});
