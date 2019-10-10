import React from 'react'

const InputLine = props => {
	const btnImg = props.btnObj.btnImg
	const btnText = props.btnObj.btnText
	const btnId = props.btnObj.btnId
	const btnType = props.btnObj.btnType

	let btnColor = '#2A7FF6'
	if (btnType === 2) btnColor = '#D81E06' 

	return (
		<div className="inputline-wrapper">
			<input type="text" />
			<img src={btnImg} alt={btnText} style={{backgroundColor: btnColor}} onClick={props.handleClick} id={btnId} />
		</div>
	)
}

export default InputLine