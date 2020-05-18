import React, { useState, useEffect } from "react";
import RecipeCard from "../Cards/RecipeCard";
import {Row,Col} from "reactstrap";
import ScrollAnimation from 'react-animate-on-scroll';
import {cardsList, url} from '../Constant';
import styled from 'styled-components';
import {Keyword, Recipe, KeywordContainer, RecipeContainer, RecipeList, RecipeItem} from './StyledSectionsComponents';

const RecipeSection = ({keyword}) => {
	const [cardAct, setCardAct] = useState(true);
	const [recipeList, setRecipeList] = useState([]);
	
	const getRecipe = async () => {
		const data = await fetch(url).then(data => {return data.json()});
		console.log(data.hits.recipe)
		setRecipeList(data.hits);
	}

	useEffect(() => {
		// getRecipe(); 
	});

	return(
    	<Recipe>
    		<KeywordContainer>
    			{keyword && <Keyword>{keyword}</Keyword>}
    		</KeywordContainer>
    		<RecipeContainer>
	    		<RecipeList>
					{cardsList.map((data,index) => {
						return (
							<RecipeItem key={index}>
								<RecipeCard 
									key={index} 
									hits={data}
									author={data.author}
									label={data.label}
									image={data.image}
									ingredients={data.ingredientLines}
									calories = {Math.round(data.calories)}
								/>
							</RecipeItem>
						)
					})}
				</RecipeList>
			</RecipeContainer>
  	</Recipe>
  )
}

RecipeSection.defaultPropTypes = {
	keyword: "testing"
}

export default RecipeSection