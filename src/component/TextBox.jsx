import React from 'react'
import '../assets/sass/textbox.scss'

const TextBox = props => {
	return (
		<input readOnly id={props.id} className="textbox" type="text" placeholder={props.hint} onClick={props.handleInputClick} />
	)
}

export default TextBox