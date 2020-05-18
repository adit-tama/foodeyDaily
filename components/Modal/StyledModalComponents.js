import {ModalBody} from 'reactstrap';
import styled from 'styled-components';

const RecipePicture = styled.img`
	width: auto;
	height: 80%;
	position: absolute;
	bottom: 10%;
	right: 5%;
	borderRadius: 10px;
	animation: 1s ease-in-out both fade-in-right`
const ModalContainer = styled(ModalBody)`
	height: max-content;
`
const Title = styled.h3`
	color: black;
	animation: 1s ease-in-out both fade-in-right;`
const Info = styled.p`animation: 1s ease-in-out both fade-in-right`
const IngredientsContainer = styled.div`margin-top: 1rem;`
const IngredientsSection = styled.div`
	overflow:scroll;
	width:80%;
	height:100;`
const Ingredients = styled.li`animation: 1s ease-in-out both fade-in-right`

export {
	RecipePicture, 
	Title,  
	Info, 
	IngredientsContainer, 
	Ingredients, 
	IngredientsSection
}
