import React from "react";
import me from "../../assets/greeting-me.jpg";
import "./greeting.scss";

const Greeting: React.FC = () => {
	return (
		<div className="greeting">
			<div className="greeting_container">
				<h1 className="greeting_header">
					React Frontend Developer with understanding Node.js
				</h1>
				<div className="greeting_head">
					<p>About</p>
				</div>
				<div className="greeting_wrapper-me">
					<div className="greeting_image">
						<img src={me} alt="Me" />
					</div>
					<div className="greeting_descr-wrapper">
						<p>
							I am Nikita Vaskovskyi, a passionate junior React
							developer. My journey into programming began not as
							a primary career, but as a hobby that I have devoted
							a significant amount of time to. Over the years, I
							have grown fond of the art of coding and the
							challenges it presents. My tech stack includes
							React, Redux, Node.js, and TypeScript. While I may
							be a junior in title, my dedication to continuous
							learning and genuine passion for development drive
							me to produce high-quality work. I am always eager
							to collaborate, learn, and push the boundaries of
							what I know.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Greeting;
