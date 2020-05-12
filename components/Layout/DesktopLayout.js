import React from "react";
import Footer from "../Misc/Footer";

const DesktopLayout = (props) => {
	return(
    	<div className={"DesktopLayout"}>
    		<div className={"MainSection"}>
    			{props.children[0]}
    		</div>
    		<div className={"RecipeSection"}>
    			{props.children[1]}
    		</div>
            <Footer />
    	</div>
    )
}
export default DesktopLayout