// Selectors
let menuIcon = document.querySelector(".menu-icon");
let slider = document.querySelector(".slider");
let overlay = document.querySelector(".overlay");
let container = document.querySelector(".container");
let content = document.querySelector(".content");
let optionBarIcon = document.querySelector(".show-options-bar");
let optionBar = document.querySelector(".options-bar");
let sliderLinks = document.querySelectorAll(".slider-menu div");
let backupManager = document.querySelectorAll(".other-options-bc div");
let changeIcon = document.querySelector(".change");
let email = document.querySelector(".email input");
let showSlider = document.querySelector(".show-slider");
let sliderWelcome = document.querySelector(".slider-welcome");
let sliderMenuLinks = document.querySelectorAll(".slider-menu div a span");
let sliderMenuDiv = document.querySelectorAll(".slider-menu div");

if (window.localStorage.getItem("shortSlider") === "active") {
  showSlider.classList.add("rotate-icon");
  sliderMenuLinks.forEach((e) => {
    e.classList.toggle("hide-link-span");
  });
  sliderWelcome.classList.toggle("hide-slider-welcome");
  slider.classList.toggle("just-icons");
  content.classList.toggle("large");
}
sliderMenuDiv.forEach((e) => {
  e.onmouseenter = function () {
    window.localStorage.getItem("shortSlider") === "active"
      ? e.classList.add("toltip")
      : "";
  };
  e.onmouseleave = function () {
    window.localStorage.getItem("shortSlider") === "active"
      ? e.classList.remove("toltip")
      : "";
  };
});
showSlider.onclick = function () {
  showSlider.classList.toggle("rotate-icon");
  sliderMenuLinks.forEach((e) => {
    e.classList.toggle("hide-link-span");
  });
  sliderWelcome.classList.toggle("hide-slider-welcome");
  slider.classList.toggle("just-icons");
  content.classList.toggle("large");
  if (showSlider.classList.contains("rotate-icon")) {
    window.localStorage.setItem("shortSlider", "active");
  } else {
    window.localStorage.setItem("shortSlider", "notActive");
  }
};

menuIcon.onclick = function () {
  if (optionBar.classList.contains("drag-menu")) {
    optionBar.classList.toggle("drag-menu");
    showOverlay();
  }
  slider.classList.toggle("drag-menu");
  showOverlay();
};
optionBarIcon.onclick = function () {
  if (slider.classList.contains("drag-menu")) {
    slider.classList.toggle("drag-menu");
    showOverlay();
  }
  optionBar.classList.toggle("drag-menu");
  showOverlay();
};
if (window.sessionStorage.getItem("active")) {
  sliderLinks.forEach((e) => {
    e.classList.remove("active");
    if (e.textContent === window.sessionStorage.getItem("active")) {
      e.classList.add("active");
    }
  });
}
sliderLinks.forEach((e) => {
  e.onclick = function () {
    window.sessionStorage.setItem("active", e.textContent);
  };
});
backupManager.forEach((e) => {
  e.onclick = function () {
    backupManager.forEach((el) => {
      el.classList.remove("active");
    });
    e.classList.add("active");
  };
});

changeIcon.onclick = function () {
  email.removeAttribute("disabled");
};

// Functions
function showOverlay() {
  overlay.classList.toggle("active");
  container.classList.toggle("stop-scrolling");
}
