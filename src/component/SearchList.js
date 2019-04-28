import React from 'react'
import '../assets/sass/searchlist.scss'

const SearchList = props => {
	return (
		<div className="searchlist" style={{display: `${props.display}`}}>
			<div className="backbtn" onClick={props.handleBackBtnClick}></div>
			<input type="text" placeholder="请输入地址" onChange={props.handleInputChange} />
			<ul>{
				props.places ? props.places.map((place, index) => {
					return <li key={index} id={index} onClick={props.handlePlaceClick}>{place.name + ' ' + place.district + ' ' + place.city + ' ' + place.province}</li>
				}) : ''
			}</ul>
		</div>
	)
}

export default SearchList