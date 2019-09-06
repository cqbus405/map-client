import React from 'react'
import '../assets/sass/header.scss'
import logo from '../assets/image/logo.png'

const Header = () => {
	return (
		<div className="header">
			<img src={logo} alt="logo" />
			<span>一咻</span>
		</div>
	)
}

export default Header