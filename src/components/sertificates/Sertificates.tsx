import React, { useState } from "react";
import { cards, ISertificates } from "../../data/data";
import "./sertificates.scss";

const CardGrid: React.FC = () => {
	const [selectedCard, setSelectedCard] = useState<ISertificates | null>(
		null
	);

	const handleCardClick = (card: ISertificates) => {
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
