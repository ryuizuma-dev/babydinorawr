let currentSlide = 0;
let slides;

document.addEventListener("DOMContentLoaded", function () {
  slides = document.querySelectorAll(".slide");
  showSlide(currentSlide);
});

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "flex";
      slide.style.opacity = "1";
    } else {
      slide.style.display = "none";
      slide.style.opacity = "0";
    }
  });
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
}
