let currentSlide = 0;
let slides;

document.addEventListener("DOMContentLoaded", function () {
  slides = document.querySelectorAll(".slide");

  // Hide everything except intro
  document.getElementById("surprise").style.display = "none";
  slides.forEach(slide => slide.style.display = "none");
});

function showSurprise() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("surprise").style.display = "flex";

  setTimeout(() => {
    document.getElementById("surprise").style.display = "none";
    currentSlide = 0;
    showSlide(currentSlide);
  }, 3000); // 3 seconds birthday screen
}

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? "flex" : "none";
  });
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
}
