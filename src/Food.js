import React, { useState } from "react";
import axios from "axios";
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
			<section className="results">
				<div className="searchEngine">
					<form onSubmit={search}>
						<input
							type="search"
							autoFocus={true}
							onChange={handleSearch}
							placeholder="Search recipe..."
						/>
					</form>
					<div className="hint">Suggested words: chicken, egg</div>
				</div>
			</section>
		</div>
	);
}
