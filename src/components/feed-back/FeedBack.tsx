import React, { useState, useRef, useEffect } from "react";
import "./feedBack.scss";
import fiver from "../../assets/feedBack/fiver.png";
import upWork from "../../assets/feedBack/upwork.png";

const FeedBack: React.FC = () => {
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
			<div className="feedBack">
				<h2 className="feedBack_header2">My rewies from customers</h2>
				<div className="feedBack_item">
					<img src={upWork} alt="client feedback" />
					<p>
						Visit my{" "}
						<a href="https://www.upwork.com/freelancers/~0150a3d79482a90183">
							UpWork
						</a>
					</p>
				</div>
				<div className="feedBack_item">
					<img src={fiver} alt="client feedback" />
					<p>
						Visit my{" "}
						<a href="https://www.fiverr.com/nikitkaaa33?up_rollout=true">
							Fiver
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default FeedBack;
