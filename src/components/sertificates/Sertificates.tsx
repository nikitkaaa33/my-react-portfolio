import React, { useState, useEffect, useRef } from "react";
import { cards, ISertificates } from "../../data/data";
import "./sertificates.scss";

const CardGrid: React.FC = () => {
	const [selectedCard, setSelectedCard] = useState<ISertificates | null>(
		null
	);
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

	const handleCardClick = (card: ISertificates) => {
		setSelectedCard(card);
	};

	const handleCloseModal = () => {
		setSelectedCard(null);
	};

	return (
		<div className={`fade-in ${isVisible ? "visible" : ""}`} ref={domRef}>
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
						<div
							className="modal-overlay"
							onClick={handleCloseModal}
						>
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
					<div className="codewars">
						<h2>My codewars badge:</h2>
						<img src="https://www.codewars.com/users/nikitkaaa33/badges/large"></img>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardGrid;
