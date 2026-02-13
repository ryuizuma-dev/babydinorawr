function showSurprise() {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("surprise").classList.remove("hidden");
}

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide++;
  if (currentSlide < slides.length) {
    showSlide(currentSlide);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  showSlide(currentSlide);
});
