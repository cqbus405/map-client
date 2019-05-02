import React from 'react'
import { Link } from 'react-router-dom'

// const SearchButton = () => {
// 	return (
// 		<Link to="map" className="searchbutton" />
// 	)
// }

const SearchButton = props => {
	return (
		<div className="searchbutton" onClick={props.handleSearchBtnClick}></div>
	)
}

export default SearchButton