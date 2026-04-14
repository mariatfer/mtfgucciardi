import type { Particle } from "@/interfaces/common";
import { useColor } from "@/composables/useColor";

export const useCursorParticles = (canvas: Ref<HTMLCanvasElement | null>) => {
  let ctx: CanvasRenderingContext2D | null = null;
  let particles: Particle[] = [];
  let animationFrame: number;

  const { getColor } = useColor();

  const PARTICLE_LIFE = 40;

  const createParticle = (x: number, y: number): Particle => ({
    x,
    y,
    size: Math.random() * 1 + 0.3,
    speedX: (Math.random() - 0.5) * 2,
    speedY: (Math.random() - 0.5) * 2,
    life: PARTICLE_LIFE,
  });

  const handleMouseMove = (e: MouseEvent) => {
    for (let i = 0; i < 3; i++) {
      particles.push(createParticle(e.clientX, e.clientY));
    }
  };

  const resize = () => {
    if (!canvas.value || !ctx) return;

    const dpr = window.devicePixelRatio || 1;

    canvas.value.width = window.innerWidth * dpr;
    canvas.value.height = window.innerHeight * dpr;
    canvas.value.style.width = `${window.innerWidth}px`;
    canvas.value.style.height = `${window.innerHeight}px`;

    ctx.scale(dpr, dpr);
  };

  const animate = () => {
    if (!ctx || !canvas.value) return;

    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

    const primary = getColor("--c-primary", true);

    particles = particles.filter((p) => p.life > 0);

    for (const p of particles) {
      p.x += p.speedX;
      p.y += p.speedY;
      p.life--;

      const alpha = p.life / PARTICLE_LIFE;

      ctx.fillStyle = `rgba(${primary}, ${alpha})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = `rgba(${primary}, 0.8)`;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }

    animationFrame = requestAnimationFrame(animate);
  };

  onMounted(() => {
    if (!canvas.value) return;

    ctx = canvas.value.getContext("2d");
    if (!ctx) return;

    resize();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    animate();
  });

  onBeforeUnmount(() => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("resize", resize);
    cancelAnimationFrame(animationFrame);
  });
};
