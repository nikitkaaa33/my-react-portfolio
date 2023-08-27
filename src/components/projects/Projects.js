import React from "react";
import "./projects.scss";
import Employee from "../../assets/employee.png";
import marvel from "../../assets/marvel1.png";
import heroes from "../../assets/Heroes.png";
import smth from "../../assets/films.png";

const cardsData = [
	{
		image: Employee,
		label: "CRUD",
		text: "Some description for card 1 lorem  ",
		link: "https://example1.com",
	},
	{
		image: marvel,
		label: "Label 2",
		text: "Some description for card 2",
		link: "https://example2.com",
	},
	{
		image: heroes,
		label: "Label 2",
		text: "Some description for card 2",
		link: "https://example2.com",
	},
	{
		image: smth,
		label: "Label 2",
		text: "Some description for card 2",
		link: "https://example2.com",
	},
];

const Card = ({ image, label, text, link }) => (
	<a href={link} className="card" target="_blank" rel="noopener noreferrer">
		<img src={image} alt={label} className="card-image" />
		<span className="card-label">{label}</span>
		<span className="card-text">{text}</span>
	</a>
);

const CardComponent = () => {
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
