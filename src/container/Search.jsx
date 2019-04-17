import React, { Component } from 'react';
import AddButton from '../component/AddButton'
import TextBox from '../component/TextBox'

class Search extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.state = {
			destinations: []
		}
	}

	handleClick() {
		let destinations = this.state.destinations
		destinations.push("请输入目的地")
		this.setState({
			destinations
		})
	}

	render() {
		return (
			<div style={{padding:'12px'}}>
				<TextBox hint="请输入起点" />
				<ul>{this.state.destinations.map((destination, key) => <TextBox key={key} hint={destination} />)}</ul>
				<AddButton handleClick={this.handleClick} />
			</div>
		)
	}
}

export default Search