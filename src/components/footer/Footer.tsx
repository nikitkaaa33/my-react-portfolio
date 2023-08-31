import React from "react";
import "./footer.scss";

const Footer = () => {
	return (
		<div className="footer">
			<p>
				&copy; {new Date().getFullYear()} Your Name. All rights
				reserved.
			</p>
			<div>
				<a
					href="https://github.com/yourusername"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</a>
				<a
					href="https://linkedin.com/in/yourusername"
					target="_blank"
					rel="noopener noreferrer"
				>
					LinkedIn
				</a>
				<a href="mailto:youremail@example.com">Email</a>
			</div>
		</div>
	);
};

export default Footer;