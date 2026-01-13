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


const slidesData = [
    {
      img: "assets/img/Housecleaning.png",
      name: "House Cleaning Essentials",
      link: "housecleaning.html"
    },
    {
      img: "assets/img/Taski.png",
      name: "TASKI Machines & Accessories",
      link: "taski.html"
    },
    {
      img: "assets/img/Diversey.png",
      name: "Skyspaces Featured Products",
      link: "diversey.html"
    }
  ];

  const track = document.getElementById("track");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  const slideLink = document.getElementById("slideLink");
  const captionLink = document.getElementById("captionLink");
  const captionText = document.getElementById("captionText");

  const dotsWrap = document.getElementById("dots");
  const carousel = document.getElementById("carousel");

  let index = 0;
  let intervalId;

  /* Build slides */
  slidesData.forEach(s => {
    const div = document.createElement("div");
    div.className = "slide";
    div.innerHTML = `<img src="${s.img}" alt="${s.name}">`;
    track.appendChild(div);
  });

  /* Build dots */
  slidesData.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  function updateUI() {
    track.style.transform = `translateX(-${index * 100}%)`;

    captionText.textContent = slidesData[index].name;
    slideLink.href = slidesData[index].link;
    captionLink.href = slidesData[index].link;

    document.querySelectorAll(".dot").forEach(d => d.classList.remove("active"));
    document.querySelectorAll(".dot")[index].classList.add("active");
  }

  function goTo(i) {
    index = (i + slidesData.length) % slidesData.length;
    updateUI();
    resetAutoSlide(); // reset timer on manual click
  }

  prevBtn.addEventListener("click", () => goTo(index - 1));
  nextBtn.addEventListener("click", () => goTo(index + 1));

  /* AUTO SLIDE every 5 seconds */
  function startAutoSlide() {
    intervalId = setInterval(() => {
      goTo(index + 1);
    }, 5000);
  }

  function stopAutoSlide() {
    clearInterval(intervalId);
  }

  function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  /* Pause on hover */
  carousel.addEventListener("mouseenter", stopAutoSlide);
  carousel.addEventListener("mouseleave", startAutoSlide);

  /* Keyboard support */
  document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") goTo(index - 1);
    if (e.key === "ArrowRight") goTo(index + 1);
  });

  /* Preload images */
  slidesData.forEach(s => {
    const img = new Image();
    img.src = s.img;
  });

  updateUI();
  startAutoSlide();







