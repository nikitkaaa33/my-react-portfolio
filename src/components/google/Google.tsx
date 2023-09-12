/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useRef, useEffect } from "react";
import "./google.scss";
import gitHub from "../../assets/social/gitHub.svg";
import linkedIn from "../../assets/social/linkedIn.svg";
import telegram from "../../assets/social/telegram.svg";
import mail from "../../assets/social/mail.svg";
import mobile from "../../assets/social/phone.svg";

const Footer: React.FC = () => {
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
			<div className="google">
				<h2 className="google-header">Contact with me</h2>
				<iframe
					src="https://docs.google.com/forms/d/e/1FAIpQLSfzc7uboCQRbqV89esJ_hLqLeO7Urhq5ncQHYOo8xFOqA-INw/viewform?embedded=true"
					width="800"
					height="auto"
					frameBorder="0"
				>
					Загрузка…
				</iframe>

				<div className="google-link">
					<a className="google-link-wrapper" href="">
						<img src={gitHub} alt="Github" />
						<p className="google-link-descr">My GitHub</p>
					</a>
					<a className="google-link-wrapper" href="">
						<img src={linkedIn} alt="linkedin" />
						<p className="google-link-descr">My LinkedIn</p>
					</a>
					<a
						className="google-link-wrapper"
						href="mailto:nikita.vaskovskyit@gmail.com"
					>
						<img src={mail} alt="e-mail" />
						<p className="google-link-descr">
							nikita.vaskovskyit@gmail.com
						</p>
					</a>
					<a className="google-link-wrapper" href="">
						<img src={telegram} alt="telegram" />
						<p className="google-link-descr">My Telegram</p>
					</a>
					<a className="google-link-wrapper" href="tel:+380955902087">
						<img src={mobile} alt="My telephone number" />
						<p className="google-link-descr">+38(095)590-20-87</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
