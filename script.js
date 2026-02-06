// COUNTDOWN
const countdownEl = document.getElementById("countdown");
const heart = document.getElementById("heart");

// Valentine’s Day (change year if needed)
const target = new Date(2026, 1, 14, 0, 0, 0).getTime();

function updateCountdown() {
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    countdownEl.innerText = "❤️ It’s time ❤️";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  countdownEl.innerText = `${d}d ${h}h ${m}m ${s}s`;

  if (diff < 86400000) heart.style.animationDuration = "0.6s";
  else if (diff < 259200000) heart.style.animationDuration = "0.9s";
  else heart.style.animationDuration = "1.2s";
}

setInterval(updateCountdown, 1000);
updateCountdown();
// ===== DATE BASED UNLOCK LOGIC =====

// change year only if needed
const unlockSchedule = {
  1: new Date(2026, 1, 7),   // Rose Day
  2: new Date(2026, 1, 8),
  3: new Date(2026, 1, 9),
  4: new Date(2026, 1, 10),
  5: new Date(2026, 1, 11),
  6: new Date(2026, 1, 12),
  7: new Date(2026, 1, 14)  // Valentine's Day
};

const today = new Date();
today.setHours(0, 0, 0, 0);

document.querySelectorAll(".door").forEach(door => {
  const day = door.dataset.day;
  const unlockDate = unlockSchedule[day];

  if (unlockDate && today >= unlockDate) {
    door.classList.remove("locked");
    door.classList.add("unlocked");
  } else {
    door.classList.add("locked");
    door.removeAttribute("href"); // prevents clicking
  }
});

// STARS BACKGROUND
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

const stars = Array.from({ length: 120 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.5,
  s: Math.random() * 0.3 + 0.1
}));

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,255,255,0.8)";

  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();

    star.y += star.s;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(drawStars);
}

drawStars();
