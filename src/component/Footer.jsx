import React from 'react'

const Footer = props => {
	const handleClick = props.handleClick

	const items = props.items
	const itemList = items.map((item, key) => {
		const icon = item.isCurrent ? require(`../assets/image/${item.url}_blue.svg`) : require(`../assets/image/${item.url}_grey.svg`)
		return <div key={key} onClick={handleClick} className="footer-item" data-value={key}><img className="footer-icon" src={icon} alt={item.alt} /></div>
	})

	return (
		<div className="footer-wrapper">{itemList}</div>
	)
}

export default Footer