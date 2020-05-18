import {Modal, ModalBody, ModalFooter, Button, Row, Col} from 'reactstrap';
import React, {useState} from "react";
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import cards from "../Constant";
import RecipeModal from "../Modal/RecipeModal";
import {imageurl} from '../Constant';
import {RecipeCardContainer, CardImage} from './StyledCardComponents.js';

const RecipeCard = ({label, calories, author, image, ingredients}) => {
	const [inProp, setInProp] = useState(false);
	const [active, setActive] = useState(false)
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);
	return(
		<>
			<Fade bottom>
				<RecipeCardContainer onClick={toggle}>
					<Row style={{width:"100%"}}>
						<Col style={{display:"flex",flexDirection:"column",justifyContent:"space-between", alignItems:"flex-start"}} sm={'12'}>
							<h3>{label}</h3>
							<p>{`${author} | calories: ${calories}`}</p>
						</Col>
					</Row>
					<CardImage src={image} alt='image'/>
				</RecipeCardContainer>
			</Fade>
			<RecipeModal 
				modal={{modal,toggle}} 
				ingredients={ingredients} 
				calories={calories} 
				label={label} 
				author={author}
				image={image}/>
		</>
	)
}

RecipeCard.defaultProps = {
	label:"Testing",
	calories:"1200Kal",
	author:"BBC",
	image:imageurl,
	ingredients:[]
}

export default RecipeCard