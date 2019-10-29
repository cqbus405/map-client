import React from 'react'
import icLeftArrow from '../assets/image/ic_left_arrow.svg'

const SearchDialog = props => {
	let style = {
		display: 'none'
	}

	props.isOpen ? style.display = 'block' : style.display = 'none'

	return (
		<div className="searchplace-wrapper" style={style}>
			<div className="searchplace-header" onClick={props.closeSearchDialog}>
				<img alt="返回" src={icLeftArrow} />
				<div>地点搜索</div>
				<div></div>
			</div>
			<div className="searchplace-input-wrapper">
				<i className="icon"></i>
				<input type="text" placeholder="输入地址" />
			</div>
			<ul></ul>
		</div>
	)
}

export default SearchDialog