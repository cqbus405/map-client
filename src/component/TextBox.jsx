import React from 'react'
import '../sass/textbox.scss'

let TextBox = props => {
	return (
		<div className="textbox">
			<input type="text" placeholder={props.hint} />
		</div>
	)
}

export default TextBox