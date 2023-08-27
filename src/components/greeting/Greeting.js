import "./greeting.scss";
import me from "../../assets/greeting-me.jpg";

const Greeting = () => {
	return (
		<div className="greeting">
			<div className="greeting_container">
				<h1 className="greeting_header">
					React Frontend Developer with understanding Node.js
				</h1>
				<div className="greeting_head">
					<p>About</p>
				</div>
				<div className="greeting_image">
					<img src={me} alt="Me" />
				</div>
				<div className="greeting_descr-wrapper">
					<p>
						I'm Nikita Vaskovskyi, a Frontend Developer with
						expertise in React and Node.js. I've spent 1,5 years
						building responsive web applications, mastering the
						React ecosystem, and developing backend solutions using
						Node.js and Express.js. I prioritize clean, maintainable
						code and thrive in collaborative environments. Eager to
						bring innovative solutions to the table.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Greeting;
