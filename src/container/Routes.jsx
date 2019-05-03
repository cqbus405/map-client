import React, { Component } from 'react'
import { connect } from 'react-redux'

class Routes extends Component {
	render() {
		let { routes } = this.props

		return (
			<div>
				<ul>
					{routes ? routes.map((item, index) => {
						let route = item.routes[0]
						return <li key={index}>{`距离:${route.distance}m 时间:${route.duration}s`}</li>
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