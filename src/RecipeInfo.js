import React from "react";
import "./RecipeInfo.css";

export default function RecipeInfo(props) {
	if (props.zero && props.one && props.two && props.three && props.four) {
		return (
			<div className="RecipeInfo">
				<section className="card">
					<h3>Name: {props.zero.name}</h3>
					<img src={props.zero.image} alt={props.zero.name} />
					<h4> Ingredients</h4>
					<ul>
						<li>{props.zero.iOne}</li>
						<li>{props.zero.iTwo}</li>
						<li>{props.zero.iThree}</li>
					</ul>
					<p>
						{" "}
						For more information see{" "}
						<a href={props.zero.url} target="_blank" rel="noopener noreferrer">
							source{" "}
						</a>
					</p>
				</section>
			</div>
		);
	} else {
		return <div> No results. Please try searching for something else</div>;
	}
}
