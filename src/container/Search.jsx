import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddButton from '../component/AddButton'
import TextBox from '../component/TextBox'
import DeleteButton from '../component/DeleteButton'
import Header from '../component/Header'
import SearchButton from '../component/SearchButton'
import '../assets/sass/search.scss'
import { get, getCurrentLocation } from '../action/actions'

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

	componentDidMount() {
		const { dispatch } = this.props

		const BMap = window.BMap
		const geolocation = new BMap.Geolocation()
		geolocation.getCurrentPosition(function(r) {
			const status = this.getStatus()
			if (status === 0) {
				console.log(JSON.stringify(r))
				const currentLocation = {
					location: r.point,
					province: r.address.province,
					city: r.address.city,
					district: r.address.district
				}
				dispatch(getCurrentLocation(currentLocation))
			} else {
				console.log(status)
			}
		})
	}

	handleAddButtonClick() {
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

	handleInputChange(event) {
		console.log(event.target)
	}

	render() {
		return (
			<div>
				<Header />
				<div className="body-container">
					<div>
						<TextBox id={`start`} hint={this.props.start} handleOnChange={e => this.handleInputChange(e)} />
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
	return {
		start: state.places.start ? '当前定位' :　''
	}
}

export default connect(mapStateToProps)(Search)