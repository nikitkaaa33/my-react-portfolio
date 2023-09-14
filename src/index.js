import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import LoadingSpinner from "./components/loader/LoadingSpinner";
import "./index.css";
// import App from "./App";

const App = React.lazy(
	() =>
		new Promise((resolve) =>
			setTimeout(() => resolve(import("./App")), 2000)
		)
);

ReactDOM.render(
	<React.StrictMode>
		<Suspense fallback={<LoadingSpinner />}>
			<App />
		</Suspense>
	</React.StrictMode>,
	document.getElementById("root")
);
