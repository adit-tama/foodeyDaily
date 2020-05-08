import React from "react";
import MenuCard from '../Cards/MenuCard';
import SearchBar from '../Input/SearchBar';

const MainSection = ({title,icon}) => {
	const Menus = [
		{title:"Beef", icon:"/icons/beef.svg"},
		{title:"Fish", icon:"/icons/fish.svg"},
		{title:"Cheese", icon:"/icons/cheese.svg"},
		{title:"Chicken", icon:"/icons/chicken.svg"},
	]
	return(
    	<div className={'flexColumnStartFluid'}>
    		<div className={'logo'}>
    			<img width={"70%"} src={"/icons/logo.svg"} />
    		</div>
    		<div className={"tagline"}>
    			<h1> Get your daily recipe here! </h1>
    		</div>
    		<SearchBar />
    		<div className={"menuScroll"}>
	    		{Menus.map(menu => (
	    			<MenuCard title={menu.title} icon={menu.icon} />
	    		))}
    		</div>
    	</div>
    )
}
export default MainSection