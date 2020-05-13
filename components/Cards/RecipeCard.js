import React, {useState} from "react";
import { Modal,ModalBody ,ModalFooter, Button, Row, Col} from 'reactstrap';
import Fade from 'react-reveal/Fade';

const imageurl = "https://www.edamam.com/web-img/a23/a2300a1c6b33bee0963f380782d48e27.jpg"
const RecipeCard = ({label="Testing",calories="1200Kal",source="BBC", image=imageurl,ingredients=[]}) => {
	const [inProp, setInProp] = useState(false);
	console.log(ingredients)
	const duration = 300;
	const cards = [
		"recipe card1",
		"recipe card2",
		"recipe card3",
		"recipe card4",
		"recipe card5",
		"recipe card6",
		"recipe card1",
		"recipe card2",
		"recipe card3",
		"recipe card4",
		"recipe card5",
		"recipe card6",
	]
	const [active, setActive] = useState(false)
	const toggle = () => setModal(!modal);
	const [modal, setModal] = useState(false);
	return(
		<>
			<Fade bottom>
		    	<div
		    		onClick={toggle}
		    		className={"recipeCard card2"}
		    	>
		    		<Row style={{width:"100%"}}>
		    			<Col style={{display:"flex",flexDirection:"column",justifyContent:"space-between", alignItems:"flex-start"}} sm={'12'}>
		    				<h3>{label}</h3>
		    				<p>{`${source} | calories: ${calories}`}</p>
		    			</Col>
		    		</Row>
		    		<img style={{position:"absolute", bottom:"0", right:"0"}} src={image} alt='image' width={"150"} height={"150"}/>
		    	</div>
		    </Fade>
	    	 <Modal size={'lg'}isOpen={modal} toggle={toggle}>
			    <ModalBody>
			      <Row style={{height:"30rem",padding:"2rem"}}>
		    			<Col style={{display:"flex",flexDirection:"column",justifyContent:"flex-start", alignItems:"flex-start"}} sm={'6'}>
		    				<h3 className={"tile"} style={{color:"black"}}>{label}</h3>
		    				<p className={"tile"}>{`${source}  |  calories: ${calories}`}</p>
		    				<div style={{marginTop:"1rem"}}>
		    					<h2 className={"tile"}>{"Ingredients"}</h2>
		    					<div style={{overflow:"scroll",width:"80%",height:"100"}}>
		    					<ul>
		    						{ingredients.map((data,index) => {
											return ( 
													<li className={"tile"}>{data}</li>
												
											)
										})
									}
		    					</ul>
		    					</div>
		    				</div>
		    			</Col>
		    			<img className={"tile"}style={{position:"absolute", bottom:"10%", right:"5%",borderRadius:"10px"}} src={image} alt='image' width={"400"} height={"400"}/>
		    		</Row>
			    </ModalBody>
			  </Modal>
		</>
    )
}
export default RecipeCard