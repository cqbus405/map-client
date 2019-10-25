import React from 'react'
import icLeftArrow from '../assets/image/ic_left_arrow.svg'

const SearchPlace = props => {
	return (
		<div className="searchplace-wrapper">
			<div className="searchplace-header"><img alt="返回" src={icLeftArrow} /></div>
			<div className="searchplace-input-wrapper">
				<i className="icon"></i>
				<input type="text" placeholder="输入地址" />
			</div>
		</div>
	)
}

export default SearchPlace