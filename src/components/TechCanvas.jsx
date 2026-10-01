import { useEffect, useRef } from 'react';

export default function TechCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const PARTICLE_COUNT = 55;
    const COLORS = ['#6366F1', '#A855F7', '#38BDF8', '#10B981', '#F97316'];

    function rndBetween(a, b) {
      return a + Math.random() * (b - a);
    }
    function rndItem(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = rndBetween(0, W);
        this.y = rndBetween(0, H);
        this.r = rndBetween(1.5, 3.2);
        this.vx = rndBetween(-0.16, 0.16);
        this.vy = rndBetween(-0.16, 0.16);
        this.color = rndItem(COLORS);
        this.alpha = rndBetween(0.2, 0.65);
        this.pulseSpeed = rndBetween(0.008, 0.02);
        this.pulseOffset = rndBetween(0, Math.PI * 2);
        this.type = Math.floor(Math.random() * 3);
      }
      update(t) {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < -10) this.x = W + 10;
        if (this.x > W + 10) this.x = -10;
        if (this.y < -10) this.y = H + 10;
        if (this.y > H + 10) this.y = -10;
        this.currentAlpha =
          this.alpha * (0.5 + 0.5 * Math.sin(t * this.pulseSpeed + this.pulseOffset));
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.currentAlpha;
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        const s = this.r;

        if (this.type === 0) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, s, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.type === 1) {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y - s * 1.3);
          ctx.lineTo(this.x + s * 1.3, this.y);
          ctx.lineTo(this.x, this.y + s * 1.3);
          ctx.lineTo(this.x - s * 1.3, this.y);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(this.x - s, this.y);
          ctx.lineTo(this.x + s, this.y);
          ctx.moveTo(this.x, this.y - s);
          ctx.lineTo(this.x, this.y + s);
          ctx.stroke();
        }
        ctx.restore();
      }
    }

    const particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
    const CONNECT_DIST = 135;

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const opacity = (1 - dist / CONNECT_DIST) * 0.16;
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = a.color;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            if ((i + j) % 3 === 0) {
              ctx.lineTo(a.x, b.y);
            }
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    }

    let animId;
    let t = 0;
    function loop() {
      ctx.clearRect(0, 0, W, H);
      t++;
      drawConnections();
      particles.forEach((p) => {
        p.update(t);
        p.draw();
      });
      animId = requestAnimationFrame(loop);
    }

    loop();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="tech-canvas" aria-hidden="true" />;
}
