import React, { useRef, useEffect } from "react";
import "./background.scss";

const InteractiveBackground: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (!canvasRef.current) return;

		const canvas = canvasRef.current;
		const ctx: any = canvas.getContext("2d");
		if (!ctx) return;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		let particlesArray: Particle[] = [];

		class Particle {
			x: number;
			y: number;
			size: number;
			weight: number;
			directionX: number;

			constructor(x: number, y: number, size: number) {
				this.x = x;
				this.y = y;
				this.size = size;
				this.weight = Math.random() * 2 - 0.5;
				this.directionX = Math.random() * 2 - 1;
			}

			update() {
				this.size -= 0.05;
				if (this.size < 0) this.size = 0;
				this.y += this.weight;
				this.weight += 0.2;

				if (this.y > canvas.height - this.size) {
					this.weight *= -1;
				}
			}

			draw() {
				ctx.fillStyle = "black";
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
				ctx.closePath();
				ctx.fill();
			}
		}

		function init() {
			particlesArray = [];
			for (let i = 0; i < 100; i++) {
				let x = Math.random() * canvas.width;
				let y = Math.random() * canvas.height;
				let size = Math.random() * 15 + 1;
				particlesArray.push(new Particle(x, y, size));
			}
		}

		function animate() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			for (let i = 0; i < particlesArray.length; i++) {
				particlesArray[i].update();
				particlesArray[i].draw();

				for (let j = i; j < particlesArray.length; j++) {
					const dx = particlesArray[i].x - particlesArray[j].x;
					const dy = particlesArray[i].y - particlesArray[j].y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < 100) {
						ctx.strokeStyle = "white";
						ctx.lineWidth = 0.5;
						ctx.beginPath();
						ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
						ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
						ctx.stroke();
					}
				}
			}
			requestAnimationFrame(animate);
		}

		init();
		animate();
	}, []);

	return <canvas ref={canvasRef}></canvas>;
};

export default InteractiveBackground;
