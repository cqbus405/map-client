import React from 'react'
import '../assets/sass/placebar.scss'
import ic_eye from '../assets/image/ic_eye.svg'

const PlaceBar = props => {
	let { place, goToNewSearch } = props

	return (
		<div className="placebar-wrapper">
			<div className="placebar-address">
				<div>{place.name}</div>
				<div>{place.province + '-' + place.city + '-' + place.district}</div>
			</div>
			<div className="placebar-weather">27℃</div>
			<div className="placebar-btn-group">
				<div onClick={goToNewSearch}>周边</div>
				<div><img src={ic_eye} alt="隐藏" /></div>
			</div>
		</div>
	)
}

export default PlaceBar