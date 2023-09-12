import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
	position: fixed;
	right: 0;
	bottom: 150px;
	margin-right: 50px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	width: 10%;
	height: 100px;
	z-index: 10;
`;

const Image = styled.img<{ scale: number; translateY: number }>`
	transform: scale(${(props) => props.scale})
		translateY(${(props) => props.translateY}px);
	transition: transform 0.5s;
`;

const PulsatingImages: React.FC<{ imgSrc1: string; imgSrc2: string }> = ({
	imgSrc1,
	imgSrc2,
}) => {
	const [scale1, setScale1] = useState(1);
	const [scale2, setScale2] = useState(1);
	const [translateY1, setTranslateY1] = useState(0);
	const [translateY2, setTranslateY2] = useState(0);

	useEffect(() => {
		const pulse = setInterval(() => {
			setScale1((scale1) => (scale1 === 1 ? 1.1 : 1));
			setScale2((scale2) => (scale2 === 1 ? 1.1 : 1));
		}, 1000);

		const bounce = setInterval(() => {
			setTranslateY1(Math.random() > 0.5 ? -10 : 0);
			setTranslateY2(Math.random() > 0.5 ? -10 : 0);
		}, 2000);

		return () => {
			clearInterval(pulse);
			clearInterval(bounce);
		};
	}, []);

	return (
		<Container>
			<a href="">
				<Image src={imgSrc1} scale={scale1} translateY={translateY1} />
			</a>
			<Image src={imgSrc2} scale={scale2} translateY={translateY2} />
		</Container>
	);
};

export default PulsatingImages;
