import React, { Component } from 'react'
import {
	getRoute
} from '../action/createRouteAction'
import AddressLine from './AddressLine'
import RouteInfoLine from './RouteInfoLine'

class RouteResult extends Component {
	// constructor(props) {
	// 	super(props)
	// }

	componentDidMount() {
		const { payload } = this.props
		this.props.dispatch(getRoute(payload))
	}

	render() {
		let { statusCode, errorMessage, data } = this.props.routeData
		let contents = []

		if (parseInt(statusCode) !== 0) {
			window.alert(errorMessage)
		} else {
			if (data) {
				let { points, routes, steps } = data
				contents = [...points]
				for (let i = 0; i < points.length; ++i) {
					if (i < points.length - 1) {
						contents.splice(i + 1, 0, routes[i])
					}
				}
			}
		}

		return (
			<div>{
				contents.map((item, key) => {
					return key % 2 === 0 ? <AddressLine key={key} content={item} /> : <RouteInfoLine key={key} content={item} />
				})
			}</div>
		)
	}
}

export default RouteResult