import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddButton from '../component/AddButton'
import TextBox from '../component/TextBox'
import DeleteButton from '../component/DeleteButton'
import Header from '../component/Header'
import SearchButton from '../component/SearchButton'
import '../assets/sass/search.scss'
import '../assets/sass/searchlist.scss'

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
		this.handleSearchBtnClick = this.handleSearchBtnClick.bind(this)

		this.state = {
			destinations: ['请输入目的地'],
			start: {},
			display: 'none',
			index: 0
		}

		this.inputBoxRef = React.createRef()
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

		this.inputBoxRef.current.value = ''

		const { dispatch } = this.props
		dispatch(clearPlaces())
	}

	handleInputClick(event) {
		let inputId = event.target.id

		this.setState({
			display: 'block',
			index: inputId
		})

		const key = inputId.split('_')[1] - 1
		let value = null

		if (key === -1) {
			value = this.state.start
		} else {
			value = this.state.destinations[key]
		}
		console.log(`value`, value)

		this.inputBoxRef.current.value = value.name ? value.name : ''
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

	handleSearchBtnClick() {
		const { dispatch } = this.props

		const startPoint = this.state.start
		if (Object.keys(startPoint).length === 0) {
			alert('必须输入起点')
			return
		}

		const destinationsPoints = this.state.destinations
		if (destinationsPoints.length === 1 && destinationsPoints[0] === '请输入目的地') {
			alert('至少输入一个目的地')
			return
		}

		const bodyToSend = {
			start: startPoint,
			points: destinationsPoints
		}

		console.log(JSON.stringify(bodyToSend))

		const url = 'http://39.98.198.86:3000/routes'
		dispatch(get(url, null, bodyToSend, 'POST'))
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
						<SearchButton handleSearchBtnClick={this.handleSearchBtnClick} />
					</div>
				</div>
				<div className="searchlist" style={{display: `${this.state.display}`}}>
					<div className="backbtn" onClick={this.handleBackBtnClick}></div>
					<input type="text" placeholder="请输入地址" onChange={this.handleInputChange} ref={this.inputBoxRef} />
					<ul>
						{
							this.props.places ? this.props.places.map((place, index) => {
								return <li key={index} id={index} onClick={this.handlePlaceClick}>{place.name + ' ' + place.district + ' ' + place.city + ' ' + place.province}</li>
							}) : ''
						}
					</ul>
				</div>
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