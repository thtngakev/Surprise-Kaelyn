const button = document.getElementById('yesBtn');
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
const yaySound = document.getElementById('yaySound');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

button.addEventListener('click', () => {
  button.disabled = true;
  yaySound.currentTime = 0;
  yaySound.play();

  // Confetti
  for (let i = 0; i < 100; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 6 + 4,
      speed: Math.random() * 3 + 2,
      color: ['#ff66c4', '#ffe347', '#66ccff'][Math.floor(Math.random() * 3)]
    });
  }

  // Hearts
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }

  setTimeout(() => {
    window.location.href = 'page2.html';
  }, 2500);
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c, i) => {
    ctx.fillStyle = c.color;
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
    ctx.fill();
    c.y += c.speed;
    if (c.y > canvas.height) confetti.splice(i, 1);
  });
  requestAnimationFrame(draw);
}

draw();