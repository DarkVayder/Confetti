const colors = [
    "#FFC0CB",
    "#FFA07A",
    "#FFD700",
    "#ADFF2F",
    "#20B2AA",
    "#1E90FF",
    "#FFFACD",
    "#8A2BE2",
    "#FF69B4",
  ];
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  const button = document.getElementById("confettiButton");
  function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  function createConfetti() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 10 + 5;
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
  }
  function popConfetti() {
    for (let i = 0; i < 100; i++) {
      createConfetti();
    }
  }
  window.addEventListener("resize", setCanvasSize);
  button.addEventListener("click", popConfetti);
  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 50; i++) {
      createConfetti();
    }
    const particles = document.querySelectorAll("canvas");
    particles.forEach((particle) => {
      particle.style.transform = `translateY(${particle.offsetTop - 1}px)`;
    });
    requestAnimationFrame(loop);
  }
  setCanvasSize();
  loop();