import React from "react";
import "./App.css";
import Credits from "./Credits";
import Food from "./Food";

export default function App() {
	return (
		<div className="App">
			<header>
				<h1> Recipe App </h1>
			</header>
			<main>
				<Food />
			</main>
			<section>
				<Credits />
			</section>
		</div>
	);
}
