import React from "react";
import "./RecipeInfo.css";

export default function RecipeInfo(props) {
	if (props.zero && props.one && props.two && props.three && props.four) {
		return (
			<div className="RecipeInfo">
				<section className="card">
					<h3>Name: {props.zero.name}</h3>
					<h4> Ingredients</h4>
					<ul>
						<li>egg</li>
						<li>pasta</li>
						<li>olive oil</li>
					</ul>
				</section>
			</div>
		);
	} else {
		return <div> No results. Please try searching for something else</div>;
	}
}
