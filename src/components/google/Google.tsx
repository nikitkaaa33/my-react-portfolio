/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
// import left from "../../assets/skills.png";
import "./google.scss";

const Footer: React.FC = () => {
	return (
		<div className="google-form">
			<h2 className="google-header">Contact with me</h2>
			<iframe
				src="https://docs.google.com/forms/d/e/1FAIpQLSfzc7uboCQRbqV89esJ_hLqLeO7Urhq5ncQHYOo8xFOqA-INw/viewform?embedded=true"
				width="800"
				height="700"
				frameBorder="0"
			>
				Загрузка…
			</iframe>
			{/* <img src={left} alt="effect" /> */}
		</div>
	);
};

export default Footer;
