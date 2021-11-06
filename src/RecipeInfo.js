import React from "react";
import "./RecipeInfo.css";

export default function RecipeInfo(props) {
	if (props.zero && props.one && props.two && props.three && props.four) {
		return (
			<div className="RecipeInfo">
				<section className="card">
					<h3>Name: {props.zero.name}</h3>
					<div>Calories: {props.zero.calories}</div>
					<div>Cuisine type: {props.zero.cuisineType}</div>
				</section>
			</div>
		);
	} else {
		return <div> No results. Please try searching for something else</div>;
	}
}
