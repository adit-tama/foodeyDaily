import React from "react";

const MenuCard = ({title,icon}) => {
	return(
    	<div className={"menuCard"}>
    		<h3>{title} <br /> Recipe </h3>
    		<div className={'flexRowEndFluid'} style={{height:"60%"}}>
    			<img width={"30%"} src={icon} />
    		</div>
    	</div>
    )
}
export default MenuCard