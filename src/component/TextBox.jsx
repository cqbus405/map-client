import React from 'react'
import '../assets/sass/textbox.scss'

const TextBox = props => {
	return (
		<input id={props.id} className="textbox" type="text" placeholder={props.hint} onChange={props.handleOnChange} />
	)
}

export default TextBox