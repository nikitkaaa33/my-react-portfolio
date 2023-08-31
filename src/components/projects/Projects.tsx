import React from "react";
import "./projects.scss";
import { cardsData, ICardsData } from "../../data/data";

const Card = ({ image, label, text, link }: ICardsData) => (
	<a href={link} className="card" target="_blank" rel="noopener noreferrer">
		<img src={image} alt={label} className="card-image" />
		<span className="card-label">{label}</span>
		<span className="card-text">{text}</span>
	</a>
);

const CardComponent: React.FC = () => {
	return (
		<div className="card-container">
			<div className="card-header">
				<h2>Projects</h2>
			</div>
			{cardsData.map((card, index) => (
				<Card key={index} {...card} />
			))}
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
