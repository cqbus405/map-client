import React from 'react'
import icBuild from '../assets/image/ic_build.svg'

const BuildImage = () => {
	const style = {
		position: 'relative',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		textAlign: 'center'
	}
	const textStyle = {
		padding: '12px',
		color: 'lightgrey'
	}
	return (
		<div style={style}>
			<img src={icBuild} alt="建设中" />
			<p style={textStyle}>建设中</p>
		</div>
	)
}

export default BuildImage