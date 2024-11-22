// swipper js code
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.6,
  spaceBetween: 40,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  //swipper responsive
  breakpoints: {
    600: {
      slidesPerView: 3,
    },
  },
});

// Responsive Nav BAr Logic =================================
// Responsive Nav BAr Logic =================================

const mobile_navbar_btn = document.querySelector(".mobile-navbar-btn");

const nav = document.querySelector("nav");

nav.classList.remove("active")

const toggle_nav_bar = () => {
  nav.classList.toggle("active");
};

mobile_navbar_btn.addEventListener("click", () => toggle_nav_bar());
