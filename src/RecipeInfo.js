import React from "react";

export default function RecipeInfo(props) {
	if (props.zero && props.one && props.two && props.three && props.four) {
		return (
			<div className="RecipeInfo">
				<section className="card">
					<div>Name: {props.zero.name}</div>
					<div>Calories: {props.zero.calories}</div>
					<div>Cuisine type: {props.zero.cuisineType}</div>
				</section>
			</div>
		);
	} else {
		return <div> No results please try searching for something else</div>;
	}
}
