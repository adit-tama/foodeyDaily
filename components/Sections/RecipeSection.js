import React, { useState, useEffect } from "react";
import RecipeCard from "../Cards/RecipeCard";
import {Row,Col} from "reactstrap";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';



const RecipeSection = ({title,icon}) => {
	const [cardAct, setCardAct] = useState(true);
	const [recipeList, setRecipeList] = useState([]);
	const app_ID = "7dd468f3";
	const app_KEY = "f806c31d60ed2fdaf0ad61bc6c4734e8";
	const url = `https://api.edamam.com/search?q=chicken&app_id=${app_ID}&app_key=${app_KEY}&from=0&to=2&calories=591-722&health=alcohol-free`
	
	const getRecipe = async () => {
		const data = await fetch(url).then(data => {return data.json()});
		console.log(data.hits)
		setRecipeList(data.hits);
	}

	useEffect(() => {
		getRecipe();
	});

	const cards = [
		"recipe card1",
		"recipe card2",
		"recipe card3",
		"recipe card4",
		"recipe card5",
		"recipe card6",
		"recipe card1",
		"recipe card2",
		"recipe card3",
		"recipe card4",
		"recipe card5",
		"recipe card6",
	]

	const reset = () => {
		setCard1(true)
		setCard2(true)
		setCard3(true)
		setCard4(true)
		setCard5(true)
		setCard6(true)
	}

	return(
    	<div className={"flexColumnEndFluid"} >
    		<div className={"flexColumnEndFluid"} style={{height:"10%"}}>
    			<span className={'keyword'}> keyword : <b>Meat</b></span>
    		</div>
    		<div style={{display:"block",height:"62%",width:"100%",overflow:"scroll"}}>
	    		<div className="grid-container">
	    			
					{
						recipeList.map((data,index) => {
							return (
								
								<div key={index} className="grid-item">
									<RecipeCard 
										key={index} 
										hits={data}
										source={data.recipe.source}
										label={data.recipe.label}
										image={data.recipe.image}
										ingredients={data.recipe.ingredientLines}
										calories = {Math.round(data.recipe.calories)}
									/>
								</div>
								
							)
						})
					}
				</div>
			</div>
    	</div>
    )
}
export default RecipeSection