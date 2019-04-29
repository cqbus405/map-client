import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddButton from '../component/AddButton'
import TextBox from '../component/TextBox'
import DeleteButton from '../component/DeleteButton'
import Header from '../component/Header'
import SearchButton from '../component/SearchButton'
import SearchList from '../component/SearchList'
import '../assets/sass/search.scss'
import { 
	get, 
	getCurrentLocation, 
	clearPlaces 
} from '../action/actions'

class Search extends Component {
	constructor(props) {
		super(props)

		this.handleAddButtonClick = this.handleAddButtonClick.bind(this)
		this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this)
		this.handleInputClick = this.handleInputClick.bind(this)
		this.handleBackBtnClick = this.handleBackBtnClick.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handlePlaceClick = this.handlePlaceClick.bind(this)

		this.state = {
			destinations: [
				"请输入目的地"
			],
			start: {},
			display: 'none',
			index: 0
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
				// alert('获取当前位置失败')
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

	handleBackBtnClick(event) {
		this.setState({
			display: 'none',
			index: 0
		})

		const { dispatch } = this.props
		dispatch(clearPlaces())
	}

	handleInputClick(event) {
		let inputId = event.target.id

		this.setState({
			display: 'block',
			index: inputId
		})
	}

	handlePlaceClick(event) {
		const id = event.target.id
		const { places } = this.props
		const place = places[id]
		const inputId = this.state.index
		const inputIdPair = inputId.split('_')
		const index = inputIdPair[1]

		if (parseInt(index) === 0) {
			this.setState({
				start: place
			})
		} else {
			const destinations = this.state.destinations
			destinations[index - 1] = place
			this.setState({
				destinations
			})
		}
		
		this.handleBackBtnClick()
	}

	handleInputChange(event) {
		const { dispatch } = this.props

		let place = event.target.value

		if (!place) {
			dispatch(clearPlaces())
			return
		} else {
			const url = 'http://39.98.198.86:3000/locations'
			dispatch(get(url, {
				region: '重庆',
				place
			}))
		}
	}

	render() {
		return (
			<div style={{height: '100%'}}>
				<div>
					<Header />
					<div className="body-container">
						<div>
							<TextBox id="point_0" hint={this.state.start.name ? this.state.start.name : this.props.start} handleInputClick={this.handleInputClick} />
							<AddButton handleClick={this.handleAddButtonClick} />
						</div>
						{this.state.destinations.map((destination, index) => {
							return (
								<div key={index}>
									<TextBox id={`point_${index + 1}`} hint={destination.name ? destination.name : destination} handleInputClick={this.handleInputClick} />
									<DeleteButton handleClick={e => this.handleDeleteButtonClick(e, index)} />
								</div>
							)
						})}
						<SearchButton />
					</div>
				</div>
				<SearchList display={this.state.display} handleBackBtnClick={this.handleBackBtnClick} handleInputChange={this.handleInputChange} places={this.props.places} 
				handlePlaceClick={this.handlePlaceClick} />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		start: state.places.start ? '当前定位' :　'请输入起点',
		places: state.http.data,
		isFetching: state.http.isFetching
	}
}

export default connect(mapStateToProps)(Search)