export class NoiseGenerator {
    phase: number;
    offset: number;
    frequency: number;
    amplitude: number;
  
    constructor(options: { phase?: number; offset?: number; frequency?: number; amplitude?: number } = {}) {
      this.phase = options.phase || 0;
      this.offset = options.offset || 0;
      this.frequency = options.frequency || 0.001;
      this.amplitude = options.amplitude || 1;
    }
  
    update(): number {
      this.phase += this.frequency;
      return this.offset + Math.sin(this.phase) * this.amplitude;
    }
  }
  
  class Node {
    x: number = 0;
    y: number = 0;
    vx: number = 0;
    vy: number = 0;
  }
  
  class Line {
    spring: number;
    friction: number;
    nodes: Node[];
  
    constructor(options: { spring: number }) {
      this.spring = options.spring + 0.1 * Math.random() - 0.05;
      this.friction = CONFIG.friction + 0.01 * Math.random() - 0.005;
      this.nodes = Array(CONFIG.size).fill(null).map(() => {
        const node = new Node();
        node.x = mousePos.x;
        node.y = mousePos.y;
        return node;
      });
    }
  
    update() {
      let spring = this.spring;
      let node = this.nodes[0];
  
      node.vx += (mousePos.x - node.x) * spring;
      node.vy += (mousePos.y - node.y) * spring;
  
      for (let i = 0; i < this.nodes.length; i++) {
        node = this.nodes[i];
  
        if (i > 0) {
          const prev = this.nodes[i - 1];
          node.vx += (prev.x - node.x) * spring;
          node.vy += (prev.y - node.y) * spring;
          node.vx += prev.vx * CONFIG.dampening;
          node.vy += prev.vy * CONFIG.dampening;
        }
  
        node.vx *= this.friction;
        node.vy *= this.friction;
        node.x += node.vx;
        node.y += node.vy;
  
        spring *= CONFIG.tension;
      }
    }
  
    draw(ctx: CanvasRenderingContext2D) {
      let x = this.nodes[0].x, 
          y = this.nodes[0].y;
  
      ctx.beginPath();
      ctx.moveTo(x, y);
  
      for (let i = 1, n = this.nodes.length - 2; i < n; i++) {
        const a = this.nodes[i];
        const b = this.nodes[i + 1];
        x = (a.x + b.x) * 0.5;
        y = (a.y + b.y) * 0.5;
        ctx.quadraticCurveTo(a.x, a.y, x, y);
      }
  
      const a = this.nodes[this.nodes.length - 2];
      const b = this.nodes[this.nodes.length - 1];
      ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);
      ctx.stroke();
      ctx.closePath();
    }
  }
  
  const CONFIG = {
    debug: true,
    friction: 0.5,
    trails: 60, // Reduced number of trails
    size: 40, // Shorter trail length
    dampening: 0.025,
    tension: 0.99,
  };
  
  const mousePos = { x: 0, y: 0 };
  let lines: Line[] = [];
  let noise: NoiseGenerator;
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let isRunning = false;
  let frameCount = 1;
  
  function initLines() {
    lines = [];
    for (let i = 0; i < CONFIG.trails; i++) {
      lines.push(new Line({ spring: 0.45 + (i / CONFIG.trails) * 0.025 }));
    }
  }
  
  function onMouseMove(e: MouseEvent | TouchEvent) {
    if ('touches' in e) {
      mousePos.x = e.touches[0].pageX;
      mousePos.y = e.touches[0].pageY;
    } else {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    }
    
    e.preventDefault();
  }
  
  function onTouchStart(e: TouchEvent) {
    if (e.touches.length === 1) {
      mousePos.x = e.touches[0].pageX;
      mousePos.y = e.touches[0].pageY;
    }
  }
  
  function resizeCanvas() {
    if (canvas) {
      canvas.width = window.innerWidth - 20;
      canvas.height = window.innerHeight;
    }
  }
  
  function render() {
    if (!isRunning || !ctx) return;
  
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.95)';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = 'lighter';
    ctx.strokeStyle = `hsla(${Math.round(noise.update())},90%,50%,0.4)`;
    ctx.lineWidth = 2;
  
    for (const line of lines) {
      line.update();
      line.draw(ctx);
    }
  
    frameCount++;
    requestAnimationFrame(render);
  }
  
  export function renderCanvas() {
    canvas = document.getElementById('canvas') as HTMLCanvasElement;
    if (!canvas) return;
  
    ctx = canvas.getContext('2d')!;
    isRunning = true;
    frameCount = 1;
  
    noise = new NoiseGenerator({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });
  
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchstart', onMouseMove);
    document.body.addEventListener('orientationchange', resizeCanvas);
    window.addEventListener('resize', resizeCanvas);
    
    window.addEventListener('focus', () => {
      if (!isRunning) {
        isRunning = true;
        render();
      }
    });
  
    window.addEventListener('blur', () => {
      isRunning = false;
    });
  
    initLines();
    resizeCanvas();
    render();
  }