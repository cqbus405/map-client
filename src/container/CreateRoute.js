import React, { Component } from 'react'
import Header from '../component/Header'

class CreateRoute extends Component {
	render() {
		return (
			<div className="route-wrapper">
				<Header title="路线规划" />
				<form className="route-form">
					<label>起点</label>
					<br />
					<input id="start" type="text" />
					<br />
					<label>终点</label>
					<br />
					<input id="destination" type="text" />
				</form>
			</div>
		)
	}
}

export default CreateRoute