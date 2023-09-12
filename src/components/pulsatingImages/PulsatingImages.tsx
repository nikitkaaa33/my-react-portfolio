import React from "react";
import telegram from "../../assets/social/telegram.svg";
import phone from "../../assets/social/phone.svg";
import "./pulsatingImages.scss";

const PulsatingImages: React.FC = () => {
	return (
		<div className="pulsating-images">
			<a href="">
				<img src={telegram} />
				<p>Telegram</p>
			</a>
			<a href="" className="">
				<img src={phone} />
				<p>Phone</p>
			</a>
		</div>
	);
};

export default PulsatingImages;
