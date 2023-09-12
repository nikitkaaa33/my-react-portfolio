import React, { useState, useEffect, useRef } from "react";
import "./skills.scss";
import { tabContents, ITabs } from "../../data/data";
import BG from "../../assets/skillsBG.png";

const Skills = () => {
	const [activeTab, setActiveTab] = useState<number>(1);
	const [typedLines, setTypedLines] = useState<string[]>([]);
	const [lineIndex, setLineIndex] = useState<number>(0);
	const [charIndex, setCharIndex] = useState<number>(0);
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const domRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => setIsVisible(entry.isIntersecting));
		});

		if (domRef.current) {
			observer.observe(domRef.current);
		}

		return () => {
			if (domRef.current) {
				observer.unobserve(domRef.current);
			}
		};
	}, []);

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
		<div className={`fade-in ${isVisible ? "visible" : ""}`} ref={domRef}>
			<div className="tabs-container">
				<header className="tabs-header">My Skills</header>

				<div className="tabs-buttons">
					<button onClick={() => handleTabClick(1)}>Front-end</button>
					<button onClick={() => handleTabClick(2)}>Back-end</button>
					<button onClick={() => handleTabClick(3)}>Others</button>
				</div>

				<div className="tabs-content">
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
		</div>
	);
};

export default Skills;
