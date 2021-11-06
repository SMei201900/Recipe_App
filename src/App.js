import React from "react";
import "./App.css";
import Credits from "./Credits";
import Food from "./Food";
import sandwich from "./sandwich.jpg";

export default function App() {
	return (
		<div className="App">
			<header>
				<img src={sandwich} alt="sandwich" width={150} />
				<h1> Recipe App </h1>
				<h2>Type something and we'll search a recipe for you</h2>
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
