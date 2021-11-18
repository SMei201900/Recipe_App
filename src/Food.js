import React, { useState } from "react";
import axios from "axios";
import "./Food.css";
import RecipeInfo from "./RecipeInfo";

export default function Food() {
	let [word, setWord] = useState("");
	let [zero, setZero] = useState({});
	let [one, setOne] = useState({});
	let [two, setTwo] = useState({});
	let [three, setThree] = useState({});
	let [four, setFour] = useState({});

	function handleResponse(response) {
		console.log(response.data);

		setZero({
			name: response.data.hits[0].recipe.label,
			iOne: response.data.hits[0].recipe.ingredientLines[0],
			iTwo: response.data.hits[0].recipe.ingredientLines[1],
			iThree: response.data.hits[0].recipe.ingredientLines[2],
			source: response.data.hits[0].recipe.source,
			url: response.data.hits[0].recipe.url,
			//image goes before name
			//source --> owner of recipe/url
			//url
		});

		setOne({
			name: response.data.hits[1].recipe.label,
			iOne: response.data.hits[1].recipe.ingredientLines[0],
			iTwo: response.data.hits[1].recipe.ingredientLines[1],
			iThree: response.data.hits[1].recipe.ingredientLines[2],
			source: response.data.hits[1].recipe.source,
			url: response.data.hits[1].recipe.url,
		});

		setTwo({
			name: response.data.hits[2].recipe.label,
		});

		setThree({
			name: response.data.hits[3].recipe.label,
		});

		setFour({
			name: response.data.hits[4].recipe.label,
		});
	}

	function search(event) {
		event.preventDefault();
		let apiID = `6a2ac39a`;
		let apiKey = `6ab8046c942dd274ff215bc782a736fc`;
		let apiURL = `https://api.edamam.com/search?q=${word}&app_id=${apiID}&app_key=${apiKey}&" `;
		axios.get(apiURL).then(handleResponse);
	}

	function handleWordChange(event) {
		setWord(event.target.value);
	}

	return (
		<div className="Food">
			<div className="searchEngine">
				<form onSubmit={search}>
					<input
						type="search"
						autoFocus={true}
						onChange={handleWordChange}
						placeholder="Search recipe..."
					/>
				</form>
			</div>
			<div className="hint">Suggested words: chicken, egg</div>
			<RecipeInfo zero={zero} one={one} two={two} three={three} four={four} />
		</div>
	);
}
