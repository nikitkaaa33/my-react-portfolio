import { useMemo } from "react";
import gates from "../assets/quotes/gates.jpg";
import Employee from "../assets/employee.png";
import marvel from "../assets/marvel1.png";
import heroes from "../assets/Heroes.png";
import smth from "../assets/films.png";

import jsReact from "../assets/certifecates/js+react.png";
import node from "../assets/certifecates/node.png";
import webDev from "../assets/certifecates/webdev.jpg";
import ts from "../assets/certifecates/ts.png";
import genesis from "../assets/certifecates/genesis.png";
import prmWeb from "../assets/certifecates/prmWeb.png";

import html from "../assets/skills/html.svg";
import js from "../assets/skills/js.svg";
import css from "../assets/skills/css.png";
import work from "../assets/skills/react.svg";
import nodeSvg from "../assets/skills/node.svg";
import npm from "../assets/skills/npm.svg";
import api from "../assets/skills/api.svg";
import express from "../assets/skills/express.svg";
import git from "../assets/skills/git.svg";
import webpack from "../assets/skills/webpack.svg";
import english from "../assets/skills/english.svg";

export interface ISertificates {
	name: string;
	image: string;
	description: string;
}

export const cards: ISertificates[] = [
	{
		name: "Card 1",
		image: jsReact,
		description: "Description for Card 1",
	},
	{
		name: "Card 2",
		image: node,
		description: "Description for Card 2",
	},
	{
		name: "Card 3",
		image: webDev,
		description: "Description for Card 3",
	},
	{
		name: "Card 4",
		image: ts,
		description: "Description for Card 4",
	},
	{
		name: "Card 5",
		image: genesis,
		description: "Description for Card 5",
	},
	{
		name: "Card 6",
		image: prmWeb,
		description: "Description for Card 6",
	},
];

export interface ICardsData {
	image: string;
	label: string;
	text: string;
	link: string;
}
export const cardsData: ICardsData[] = [
	{
		image: Employee,
		label: "CRUD",
		text: "Some description for card 1 lorem  ",
		link: "https://example1.com",
	},
	{
		image: marvel,
		label: "Label 2",
		text: "Some description for card 2",
		link: "https://example2.com",
	},
	{
		image: heroes,
		label: "Label 2",
		text: "Some description for card 2",
		link: "https://example2.com",
	},
	{
		image: smth,
		label: "Label 2",
		text: "Some description for card 2",
		link: "https://example2.com",
	},
];

export interface IQuote {
	author: string;
	text: string;
	image: string;
}
export const quotes: IQuote[] = [
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

interface ITabContent {
	text: string;
	image: string;
}

export interface ITabs {
	[key: number]: ITabContent[];
}

export const tabContents: ITabs = {
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
		{ text: "Node.js ", image: nodeSvg },
		{ text: "Express ", image: express },
		{ text: "NPM ", image: npm },
		{ text: "API ", image: api },
	],
	3: [
		{ text: "Git/GitHub", image: git },
		{ text: "Gulp/WebPack", image: webpack },
		{ text: "English B2", image: english },
	],
};