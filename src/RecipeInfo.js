import React from "react";

export default function RecipeInfo(props) {
	return (
		<div className="RecipeInfo">
			<h1> where are and {props.zero.name} </h1>{" "}
			<h2> index 1 {props.one.name}</h2>
		</div>
	);
}
