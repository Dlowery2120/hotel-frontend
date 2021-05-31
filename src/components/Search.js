import React from 'react';

const Search = (props) => {
	const changeHandler = (e) => {
		{
			props.searchLocation(e.target.value);
		}
	};
	return (
		<div id="search">
			<input type="text" placeholder="Search Destination" onChange={(e) => changeHandler(e)} />
		</div>
	);
};

export default Search;
