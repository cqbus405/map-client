import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddButton from '../component/AddButton'
import TextBox from '../component/TextBox'
import DeleteButton from '../component/DeleteButton'
import Header from '../component/Header'
import SearchButton from '../component/SearchButton'
import '../assets/sass/search.scss'
// import { get } from '../action/actions'

class Search extends Component {
	constructor(props) {
		super(props)
		this.handleAddButtonClick = this.handleAddButtonClick.bind(this)
		this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
		this.state = {
			destinations: [
				"请输入目的地"
			],
			start: {}
		}
	}

	handleInputChange(event) {
		console.log(event.target)
		// console.log(event.target.value)
	}

	handleAddButtonClick() {
		// const { dispatch } = this.props

		// const values = {
		// 	place: '华宇广场',
		// 	region: '重庆'
		// }

		// dispatch(get('http://39.98.198.86:3000/locations', values))

		let destinations = this.state.destinations

		/*最多包含5个目的地*/
		if (destinations.length === 5) {
			alert('最多包含五个目的地')
			return
		}

		destinations.push("请输入目的地")
		this.setState({
			destinations
		})
	}

	handleDeleteButtonClick(event, index) {
		console.log(index)
		let destinations = this.state.destinations

		/*最少包含一个目的地*/
		if (destinations.length === 1) {
			alert('最少一个目的地')
			return
		}

		destinations.splice(index, 1)
		this.setState({
			destinations
		})
	}

	render() {
		return (
			<div>
				<Header />
				<div className="body-container">
					<div>
						<TextBox id={`start`} hint="请输入起点" handleOnChange={e => this.handleInputChange(e)} />
						<AddButton handleClick={this.handleAddButtonClick} />
					</div>
					{this.state.destinations.map((destination, index) => {
						return (
							<div key={index}>
								<TextBox id={`destination${index}`} hint={destination} handleOnChange={e => this.handleInputChange(e)} />
								<DeleteButton handleClick={e => this.handleDeleteButtonClick(e, index)} />
							</div>
						)
					})}
					<SearchButton />
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {}
}

export default connect(mapStateToProps)(Search)