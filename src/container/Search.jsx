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
		this.state = {
			destinations: []
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
		// const { dispatch } = this.props

		// const values = {
		// 	place: '华宇广场',
		// 	region: '重庆'
		// }

		// dispatch(get('http://39.98.198.86:3000/locations', values))

		let destinations = this.state.destinations
		destinations.push("请输入目的地")
		this.setState({
			destinations
		})
	}

	handleDeleteButtonClick(event, index) {
		console.log(index)
		let destinations = this.state.destinations
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
						<TextBox hint={this.props.start} />
						<AddButton handleClick={this.handleAddButtonClick} />
					</div>
					{this.state.destinations.map((destination, index) => {
						return (
							<div key={index}>
								<TextBox hint={destination} />
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