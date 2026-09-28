/*!
 * AkihiroLabs — Cyber Clock — app logic
 * https://github.com/AkihiroZayar/cyber-clock
 */
/* =========================
   CLOCK
========================= */

function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const pad = n => String(n).padStart(2, "0");

    document.getElementById("hours").textContent = pad(hours);
    document.getElementById("minutes").textContent = pad(minutes);
    document.getElementById("seconds").textContent = pad(seconds);

    const date = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    document.getElementById("date").textContent = date;

    updateMessage(hours);
}

function updateMessage(hour) {

    let text;

    if (hour >= 5 && hour < 12) {
        text = "Good morning. Start strong.";
    } 
    else if (hour >= 12 && hour < 18) {
        text = "Keep going. You're not done yet.";
    } 
    else if (hour >= 18 && hour < 23) {
        text = "Evening mode activated.";
    } 
    else {
        text = "The city sleeps. You don't have to.";
    }

    document.getElementById("message").textContent = text;
}

updateClock();
setInterval(updateClock, 1000);


/* =========================
   FOCUS MODE
========================= */

function focusMode() {
    document.body.classList.toggle("focus-mode");
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        document.body.classList.remove("focus-mode");
    }
});


/* =========================
   PARTICLES
========================= */

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particles = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
resize();

class Particle {

    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 2 + .5;

        this.speedX = (Math.random() - .5) * .3;
        this.speedY = (Math.random() - .5) * .3;

        this.alpha = Math.random() * .6 + .2;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;

        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    }

    draw() {
        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = `rgba(0,255,255,${this.alpha})`;
        ctx.fill();
    }
}

for (let i = 0; i < 120; i++) {
    particles.push(new Particle());
}

function animate() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    for (const particle of particles) {
        particle.update();
        particle.draw();
    }

    requestAnimationFrame(animate);
}

animate();
