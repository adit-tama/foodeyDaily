import React from "react";
import Footer from "../Footer/Footer";
import styled from 'styled-components';

// styled components
const MainLayout = styled.div`
    overflow: scroll;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("/images/background.png") !important;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;`
const MainSection = styled.div`
    width: 30%;
    height: 100%;`
const RecipeSection = styled.div`
    width: 70%;
    height: 100%;`


// react functional component
const DesktopLayout = ({section1, section2}) => {
	return(
    <>
    	<MainLayout>
    		<MainSection>
    			{section1}
    		</MainSection>
    		<RecipeSection>
    			{section2}
    		</RecipeSection>
    	</MainLayout>
      <Footer />
    </>
  )
}

DesktopLayout.defaultProps = {
    section1: <div> section 1 </div>,
    section2: <div> section 2 </div>
}

export default DesktopLayout