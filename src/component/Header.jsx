import React from 'react'
import icLeftArrow from '../assets/image/ic_left_arrow.svg'
import icRightArrow from '../assets/image/ic_right_arrow.svg'

const Header = props => {
	const title = props.title ? props.title : '标题' 
	return (
		<div className="header-wrapper">
			<div><img src={icLeftArrow} alt="退后" /></div>
			<div>{title}</div>
			<div><img src={icRightArrow} alt="下一步" /></div>
		</div>
	)
}

export default Header