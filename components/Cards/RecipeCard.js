import React, {useState} from "react";
import { Modal,ModalBody ,ModalFooter, Button, Row, Col} from 'reactstrap';
import Fade from 'react-reveal/Fade';

const imageurl = "https://www.edamam.com/web-img/a23/a2300a1c6b33bee0963f380782d48e27.jpg"
const RecipeCard = ({label="Testing",calories="1200Kal",source="BBC", image=imageurl}) => {
	const [inProp, setInProp] = useState(false);
	const duration = 300;
	const defaultStyle = {
	  transition: `opacity ${duration}ms ease-in-out`,
	  opacity: 0,
	}
	const transitionStyles = {
	  entering: { opacity: 1 },
	  entered:  { opacity: 1 },
	  exiting:  { opacity: 0 },
	  exited:  { opacity: 0 },
	};
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
			      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			    </ModalBody>
			  </Modal>
		</>
    )
}
export default RecipeCard