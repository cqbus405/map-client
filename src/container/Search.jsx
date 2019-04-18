import React, { Component } from 'react';
import AddButton from '../component/AddButton'
import TextBox from '../component/TextBox'
import DeleteButton from '../component/DeleteButton'

class Search extends Component {
	constructor(props) {
		super(props)
		this.handleAddButtonClick = this.handleAddButtonClick.bind(this)
		this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this)
		this.state = {
			destinations: []
		}
	}

	handleAddButtonClick() {
		let destinations = this.state.destinations
		destinations.push("请输入目的地")
		this.setState({
			destinations
		})
	}

	handleDeleteButtonClick(event, index) {
		console.log(index)
	}

	render() {
		return (
			<div style={{padding:'12px'}}>
				<TextBox hint="请输入起点" />
				{this.state.destinations.map((destination, index) => {
					return (
						<div key={index}>
							<TextBox hint={destination} />
							<DeleteButton handleClick={e => this.handleDeleteButtonClick(e, index)} />
						</div>
					)
				})}
				<AddButton handleClick={this.handleAddButtonClick} />
			</div>
		)
	}
}

export default Search