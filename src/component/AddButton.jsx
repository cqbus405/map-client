import React from 'react'
import '../assets/sass/button.scss'

const AddButton = props => {
	return (
		<button className="addbutton" onClick={props.handleClick}></button>
	)
}

export default AddButton