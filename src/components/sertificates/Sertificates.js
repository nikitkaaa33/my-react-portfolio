import React, { useState } from "react";
import "./sertificates.scss";

import jsReact from "../../assets/certifecates/js+react.png";
import node from "../../assets/certifecates/node.png";
import webDev from "../../assets/certifecates/webdev.jpg";
import ts from "../../assets/certifecates/ts.png";
import genesis from "../../assets/certifecates/genesis.png";
import prmWeb from "../../assets/certifecates/prmWeb.png";

const cards = [
	{
		name: "Card 1",
		image: jsReact,
		description: "Description for Card 1",
	},
	{
		name: "Card 2",
		image: node,
		description: "Description for Card 2",
	},
	{
		name: "Card 3",
		image: webDev,
		description: "Description for Card 3",
	},
	{
		name: "Card 4",
		image: ts,
		description: "Description for Card 4",
	},
	{
		name: "Card 5",
		image: genesis,
		description: "Description for Card 5",
	},
	{
		name: "Card 6",
		image: prmWeb,
		description: "Description for Card 6",
	},
];

const CardGrid = () => {
	const [selectedCard, setSelectedCard] = useState(null);

	const handleCardClick = (card) => {
		setSelectedCard(card);
	};

	const handleCloseModal = () => {
		setSelectedCard(null);
	};

	return (
		<div className="certifications">
			<h2 className="sertification-header">My certifications</h2>
			<div className="card-grid">
				{cards.map((card, index) => (
					<div
						key={index}
						className="card"
						onClick={() => handleCardClick(card)}
					>
						<img
							src={card.image}
							alt={card.name}
							className="card-image"
						/>
						<div className="card-name">{card.name}</div>
						<div className="card-description">
							{card.description}
						</div>
					</div>
				))}

				{selectedCard && (
					<div className="modal-overlay" onClick={handleCloseModal}>
						<div className="modal">
							<img
								src={selectedCard.image}
								alt={selectedCard.name}
								className="modal-image"
							/>
							<button
								onClick={handleCloseModal}
								className="modal-close"
							>
								X
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default CardGrid;
