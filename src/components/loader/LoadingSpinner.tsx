import React from "react";
import "./loadingPage.scss";

const LoadingSpinner: React.FC = () => (
	<div className="loader">
		<div className="loader-inner">
			<div className="loader-line-wrap">
				<div className="loader-line"></div>
			</div>
			<div className="loader-line-wrap">
				<div className="loader-line"></div>
			</div>
			<div className="loader-line-wrap">
				<div className="loader-line"></div>
			</div>
			<div className="loader-line-wrap">
				<div className="loader-line"></div>
			</div>
			<div className="loader-line-wrap">
				<div className="loader-line"></div>
			</div>
		</div>
	</div>
);

export default LoadingSpinner;
