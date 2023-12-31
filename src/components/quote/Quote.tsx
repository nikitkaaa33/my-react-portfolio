import React, { useState, useEffect } from "react";
import { quotes } from "../../data/data";
import "./quote.scss";

const Quote: React.FC = () => {
	const [quoteIndex, setQuoteIndex] = useState<number>(0);
	const [fade, setFade] = useState<boolean>(true);

	useEffect(() => {
		const changeQuote = () => {
			setFade(false);
			setTimeout(() => {
				setQuoteIndex(
					(prevIndex: number) => (prevIndex + 1) % quotes.length
				);
				setFade(true);
			}, 500);
		};

		const interval = setInterval(changeQuote, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="quote-container">
			<div className={`quote-text ${fade ? "fade-in2" : "fade-out2"}`}>
				"{quotes[quoteIndex].text}" - {quotes[quoteIndex].author}
			</div>
		</div>
	);
};

export default Quote;
