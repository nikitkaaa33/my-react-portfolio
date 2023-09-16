import React from "react";
import "./header.scss";
import email from "../../assets/social/mail.svg";
import telegram from "../../assets/social/telegram.svg";
import phone from "../../assets/social/phone.svg";

const Header: React.FC = () => {
	return (
		<div className="header">
			<div className="header__logo">Nikita Vaskovskyi. Portfolio</div>
			<nav className="header__nav">
				<a
					className="header__nav-item"
					href="mailto:nikita.vaskovskyit@gmail.com"
					target="_blank"
				>
					<img src={email} alt="email" />
					<p>nikita.vaskovskyit@gmail.com</p>
				</a>
				<a
					className="header__nav-item"
					href="https://t.me/nikitkaaa33"
					target="_blank"
				>
					<img src={telegram} alt="telegram" />
					<p>Telegram</p>
				</a>
				<div className="header__nav-item">
					<img src={phone} alt="" />
					<p>+38(095)590-20-87</p>
				</div>
			</nav>
		</div>
	);
};

export default Header;
