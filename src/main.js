const menuBtn = document.getElementById("menu-btn");
const menuClose = document.getElementById("menu-close");

menuBtn.addEventListener("click", function () {
  menuClose.classList.remove("hidden");
});

menuClose.addEventListener("click", function () {
  menuClose.classList.add("hidden");
});

//======  swiper =======
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

//======= swiper corusel
var swiper = new Swiper(".mySwiper_t", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

///======= accordion======
const checkBox = document.getElementById("check_box1");
const tabOne = document.getElementById("tab1");

checkBox.addEventListener("click", function () {
  tabOne.classList.toggle("hidden");
});

const checkBox2 = document.getElementById("check_box2");
const tabTwo = document.getElementById("tab2");

checkBox2.addEventListener("click", function () {
  tabTwo.classList.toggle("hidden");
});
