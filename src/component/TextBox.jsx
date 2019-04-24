import React from 'react'
import '../assets/sass/textbox.scss'

const TextBox = props => {
	return (
		<input className="textbox" type="text" placeholder={props.hint} />
	)
}

export default TextBox