import React from 'react'
import '../sass/button.scss'

let AddButton = props => {
	return (
		<div style={{textAlign:'center'}}>
			<button className="addbutton" onClick={props.handleClick}></button>
		</div>
	)
}

export default AddButton