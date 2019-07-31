import React from 'react'
import '../assets/sass/placebar.scss'

const PlaceBar = props => {
	let { place } = props

	return (
		<div className="placebar-wrapper">
			<div className="placebar-address">
				<div>{place.name}</div>
				<div>{place.province + '-' + place.city + '-' + place.district}</div>
			</div>
			<div className="placebar-weather">27℃</div>
			<div className="placebar-nearby"><p>周边<br/>热门</p></div>
			<div className="placebar-hide"><p>隐藏</p></div>
		</div>
	)
}

export default PlaceBar