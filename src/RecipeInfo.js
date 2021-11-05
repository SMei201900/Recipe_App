import React from "react";

export default function RecipeInfo(props) {
	return (
		<div className="RecipeInfo">
			<h1> where are </h1>
			<div>{props.results}</div>
		</div>
	);
}
