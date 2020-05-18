import React from "react";
import MenuCard from '../Cards/MenuCard';
import SearchBar from '../Input/SearchBar';
import {Menus} from '../Constant';
import styled from 'styled-components';
import {MenuScroll, TaglineContainer, LogoContainer, MenuContainer} from './StyledSectionsComponents';

const MainSection = ({ keyword,setKeyword}) => {
	return(
    	<MenuContainer>
    		<LogoContainer>
    			<img width={"70%"} src={"/icons/logo.svg"} />
    		</LogoContainer>
    		<TaglineContainer>
    			<h1> Get your daily recipe here! </h1>
    		</TaglineContainer>
    		<SearchBar 
          keyword={keyword}  
          setKeyword={setKeyword} 
        />
    		<MenuScroll >
	    		{Menus.map(menu => (
	    			<MenuCard 
              key={menu.title}
              title={menu.title} 
              icon={menu.icon} 
            />
	    		))}
    		</MenuScroll>
    	</MenuContainer>
    )
}

MainSection.defaultProps = {
  keyword: "default",
  setKeyword: () => {console.log("set keyword ")}
}

export default MainSection