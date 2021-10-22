import React, { useState } from "react";
import "./Food.css";

export default function Food() {
	let [word, setWord] = useState("");

	function handleResponse(response) {
		console.log(response);
	}

	function search(event) {
		event.preventDefault();
		let apiKey = ``;
		let apiURL = ``;
		axios.get(apiURL).then(handleResponse);
	}

	function handleSearch(event) {
		setWord(event.target.value);
	}

	return (
		<div className="Food">
			<h1>Type an ingredient and we'll return some recipes for you</h1>
			<div className="searchEngine">
				<form onSubmit={search}>
					<input type="search" autoFocus={true} onChange={handleSearch} />
				</form>
			</div>
			<div className="hint">Suggested words: chicken, egg</div>
		</div>
	);
}
