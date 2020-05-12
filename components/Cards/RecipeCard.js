import React, {useState} from "react";
import { Modal,ModalBody ,ModalFooter, Button} from 'reactstrap';

const RecipeCard = ({title,cardAct,cardIndex,index,onAction,reset}) => {
	const [active, setActive] = useState(false)
	const toggle = () => setModal(!modal);
	const [modal, setModal] = useState(false);
	return(
		<>
	    	<div
	    		onClick={toggle}
	    		className={"recipeCard card2"}
	    	>
	    		<h3>{title}</h3>
	    	</div>
	    	 <Modal size={'lg'}isOpen={modal} toggle={toggle}>
			    <ModalBody>
			      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			    </ModalBody>
			  </Modal>
		</>
    )
}
export default RecipeCard