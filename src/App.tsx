import React from "react";
import "./App.css";
import Greeting from "./components/greeting/Greeting";
// import StarBackground from "./components/animated-background/StarBackground";
import Projects from "./components/projects/Projects";
import Sertificates from "./components/sertificates/Sertificates";
import Skills from "./components/skills/Skills";
import Google from "./components/google/Google";
import Quotes from "./components/quote/Quote";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import FeedBack from "./components/feed-back/FeedBack";

function App() {
	return (
		<div className="App">
			<Header />
			{/* <StarBackground /> */}
			<Greeting />
			<Skills />
			<Projects />
			<Sertificates />
			<FeedBack />
			<Google />
			<Quotes />
			<Footer />
		</div>
	);
}

export default App;
