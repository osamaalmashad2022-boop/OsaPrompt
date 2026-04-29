const canvas = document.getElementById('neon-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
const particleCount = isMobile ? 50 : 120;
const mouse = { x: -1000, y: -1000 };

function getTheme() {
    return document.body.getAttribute('data-theme') || 'dark';
}

function getThemeColors() {
    const isDark = getTheme() === 'dark';
    return {
        colors: isDark ? ['#00f3ff', '#bc13fe', '#00ff88'] : ['#0077aa', '#7700b3', '#00aa55'],
        trailBg: isDark ? 'rgba(5, 5, 16, 0.15)' : 'rgba(240, 242, 255, 0.2)',
        lineColor: isDark ? [0, 243, 255] : [0, 119, 170],
        glowBlur: isDark ? 12 : 6
    };
}

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
    }
}, { passive: true });

window.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
    }
}, { passive: true });

window.addEventListener('touchend', () => {
    mouse.x = -1000;
    mouse.y = -1000;
});

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        const tc = getThemeColors();
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 2 + 0.8;
        this.color = tc.colors[Math.floor(Math.random() * tc.colors.length)];
        this.angle = Math.random() * Math.PI * 2;
        this.orbitRadius = Math.random() * 100 + 50;
        this.orbitSpeed = (Math.random() * 0.04) + 0.015;
    }
    update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 220;

        if (distance < interactionRadius) {
            let currentAngle = Math.atan2(this.y - mouse.y, this.x - mouse.x);
            currentAngle += this.orbitSpeed;
            const targetX = mouse.x + Math.cos(currentAngle) * this.orbitRadius;
            const targetY = mouse.y + Math.sin(currentAngle) * this.orbitRadius;
            this.x += (targetX - this.x) * 0.08;
            this.y += (targetY - this.y) * 0.08;
        } else {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }
    }
    draw() {
        const tc = getThemeColors();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = tc.glowBlur;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
    }
}

function init() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    const tc = getThemeColors();
    ctx.fillStyle = tc.trailBg;
    ctx.fillRect(0, 0, width, height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });
    connectParticles();
    requestAnimationFrame(animate);
}

function connectParticles() {
    const tc = getThemeColors();
    const maxDist = 90;
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < maxDist) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(${tc.lineColor[0]},${tc.lineColor[1]},${tc.lineColor[2]},${(1 - dist / maxDist) * 0.4})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

// Update particle colors on theme change
window.updateParticleTheme = function() {
    const tc = getThemeColors();
    // Clear canvas fully to remove old trail color
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
        p.color = tc.colors[Math.floor(Math.random() * tc.colors.length)];
    });
};

init();
animate();
