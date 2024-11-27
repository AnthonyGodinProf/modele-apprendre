const canvas = document.getElementById("animation");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const circles = [
  { x: 300, y: 200, r: 10, color: "#007BFF", vx: 2, vy: 1 },
  { x: 600, y: 300, r: 10, color: "#FF5722", vx: -2, vy: -1 },
  { x: 900, y: 400, r: 10, color: "#4CAF50", vx: 1.5, vy: -2 },
];

function drawCircle(circle) {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
  ctx.fillStyle = circle.color;
  ctx.fill();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circles.forEach((circle) => {
    circle.x += circle.vx;
    circle.y += circle.vy;

    if (circle.x + circle.r > canvas.width || circle.x - circle.r < 0) {
      circle.vx *= -1;
    }
    if (circle.y + circle.r > canvas.height || circle.y - circle.r < 0) {
      circle.vy *= -1;
    }

    drawCircle(circle);
  });
  requestAnimationFrame(update);
}

update();
