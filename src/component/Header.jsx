import React from 'react'
import '../assets/sass/header.scss'
import logo from '../assets/image/ic_logo.svg'

const Header = () => {
	return (
		<div className="header">
			<img src={logo} />
			<span>ReadyToGo</span>
		</div>
	)
}

export default Header