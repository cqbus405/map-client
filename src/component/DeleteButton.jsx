import React from 'react'
import '../assets/sass/button.scss'

const DeleteButton = props => {
	return (
		<button className="deletebutton" onClick={props.handleClick}></button>
	)
}

export default DeleteButton