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
		// console.log('添加地点')
		this.state.destinations.push(<TextBox hint="请输入目的地" />)
		console.log(JSON.stringify(this.state.destinations))
	}

	render() {
		return (
			<div style={{padding:'12px'}}>
				<TextBox hint="请输入起点" />
				<AddButton handleClick={this.handleClick} />
			</div>
		)
	}
}

export default Search