import React from "react";
import styled from 'styled-components';

const FooterContainer = styled.div`
	display: flex;
	font-size: 11px;
	justify-content: center;
	font-weight: 100;
	position: absolute;
	width: 100%;
	bottom:0;
	right:0;
	background: black;
	color: white;
`

const Footer = () => {
	return(
    	<FooterContainer>
    		<span>Developed by <a target="_blank" href={"https://pradityadhitama.com/"}>Praditya Adhitama </a>
    		| Supported by <a target="_blank" href={"https://developer.edamam.com/"}>Edamam API </a>
    		 and <a target="_blank" href={"https://www.flaticon.com/authors/freepik"}>Freepik</a></span>
    	</FooterContainer>
    )
}
export default Footer