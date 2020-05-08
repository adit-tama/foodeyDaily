import React from "react";

const DesktopLayout = (props) => {
	return(
    	<div className={"DesktopLayout"}>
    		<div className={"MainSection"}>
    			{props.children[0]}
    		</div>
    		<div className={"RecipeSection"}>
    			{props.children[1]}
    		</div>
    	</div>
    )
}
export default DesktopLayout