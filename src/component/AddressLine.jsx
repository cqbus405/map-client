import React from 'react'
import icImage from '../assets/image/ic_image.svg'

const AddressLine = props => {
	let { name, address } = props.content

	return (
		<div className="addressLineWrapper">
			<div className="image">
				<img src={icImage} alt="placeholder" />
			</div>
			<div className="title">{name}</div>
			<div className="address">{address}</div>
			<div className="weather"></div>
			<div className="location"></div>
		</div>
	)
}

export default AddressLine