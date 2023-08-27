import { useMemo } from "react";

export const tabContents = useMemo(
	() => ({
		1: [
			{ text: "HTML5", image: html },
			{
				text: "CSS3/SASS/SCSS/LESS",
				image: css,
			},
			{
				text: "JS ES6 + TS",
				image: js,
			},
			{ text: "React/Redux/RTK/Hooks", image: work },
			{ text: "Something else", image: work },
		],
		2: [
			{ text: "Hello 1.", image: js },
			{ text: "How are you?", image: "/path/to/image2.jpg" },
			{ text: "This is Tab 1.", image: "/path/to/image3.jpg" },
			{ text: "Hope you're fine.", image: "/path/to/image4.jpg" },
			{ text: "Enjoy!", image: "/path/to/image5.jpg" },
		],
		3: [
			{ text: "Hello 1.", image: js },
			{ text: "How are you?", image: "/path/to/image2.jpg" },
			{ text: "This is Tab 1.", image: "/path/to/image3.jpg" },
			{ text: "Hope you're fine.", image: "/path/to/image4.jpg" },
			{ text: "Enjoy!", image: "/path/to/image5.jpg" },
		],
	}),
	[]
);
