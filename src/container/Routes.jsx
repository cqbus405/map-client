import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../assets/sass/routes.scss'
import ic_route from '../assets/image/ic_route.svg'

class Routes extends Component {
	constructor(props) {
		super(props)

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(event, index) {
		this.props.history.push('/map')
	}

	render() {
		let { routes } = this.props

		return (
			<ul className="routes-container">
				{routes ? routes.map((item, index) => {
					return (
						<div className="routes-inner-container" key={index} onClick={e => this.handleClick(e, index)}>
							<div className="routes-item routes-item-number">{index + 1}</div>
							<div className="routes-item routes-item-content">
								<li className="route">{`${item.origin.name} 至 ${item.destination.name}`}</li>
								<li className="detail">{`距离:${(parseFloat(item.distance) / 1000).toFixed(2)}公里 时间:${(parseFloat(item.duration) / 60).toFixed(1)}分钟 ${item.tag}`}</li>
							</div>
							<div className="routes-item">
								<img src={ic_route} alt="ic_route" />
							</div>
						</div>
					)
				}) : ''}
			</ul>
		)
	}
}

const mapStateToProps = state => {
	return {
		routes: state.http.data.routes
	}
}

export default connect(mapStateToProps)(Routes)