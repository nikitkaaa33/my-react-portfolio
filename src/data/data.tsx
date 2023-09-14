import gates from "../assets/quotes/gates.jpg";
import linus from "../assets/quotes/linus.jpg";
import jobs from "../assets/quotes/jobs.jpg";
import mark from "../assets/quotes/mark.jpg";
import hopper from "../assets/quotes/hopper.jpg";
import employee from "../assets/projects/employee.png";
import marvel from "../assets/projects/marvel1.png";
import gta2 from "../assets/projects/gta2.png";
import pulse from "../assets/projects/pulse.png";
import form from "../assets/projects/form.png";

import jsReact from "../assets/certifecates/js+react.png";
import node from "../assets/certifecates/node.png";
import webDev from "../assets/certifecates/webdev.jpg";
import genesis from "../assets/certifecates/genesis.png";
import prmWeb from "../assets/certifecates/prmWeb.png";
import tsSer from "../assets/certifecates/ts.png";

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
import ts from "../assets/skills/ts.svg";

export interface ISertificates {
	name: string;
	image: string;
	description: string;
}

export const cards: ISertificates[] = [
	{
		name: "JS+React",
		image: jsReact,
		description:
			"Basics of programming and algorithms, basics of object-oriented programming, basic concepts and principles of JavaScript, AJAX, JSON, npm, Babel, Browserify, Webpack, Heroku, Firebase,Redux",
	},
	{
		name: "Node.js",
		image: node,
		description:
			"Node.js Architecture, Event Loop, Thread Pool, Libuv, Built-in Modules, Express.js, Middleware Functions, Asynchronous Programming with Callbacks, Promises and async/await, NPM, Package.json",
	},
	{
		name: "Web",
		image: webDev,
		description:
			"Photoshop, Zeplin, Figma, Avocode, HTML5 and CSS3, JS and Jquery, Git and GitHub, Bootstrap 4/5, CSS Grid, Sass/Scss/Less, mobile adaptation",
	},
	{
		name: "TypeScript",
		image: tsSer,
		description:
			"Basic concepts and principles of TypeScript, interfaces, enum, types",
	},
	{
		name: "Practise",
		image: genesis,
		description: "Practise of working in team",
	},
	{
		name: "Started courses",
		image: prmWeb,
		description: "Basic concepts of web development and programming",
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
		image: employee,
		label: "CRUD app",
		text: "Tap to open this app",
		link: "https://employee-app-zeta.vercel.app/",
	},
	{
		image: marvel,
		label: "Marvel Database",
		text: "My biggest project with using many tools, tap to open this app",
		link: "https://marvel-starter-nnjc-f0ool1smu-nikitkaaa33.vercel.app/",
	},
	{
		image: gta2,
		label: "Game GTA2",
		text: "Maded simple game like gta2 using js, tap to open this app",
		link: "https://gta2-ivory.vercel.app/",
	},
	{
		image: pulse,
		label: "Pulse ",
		text: "HTML CSS JS, tap to open this site",
		link: "https://pulse-n9na.vercel.app/",
	},
	{
		image: form,
		label: "Form",
		text: "React Formik with validation schema , tap to open this app",
		link: "https://react-formik-eight.vercel.app/",
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
		image: mark,
	},
	{
		author: "Steve Jobs",
		text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
		image: jobs,
	},
	{
		author: "Grace Hopper",
		text: "The most dangerous phrase in the language is, 'We've always done it this way.'",
		image: hopper,
	},
	{
		author: "Linus Torvalds",
		text: "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
		image: linus,
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
		{ text: "TypeScript", image: ts },
	],
	2: [
		{ text: "Node.js ", image: nodeSvg },
		{ text: "Express ", image: express },
		{ text: "NPM ", image: npm },
		{ text: "API, AJAX, JSON", image: api },
	],
	3: [
		{ text: "Git/GitHub", image: git },
		{ text: "Gulp/WebPack", image: webpack },
		{ text: "English B2", image: english },
	],
};
