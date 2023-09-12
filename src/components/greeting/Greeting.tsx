import "./greeting.scss";
import me from "../../assets/greeting-me.jpg";
import React from "react";

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
							I'm Nikita Vaskovskyi, a Frontend Developer from
							Kyiv,Ukraine with expertise in React and Node.js.
							I've spent 1,5 years building responsive web
							applications, mastering the React ecosystem, and
							developing backend solutions using Node.js and
							Express.js. I prioritize clean, maintainable code
							and thrive in collaborative environments. Eager to
							bring innovative solutions to the table.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Greeting;
