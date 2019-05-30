import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import AddButton from '../component/AddButton'
import TextBox from '../component/TextBox'
import DeleteButton from '../component/DeleteButton'
import Header from '../component/Header'
import SearchButton from '../component/SearchButton'
import '../assets/sass/search.scss'
import '../assets/sass/searchlist.scss'

import { 
	httpRequest, 
	getCurrentLocation, 
	clearPlaces,
	addPlace,
	deletePlace,
	choosePlace
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
			display: 'none',
			focus: false,
			index: 0
		}

		this.inputBoxRef = React.createRef()
	}

	componentDidMount() {
		// const { dispatch } = this.props

		// const BMap = window.BMap
		// const geolocation = new BMap.Geolocation()
		// geolocation.getCurrentPosition(function(r) {
		// 	const status = this.getStatus()
		// 	if (status === 0) {
		// 		console.log(JSON.stringify(r))
		// 		const currentLocation = {
		// 			location: r.point,
		// 			province: r.address.province,
		// 			city: r.address.city,
		// 			district: r.address.district
		// 		}
		// 		dispatch(getCurrentLocation(currentLocation))
		// 	} else {
		// 		console.log(status)
		// 	}
		// })
	}

	//---------------------------------------------Events on the Main Container---------------------------------------------------

	/**
	 * Handle onclick event of the Add Button
	 * @Author   q
	 * @DateTime 2019-05-03T23:39:01+0800
	 */
	handleAddButtonClick() {
		const { places, dispatch } = this.props

		if (places.length === 8) {
			alert('最多包含七个目的地')
			return
		}

		dispatch(addPlace())
	}

	/**
	 * Handle onclick event of the Delete Button
	 * @Author   q
	 * @DateTime 2019-05-03T23:39:55+0800
	 * @param    event the event object
	 * @param    index the index of the clicked item in the destinations array
	 */
	handleDeleteButtonClick(event, index) {
		console.log(index)

		const { places, dispatch } = this.props

		if (places.length === 2) {
			alert('最少一个目的地')
			return			
		}

		dispatch(deletePlace(index))
	}

	/**
	 * Handle onclick event of the input
	 * @Author   q
	 * @DateTime 2019-05-03T23:44:41+0800
	 * @param    event the event object
	 */
	handleInputClick(event, index) {
		const { places } = this.props

		const place = places[index]

		this.inputBoxRef.current.value = place && place.name ? place.name : ''

		this.setState({
			display: 'block',
			focus: true,
			index
		})
	}

	/**
	 * Handle the onclick event of the Search Button
	 * @Author   q
	 * @DateTime 2019-05-03T23:46:52+0800
	 */
	handleSearchBtnClick() {
		const { dispatch, isFetching, places } = this.props

		for (let i = 0; i < places.length; ++i) {
			let place = places[i]
			if (JSON.stringify(place) === '{}') {
				alert('请完成地址信息')
				return
			}
		}

		const startPoint = places[0]
		const destinationsPoints = places.slice(1, places.length)

		const bodyToSend = {
			start: startPoint,
			points: destinationsPoints
		}

		const url = 'https://api.cqbus405.com/routes'
		dispatch(httpRequest(url, null, bodyToSend, 'POST', 'routes'))
		if (!isFetching) {
			this.props.history.push('/routes')
		}
	}

	//---------------------------------------------Events on the Search Page---------------------------------------------------------

	/**
	 * Handle onclick event of the Back Button
	 * @Author   q
	 * @DateTime 2019-05-03T23:50:56+0800
	 * @param    event the event object
	 */
	handleBackBtnClick() {
		this.setState({
			display: 'none',
			focus: false,
			index: 0
		})

		this.inputBoxRef.current.value = ''

		const { dispatch } = this.props
		dispatch(clearPlaces())
	}

	/**
	 * Handle onchange event of the Input
	 * @Author   q
	 * @DateTime 2019-05-03T23:54:23+0800
	 * @param    event event object
	 */
	handleInputChange(event) {
		const { dispatch } = this.props

		let place = event.target.value

		if (!place) {
			dispatch(clearPlaces())
			return
		} else {
			const url = 'https://api.cqbus405.com/locations'
			dispatch(httpRequest(url, {
				region: '重庆',
				place
			}, null, 'GET', 'places'))
		}
	}

	/**
	 * Handle onclick event of the Input
	 * @Author   q
	 * @DateTime 2019-05-03T23:53:02+0800
	 * @param    event event object
	 */
	handlePlaceClick(event) {
		const { fetchedData, dispatch } = this.props
		const id = event.currentTarget.id

		const place = (fetchedData.places)[id]
		const index = this.state.index

		dispatch(choosePlace(index, place))
		
		this.handleBackBtnClick()
	}

	render() {
		return (
			<div style={{height: '100%'}}>
				<div>
					<Header />
					<div className="body-container">
						{this.props.places.map((place, index) => {
							return (
								<div key={index}>
									{	
										index === 0 ? 
											<TextBox hint={place.name ? place.name : '请输入起点'} handleInputClick={e => this.handleInputClick(e, index)} />
										:
											<TextBox hint={place.name ? place.name : '请输入目的地'} handleInputClick={e => this.handleInputClick(e, index)} />
									}
									{
										index === 0 ? 
											<AddButton handleClick={this.handleAddButtonClick} />
										:
											<DeleteButton handleClick={e => this.handleDeleteButtonClick(e, index)} />
									}
								</div>
							)
						})}
						<SearchButton handleSearchBtnClick={this.handleSearchBtnClick} />
					</div>
				</div>
				<div className="searchlist" style={{display: `${this.state.display}`}}>
					<div>
						<div className="backbtn" onClick={this.handleBackBtnClick}></div>
						<input type="text" placeholder="请输入地址" onChange={this.handleInputChange} ref={this.inputBoxRef} autoFocus={this.state.focus} />
					</div>
					<ul>
						{
							this.props.fetchedData && this.props.fetchedData.places ? this.props.fetchedData.places.map((place, index) => {
								return (
									<li key={index} id={index} onClick={this.handlePlaceClick}>
										<div className="list-container">
											<div className="list-item list-item-title">{place.name}</div>
											<div className="list-item list-item-detail">{place.district + ' ' + place.city + ' ' + place.province}</div>
										</div>
									</li>
								)
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
		places: state.places,
		fetchedData: state.http.data,
		isFetching: state.http.isFetching
	}
}

export default connect(mapStateToProps)(Search)