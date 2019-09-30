import React, { Component } from 'react'

class CreateRoute extends Component {
	render() {
		return (
			<form className="route">
				<label for="start">起点</label>
				<br />
				<input id="start" type="text" />
				<br />
				<label for="destination">终点</label>
				<br />
				<input id="destination" type="text" />
			</form>
		)
	}
}

export default CreateRoute