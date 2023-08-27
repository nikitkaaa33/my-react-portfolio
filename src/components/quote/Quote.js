import React, { useState, useEffect } from "react";
import "./quote.scss";
import gates from "../../assets/quotes/gates.jpg";

const quotes = [
	{
		author: "Bill Gates",
		text: "It's fine to celebrate success, but it is more important to heed the lessons of failure.",
		image: gates,
	},
	{
		author: "Mark Zuckerberg",
		text: "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
		image: gates,
	},
	{
		author: "Steve Jobs",
		text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
		image: gates,
	},
	{
		author: "Grace Hopper",
		text: "The most dangerous phrase in the language is, 'We've always done it this way.'",
		image: gates,
	},
	{
		author: "Linus Torvalds",
		text: "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
		image: gates,
	},
];

const Quote = () => {
	const [quoteIndex, setQuoteIndex] = useState(0);
	const [fade, setFade] = useState(true);

	useEffect(() => {
		const changeQuote = () => {
			setFade(false);
			setTimeout(() => {
				setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
				setFade(true);
			}, 500); // время анимации выцветания
		};

		const interval = setInterval(changeQuote, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="quote-container">
			<img
				src={quotes[quoteIndex].image}
				alt={quotes[quoteIndex].author}
				className={`quote-image ${fade ? "fade-in" : "fade-out"}`}
			/>
			<div className={`quote-text ${fade ? "fade-in" : "fade-out"}`}>
				"{quotes[quoteIndex].text}" - {quotes[quoteIndex].author}
			</div>
		</div>
	);
};

export default Quote;
