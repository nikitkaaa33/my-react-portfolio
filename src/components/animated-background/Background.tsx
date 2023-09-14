import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	z-index: 0;
	background: linear-gradient(135deg, #e6f9ff 0%, #d1efff 100%);
	--mouseX: 50%;
	--mouseY: 50%;

	&:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: radial-gradient(
			circle at var(--mouseX),
			#e6f9ff,
			transparent
		);
		mix-blend-mode: screen;
		pointer-events: none;
	}
`;

const GradientBackground: React.FC = () => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = ref.current;

		const handleMouseMove = (e: MouseEvent) => {
			if (container) {
				const rect = container.getBoundingClientRect();
				const offsetX = (e.clientX - rect.left) / rect.width;
				const offsetY = (e.clientY - rect.top) / rect.height;

				container.style.setProperty("--mouseX", `${offsetX * 100}%`);
				container.style.setProperty("--mouseY", `${offsetY * 100}%`);
			}
		};

		if (container) {
			container.addEventListener("mousemove", handleMouseMove);
		}

		return () => {
			if (container) {
				container.removeEventListener("mousemove", handleMouseMove);
			}
		};
	}, []);

	return <Background ref={ref} />;
};

export default GradientBackground;
