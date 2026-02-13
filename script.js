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

.fade-in {
  animation: fadeIn 1s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.typing {
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid white;
  width: 0;
  animation: typing 3s steps(30, end) forwards, blink 0.7s infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink {
  50% { border-color: transparent }
}
