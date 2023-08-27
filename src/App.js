import "./App.css";
import Greeting from "./components/greeting/Greeting";
import StarBackground from "./components/animated-background/StarBackground";
import Projects from "./components/projects/Projects";
import Sertificates from "./components/sertificates/Sertificates";
import Skills from "./components/skills/Skills";
import Google from "./components/google/Google";
import Quotes from "./components/quote/Quote";

function App() {
	return (
		<div className="App">
			<StarBackground />
			<Greeting />
			<Skills />
			<Projects />
			<Sertificates />
			<Google />
			<Quotes />
		</div>
	);
}

export default App;
