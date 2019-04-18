import React from 'react'
import '../sass/button.scss'

let DeleteButton = props => {
	return (
		<button className="deletebutton" onClick={props.handleClick}></button>
	)
}

export default DeleteButton