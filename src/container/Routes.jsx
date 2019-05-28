import React, { Component } from 'react'
import { connect } from 'react-redux'

class Routes extends Component {
	render() {
		let { routes } = this.props

		return (
			<div>
				<ul>
					{routes ? routes.map((item, index) => {
						let route = item
						return (
							<div key={index}>
								<li></li>
								<li>{`距离:${route.distance}m 时间:${route.duration}s`}</li>
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