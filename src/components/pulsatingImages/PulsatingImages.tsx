import React from "react";
import telegram from "../../assets/social/telegram.svg";
import "./pulsatingImages.scss";

const PulsatingImages: React.FC = () => {
	return (
		<div className="pulsating-images">
			<a href="https://t.me/nikitkaaa33">
				<img src={telegram} alt="telergam" />
				<p>Telegram</p>
			</a>
		</div>
	);
};

export default PulsatingImages;
