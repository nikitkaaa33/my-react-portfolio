import React, { useEffect, useRef } from "react";
interface Point {
	x: number;
	y: number;
}

//dont know how to typified component

const StarBackground = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas: HTMLCanvasElement | any = canvasRef.current;
		const ctx: CanvasRenderingContext2D | any = canvas.getContext("2d");

		let points: Point[] = [];
		const maxDistance = 100;
		const pointCount = 100;

		for (let i = 0; i < pointCount; i++) {
			points.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
			});
		}

		const draw = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			for (let i = 0; i < points.length; i++) {
				ctx.beginPath();
				ctx.arc(points[i].x, points[i].y, 2, 0, 2 * Math.PI);
				ctx.fillStyle = "black";
				ctx.fill();
			}
		};

		const handleMouseMove = (e: React.MouseEvent) => {
			const mouseX = e.clientX;
			const mouseY = e.clientY;

			draw();

			ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
			ctx.lineWidth = 1.5;

			for (let i = 0; i < points.length; i++) {
				const distance = Math.sqrt(
					(mouseX - points[i].x) ** 2 + (mouseY - points[i].y) ** 2
				);
				if (distance < maxDistance) {
					ctx.beginPath();
					ctx.moveTo(mouseX, mouseY);
					ctx.lineTo(points[i].x, points[i].y);
					ctx.stroke();
				}
			}
		};

		canvas.addEventListener("mousemove", handleMouseMove);

		return () => {
			canvas.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "1000px",
				zIndex: 8,
			}}
			width={window.innerWidth}
			height={window.innerHeight}
		></canvas>
	);
};

export default StarBackground;
