import React from 'react'
import icLeftArrow from '../assets/image/ic_left_arrow.svg'

const SearchPlace = props => {
	return (
		<div className="searchplace-wrapper">
			<div>
				<div><img alt="返回" src={icLeftArrow} /></div>
				<div>输入地址</div>
				<div></div>
			</div>
			<div>
				<i className="icon"></i>
				<input type="text" />
			</div>
			
		</div>
	)
}

export default SearchPlace