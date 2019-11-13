import React, { Component } from 'react'
import {
	getRoute
} from '../action/createRouteAction'

class RouteResult extends Component {
	// constructor(props) {
	// 	super(props)
	// }

	componentDidMount() {
		const { payload } = this.props
		this.props.dispatch(getRoute(payload))
	}

	render() {
		return (
			<div>
				
			</div>
		)
	}
}

export default RouteResult