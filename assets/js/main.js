document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Smooth scroll (optional enhancement)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
});

    // Add your image paths here
    const images = [
        "assets/IMG/Housecleaning.png",
        "assets/IMG/Housecleaning.png",
        "assets/IMG/Taski.png"
    ];

    let index = 0;
    const sliderImage = document.getElementById("slider-image");

    setInterval(() => {
        index = (index + 1) % images.length;
        sliderImage.style.opacity = 0;   // fade-out
        setTimeout(() => {
            sliderImage.src = images[index];
            sliderImage.style.opacity = 1;  // fade-in
        }, 300);
    }, 3000); // 1 second
