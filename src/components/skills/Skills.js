import React, { useState, useEffect, useMemo } from "react";
import "./skills.scss";
import html from "../../assets/skills/html.svg";
import js from "../../assets/skills/js.svg";
import css from "../../assets/skills/css.png";
import work from "../../assets/skills/react.svg";
import node from "../../assets/skills/node.svg";
import npm from "../../assets/skills/npm.svg";
import api from "../../assets/skills/api.svg";
import express from "../../assets/skills/express.svg";
import git from "../../assets/skills/git.svg";
import webpack from "../../assets/skills/webpack.svg";
import english from "../../assets/skills/english.svg";
import BG from "../../assets/skillsBG.png";

const Skills = () => {
	const [activeTab, setActiveTab] = useState(1);
	const [typedLines, setTypedLines] = useState([]);
	const [lineIndex, setLineIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);

	// вынести обьект в отдельный файл
	const tabContents = useMemo(
		() => ({
			1: [
				{ text: "HTML5 ", image: html },
				{
					text: "CSS3/SASS/SCSS/LESS ",
					image: css,
				},
				{
					text: "JS ES6 + TS ",
					image: js,
				},
				{ text: "React/Redux/RTK/Hooks ", image: work },
				{ text: "Something else", image: work },
			],
			2: [
				{ text: "Node.js ", image: node },
				{ text: "Express ", image: express },
				{ text: "NPM ", image: npm },
				{ text: "API ", image: api },
			],
			3: [
				{ text: "Git/GitHub", image: git },
				{ text: "Gulp/WebPack", image: webpack },
				{ text: "English B2", image: english },
			],
		}),
		[]
	);

	useEffect(() => {
		if (activeTab && lineIndex < tabContents[activeTab].length) {
			if (charIndex < tabContents[activeTab][lineIndex].text.length) {
				const timer = setTimeout(() => {
					setTypedLines((prev) => {
						const newLines = [...prev];
						if (newLines[lineIndex]) {
							newLines[lineIndex] +=
								tabContents[activeTab][lineIndex].text[
									charIndex
								];
						} else {
							newLines[lineIndex] =
								tabContents[activeTab][lineIndex].text[
									charIndex
								];
						}
						return newLines;
					});
					setCharIndex((prevCharIndex) => prevCharIndex + 1);
				}, 100);

				return () => clearTimeout(timer);
			} else {
				setLineIndex((prevLineIndex) => prevLineIndex + 1);
				setCharIndex(0);
			}
		}
	}, [activeTab, lineIndex, charIndex, tabContents]);

	const handleTabClick = (tabNumber) => {
		setActiveTab(tabNumber);
		setTypedLines([]);
		setLineIndex(0);
		setCharIndex(0);
	};

	return (
		<div className="tabs-container">
			<header className="tabs-header">My Skills</header>

			<div className="tabs-buttons">
				<button onClick={() => handleTabClick(1)}>Front-end</button>
				<button onClick={() => handleTabClick(2)}>Back-end</button>
				<button onClick={() => handleTabClick(3)}>Others</button>
			</div>

			<div className="tabs-content">
				{/* <div className="tabs-content_img">
					{" "}
					<img src={BG} alt="" />
				</div> */}
				{tabContents[activeTab]?.map((item, index) => (
					<div key={index} className="tab-content-item">
						<img
							src={item.image}
							alt="Description"
							className="tab-image"
						/>
						<span>{typedLines[index] || ""}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
