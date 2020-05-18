import React, {useState} from "react";

const SearchBar = ({setKeyword,keyword}) => {
	const [searchTerm, setSearchTerm] = useState('')
	const handleChange = event => {
		setSearchTerm(event.target.value);
	};
	const handleEnter = event => {
		if (event.key === 'Enter') {
			setKeyword(searchTerm)
		}
	};
	return(
		<>
    		<input
    			type="text"
	    		placeholder="enter keyword here"
	    		value={[searchTerm]}
	    		onChange={handleChange}
	    		onKeyDown={handleEnter}
		    />
		</>
    )
}
export default SearchBar