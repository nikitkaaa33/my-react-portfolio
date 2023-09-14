import React, { useEffect, useRef } from "react";
import "./particles.scss";

const Particles: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas: any = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		let particles: any[] = [];
		let particleCount = 2;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		window.addEventListener("resize", () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		});

		class Particle {
			x: number;
			y: number;
			size: number;
			weight: number;
			directionX: number;
			constructor(mouseX: number, mouseY: number) {
				this.x = mouseX;
				this.y = mouseY;
				this.size = Math.random() * 5 + 1;
				this.weight = Math.random() * 2 - 0.5;
				this.directionX = -Math.random() * 4;
			}

			update() {
				this.size -= 0.05;
				this.x += this.directionX;
				this.y += this.weight;
				this.weight += 0.2;

				if (this.size < 0) {
					this.x = mouseX + (Math.random() * 20 - 10);
					this.y = mouseY + (Math.random() * 20 - 10);
					this.size = Math.random() * 5 + 1;
					this.weight = Math.random() * 2 - 0.5;
					this.directionX = -Math.random() * 4;
				}
			}

			draw() {
				ctx!.beginPath();
				ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
				ctx!.fillStyle = "#8C5523";
				ctx!.fill();
			}
		}

		let mouseX = canvas.width / 2;
		let mouseY = canvas.height / 2;

		canvas.addEventListener("mousemove", (event: any) => {
			mouseX = event.x;
			mouseY = event.y;
			for (let i = 0; i < particleCount; i++) {
				particles.push(new Particle(mouseX, mouseY));
			}
		});

		function animate() {
			ctx!.clearRect(0, 0, canvas.width, canvas.height);

			for (let i = 0; i < particles.length; i++) {
				particles[i].update();
				particles[i].draw();

				if (particles[i].size <= 0.2) {
					particles.splice(i, 1);
					i--;
				}
			}

			requestAnimationFrame(animate);
		}

		animate();
	}, []);

	return <canvas ref={canvasRef}></canvas>;
};

export default Particles;
