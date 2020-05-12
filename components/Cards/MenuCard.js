import React from "react";

const MenuCard = ({title,icon}) => {
	return(
    	<div className={"menuCard card1"}>
               <div style={{width:"50%"}}>
                   <h3>{title} <br /> Recipe </h3>
               </div>
               <div className={'flexRowEndFluid'} style={{width:"50%"}}>
                   <img width={"50%"} src={icon} />
               </div>
    	</div>
    )
}
export default MenuCard