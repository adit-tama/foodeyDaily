import React from "react";
import styled from 'styled-components';
import {HeadingMenu, ContentMenu, ContainerMenu} from './StyledCardComponents.js';

const MenuCard = ({title,icon}) => {
	return(
    <ContainerMenu>
      <HeadingMenu>
        <h3>{title}<br />Recipe</h3>
      </HeadingMenu>
      <ContentMenu>
        <img width={"50%"} src={icon} />
      </ContentMenu>
  	</ContainerMenu>
  )
}

MenuCard.defaultProps = {
  title: "testing",
  icon: ""
}

export default MenuCard