import React from "react";

export default function RecipeInfo(props) {
	/*
props equal response.data.hits
After .hits is 0,1,2,3,4 . . . 
so we start the loop here 
SO
  
  {
    props.results.map(function (returns, index) {
      return (
        <div key={index}>
        {returns.recipe.calories}
        </div>
    
      );
    })
  }

  NOTE: RETURNS in the MAP FUNCTION should be the 0,1,2,3 numbers 


  */

	return (
		<div className="RecipeInfo">
			<h1> where are </h1>
			<div>{props.results}</div>
		</div>
	);
}
