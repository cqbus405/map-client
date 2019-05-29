import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../assets/sass/routes.scss'

class Routes extends Component {
	render() {
		let { routes } = this.props

		return (
			<div>
				<ul className="routes-container">
					{routes ? routes.map((item, index) => {
						return (
							<div key={index}>
								<li className="route">{`${item.origin.name} - ${item.destination.name}`}</li>
								<li className="detail">{`距离:${(parseFloat(item.distance) / 1000).toFixed(2)}公里 时间:${(parseFloat(item.duration) / 60).toFixed(1)}分钟 ${item.tag}`}</li>
							</div>
						)
					}) : ''}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		routes: state.http.data.routes
	}
}

export default connect(mapStateToProps)(Routes)