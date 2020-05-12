import React, { useState, useEffect } from "react";
import RecipeCard from "../Cards/RecipeCard";

const RecipeSection = ({title,icon}) => {
	const [cardAct, setCardAct] = useState(false)
	const [card1, setCard1] = useState(true)
	const [card2, setCard2] = useState(true)
	const [card3, setCard3] = useState(true)
	const [card4, setCard4] = useState(true)
	const [card5, setCard5] = useState(true)
	const [card6, setCard6] = useState(true)
	// const cards = [
	// 	["recipe card1",[card1, setCard1]],
	// 	["recipe card2",[card2, setCard2]],
	// 	["recipe card3",[card3, setCard3]],
	// 	["recipe card4",[card4, setCard4]],
	// 	["recipe card5",[card5, setCard5]],
	// 	["recipe card6",[card6, setCard6]]
	// ]

	const cards = [
		["recipe card1",[cardAct, setCardAct],card1],
		["recipe card2",[cardAct, setCardAct],card2],
		["recipe card3",[cardAct, setCardAct],card3],
		["recipe card4",[cardAct, setCardAct],card4],
		["recipe card5",[cardAct, setCardAct],card5],
		["recipe card6",[cardAct, setCardAct],card6],
	]

	const handleClick = (index) => {
		setCard1(false)
		setCard2(false)
		setCard3(false)
		setCard4(false)
		setCard5(false)
		setCard6(false)

		switch (index) {
		  case 0:
		    setCard1(true);
		    break;
		  case 1:
		    setCard2(true);
		    break;
		  case 2:
		    setCard3(true);
		    break;
		  case 3:
		    setCard4(true);
		    break;
		  case 4:
		    setCard5(true);
		    break;
		  case 5:
		    setCard6(true);
		    break;
		  default:
		  	break;
		}
	}

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

    		<div className={'flexRowCenterFluid'} style={{height:"70%",flexWrap:"wrap"}}>
				{
					cards.map((data,index) => {
						return (
							<RecipeCard 
								onAction={handleClick}
								cardAct={data[1]} 
								cardIndex={data[2]} 
								index={index} 
								key={index} 
								title={data}
								reset={reset}
							/>
						)
					})
				}
    		</div>
    	</div>
    )
}
export default RecipeSection