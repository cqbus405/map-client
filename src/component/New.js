import React from 'react'
import { Link } from 'react-router-dom'
import icRoute from '../assets/image/ic_route.svg'
import icMark from '../assets/image/ic_mark.svg'
import icWrite from '../assets/image/ic_write.svg'

const New = props => {
	return (
		<div className="new-wrapper">
			<div>
				<Link to="/route/create">
					<img src={icRoute} alt="路线规划" />
					<p>路线规划</p>
				</Link>
			</div>
			<div>
				<Link to="#">
					<img src={icMark} alt="打卡" />
					<p>打卡</p>
				</Link>
			</div>
			<div>
				<Link to="#">
					<img src={icWrite} alt="写游记" />
					<p>写游记</p>
				</Link>
			</div>
		</div>
	)
}

export default New