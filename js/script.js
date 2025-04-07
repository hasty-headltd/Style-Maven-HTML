// Swiper for .mySwiper (example slider)
let mainSwiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  breakpoints: {
    375: {
      spaceBetween: 15,
      slidesPerView: 1,

    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});

// Countdown Timer
const countdownDate = new Date("May 25, 2025 00:00:00").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    document.querySelector(".timer-group").innerHTML = "<h4>Time's up!</h4>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const timeBoxes = document.querySelectorAll(".time-value");
  const timeLabels = document.querySelectorAll(".time-label");

  timeBoxes[0].textContent = days;
  timeLabels[0].textContent = "Days";

  timeBoxes[1].textContent = hours;
  timeLabels[1].textContent = "Hours";

  timeBoxes[2].textContent = minutes;
  timeLabels[2].textContent = "Minutes";

  timeBoxes[3].textContent = seconds;
  timeLabels[3].textContent = "Seconds";
};

setInterval(updateCountdown, 1000);

// Swiper for logo slider
let logoSwiper = new Swiper(".logoSwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 3000,
  grabCursor: true,
  breakpoints: {
    320: { slidesPerView:3 },
    576: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    992: { slidesPerView: 5 },
  }
});




function changeImage(el) {
  document.getElementById('mainImage').src = el.src;
  document.querySelectorAll('.thumbnail').forEach(img => img.classList.remove('active'));
  el.classList.add('active');
}

function selectColor(el) {
  document.querySelectorAll('.color-dot').forEach(dot => dot.classList.remove('active'));
  el.classList.add('active');
}

function selectSize(el) {
  document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('btn-dark'));
  document.querySelectorAll('.size-btn').forEach(btn => btn.classList.add('btn-outline-secondary'));
  el.classList.remove('btn-outline-secondary');
  el.classList.add('btn-dark');
}

function updateQuantity(amount) {
  const qtyInput = document.getElementById('quantity');
  let current = parseInt(qtyInput.value);
  current = isNaN(current) ? 1 : current;
  current += amount;
  if (current < 1) current = 1;
  qtyInput.value = current;
}
