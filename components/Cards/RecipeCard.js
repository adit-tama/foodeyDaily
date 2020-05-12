import React, {useState} from "react";

const RecipeCard = ({title,cardAct,cardIndex,index,onAction,reset}) => {
	const [active, setActive] = useState(false)
	return(
	    	<div
	    		onClick={() => {
	    			onAction(index)
	    			setActive(!active)
	    			if (cardAct[0] === false){
	    				cardAct[1](true)
	    			} else {
	    				reset()
	    				cardAct[1](false)
	    			}
	    		}}
	    		className={active && cardIndex ? "mainRecipeCard": !active && cardIndex ? "recipeCard" : "hiderecipeCard"}
	    	>
	    		<h3>{title} <br /> Recipe </h3>
	    	</div>
    )
}
export default RecipeCard