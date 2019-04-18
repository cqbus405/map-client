import React from 'react'
import '../sass/textbox.scss'

let TextBox = props => {
	return (
		<input className="textbox" type="text" placeholder={props.hint} />
	)
}

export default TextBox