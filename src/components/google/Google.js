import left from "../../assets/skillsBG.png";
import "./google.scss";

const Footer = () => {
	return (
		<div className="google-form">
			<h2 className="google-header">Contact with me</h2>
			<iframe
				src="https://docs.google.com/forms/d/e/1FAIpQLSfzc7uboCQRbqV89esJ_hLqLeO7Urhq5ncQHYOo8xFOqA-INw/viewform?embedded=true"
				width="800"
				height="700"
				frameborder="0"
				marginheight="0"
				marginwidth="0"
			>
				Загрузка…
			</iframe>
			<img src={left} alt="effect" />
		</div>
	);
};

export default Footer;
