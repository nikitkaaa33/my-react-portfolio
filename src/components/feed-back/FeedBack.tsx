import React from "react";
import "./feedBack.scss";
import fiver from "../../assets/feedBack/fiver.png";
import upWork from "../../assets/feedBack/upwork.png";

const FeedBack: React.FC = () => {
	return (
		<div className="feedBack">
			<h2 className="feedBack_header">
				My rewies <br />
				from customers
			</h2>
			<div className="feedBack_item">
				<img src={upWork} alt="" />
				<p>
					Visit my{" "}
					<a href="https://www.upwork.com/freelancers/~0150a3d79482a90183">
						UpWork
					</a>
				</p>
			</div>
			<div className="feedBack_item">
				<img src={fiver} alt="" />
				<p>
					Visit my{" "}
					<a href="https://www.fiverr.com/nikitkaaa33?up_rollout=true">
						Fiver
					</a>
				</p>
			</div>
		</div>
	);
};

export default FeedBack;
