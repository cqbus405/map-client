import React from 'react'
import '../assets/sass/routebar.scss'

const RouteBar = props => {
	let { route, goToNewSearch } = props

	return (
		<div className="routebar-wrapper">
			<div className="routebar-left">
				<div className="routebar-transport">
					<div>自驾</div>
					<div>步行</div>
					<div>火车</div>
					<div>公交</div>
					<div>骑行</div>
					<div>打车</div>
				</div>
				<div className="routebar-info">
					<div>{(parseFloat(route.duration) / 60).toFixed(1) + '分钟'}</div>
					<div>{(parseFloat(route.distance) / 1000).toFixed(2) + '公里'}</div>
					<div>25个热门</div>
				</div>
			</div>
			<div className="routebar-right">
				<div onClick={goToNewSearch}>沿途</div>
				<div>结伴</div>
			</div>
		</div>
	)
}

export default RouteBar