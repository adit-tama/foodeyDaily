import {Modal, ModalBody, ModalFooter, Button, Row, Col} from 'reactstrap';
import React, {useState} from "react";
import PropTypes from 'prop-types';
import {imageurl} from '../Constant';
import Fade from 'react-reveal/Fade';
import {
	RecipePicture, Title,Info, 
	IngredientsContainer, Ingredients, IngredientsSection
} from "./StyledModalComponents";

const MainRecipe = ({modal: { modal,toggle }, ingredients, calories, label, author,image}) => {
	return (
		<>
			<Modal size={'lg'} isOpen={modal} toggle={toggle}>
					<ModalBody>
						<Title>{label}</Title>
						<Info>{`${author}  |  calories: ${calories}`}</Info>
						<IngredientsContainer>
							<Info>Ingredients</Info>
							<IngredientsSection>
								<Fade cascade>
								<ul>
									{ingredients.map((data,index) => {
										return <Ingredients>{data}</Ingredients>
									})}
								</ul>
								</Fade>
							</IngredientsSection>
					  </IngredientsContainer>
					</ModalBody>
				<RecipePicture src={image} alt='image' />
		  </Modal>
		</>
	)
}

MainRecipe.defaultProps = {
	modal: {
		modal: false,
		toggle: () => console.log('toggle')
	},
	ingredients:["something","something"],
	author:"BCBC",
	calories: 2000,
	label: "testing",
	image: "imageurl"
}

export default MainRecipe