'use strict';

// ADD EVENT

const addEventOnElements = function (elements, eventType, callback) {
    for ( let i = 0, len = elements.length; i < len; i++ ) {
        elements[i].addEventListener(eventType, callback);
    }
}



// NAVBAR

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

// HEADER

const header = document.querySelector("[data-header]");

let lastScrollPos = 0; 

const hideHeader = function () {
    const isScrollBottom = lastScrollPos < window.scrollY;
    if (isScrollBottom) {
        header.classList.add("hide");
    }
    else {
        header.classList.remove("hide");
    }

    lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
    if (window.scrollY >= 50) {
        header.classList.add("active");
        hideHeader();
    }
    else {
        header.classList.remove("active")
    }
});


// FILTERASI MENU


// const filterButtons = document.querySelectorAll('.filter-button .section-filter');
// const cardItems = document.querySelectorAll('.filterable-cards li');

// filterButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     document.querySelector('.filter-button .active')?.classList.remove('active');
//     button.classList.add('active');

//     const filterValue = button.dataset.filter;

//     cardItems.forEach(item => {
//       const card = item.querySelector('.card');
//       if (!card) return;

//       if (filterValue === 'Semua' || card.classList.contains(filterValue)) {
//         item.classList.remove('hide');
//       } else {
//         item.classList.add('hide');
//       }
//     });
//   });
// });

const filterButtons = document.querySelectorAll('.filter-button .section-filter');
const cardItems = document.querySelectorAll('.filterable-cards li');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Aktifkan tombol
    document.querySelector('.filter-button .active')?.classList.remove('active');
    button.classList.add('active');

    const filterValue = button.dataset.filter;

    cardItems.forEach(item => {
      const card = item.querySelector('.card');
      if (!card) return;

      // Jika filter "Semua" atau class pada card cocok
        if (filterValue === 'Semua') {
        item.classList.remove('hide');
        } else if (card.classList.contains(filterValue)) {
        item.classList.remove('hide');
        } else {
        item.classList.add('hide');
        }

    });
  });
});


    // GALERI PUNYA
new Swiper('.card-wrapper', {
  loop: true,
    spaceBetween: 30,

  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
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