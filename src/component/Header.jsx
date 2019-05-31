import React from 'react'
import '../assets/sass/header.scss'
import logo from '../assets/image/ic_logo.png'

const Header = () => {
	return (
		<div className="header">
			<img src={logo} alt="logo" />
			<span>EzGoing</span>
		</div>
	)
}

export default Header