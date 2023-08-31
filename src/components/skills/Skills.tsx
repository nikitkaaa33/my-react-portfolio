import React, { useState, useEffect, useMemo } from "react";
import "./skills.scss";
import { tabContents, ITabs } from "../../data/data";
import BG from "../../assets/skillsBG.png";

const Skills = () => {
	const [activeTab, setActiveTab] = useState<number>(1);
	const [typedLines, setTypedLines] = useState<string[]>([]);
	const [lineIndex, setLineIndex] = useState<number>(0);
	const [charIndex, setCharIndex] = useState<number>(0);

	// вынести обьект в отдельный файл

	useEffect(() => {
		if (activeTab && lineIndex < tabContents[activeTab].length) {
			if (charIndex < tabContents[activeTab][lineIndex].text.length) {
				const timer = setTimeout(() => {
					setTypedLines((prev) => {
						const newLines: string[] = [...prev];
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

	const handleTabClick = (tabNumber: number) => {
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
