import React, { useRef, useEffect, useState } from "react";
import { cardsData, ICardsData } from "../../data/data";
import "./projects.scss";

const Card = ({ image, label, text, link }: ICardsData) => (
	<a href={link} className="card" target="_blank" rel="noopener noreferrer">
		<img src={image} alt={label} className="card-image" />
		<span className="card-label">{label}</span>
		<span className="card-text">{text}</span>
	</a>
);

const CardComponent: React.FC = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const domRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => setIsVisible(entry.isIntersecting));
		});

		if (domRef.current) {
			observer.observe(domRef.current);
		}

		return () => {
			if (domRef.current) {
				observer.unobserve(domRef.current);
			}
		};
	}, []);
	return (
		<div className={`fade-in ${isVisible ? "visible" : ""}`} ref={domRef}>
			<div className="card-container">
				<div className="card-header">
					<h2>Projects</h2>
				</div>
				{cardsData.map((card, index) => (
					<Card key={index} {...card} />
				))}
			</div>
			<p className="card-par">
				For more visit
				<br /> my{" "}
				<a href="https://github.com/nikitkaaa33" target="_blank">
					GitHub
				</a>
			</p>
		</div>
	);
};

export default CardComponent;
