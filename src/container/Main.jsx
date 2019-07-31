import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddButton from '../component/AddButton'
import TextBox from '../component/TextBox'
import DeleteButton from '../component/DeleteButton'
import Header from '../component/Header'
import SearchButton from '../component/SearchButton'
import '../assets/sass/search.scss'
import '../assets/sass/searchlist.scss'

import { 
	httpRequest, 
	fetchCurrentLocation, 
	addPlace,
	deletePlace,
	setIndex
} from '../action/actions'

class Main extends Component {
	constructor(props) {
		super(props)

		this.handleAddButtonClick = this.handleAddButtonClick.bind(this)
		this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this)
		this.handleInputClick = this.handleInputClick.bind(this)
		this.handleSearchBtnClick = this.handleSearchBtnClick.bind(this)
	}

	componentDidMount() {
		const { dispatch } = this.props

		let currentLocation = JSON.parse(window.sessionStorage.getItem('currentLocation'))
		if (currentLocation) {
			dispatch(fetchCurrentLocation(currentLocation))			
		} else {
			const BMap = window.BMap
			const geolocation = new BMap.Geolocation()
			geolocation.getCurrentPosition(function(r) {
				const status = this.getStatus()
				if (status === 0) {
					const currentLocation = {
						location: r.point,
						province: r.address.province,
						city: r.address.city,
						district: r.address.district,
						street: r.address.street,
						name: r.address.street + ' [当前位置]'
					}
					dispatch(fetchCurrentLocation(currentLocation))
					window.sessionStorage.setItem('currentLocation', JSON.stringify(currentLocation))
				} else {
					alert('获取当前位置失败: ' + status)
				}
			}, {
				enableHighAccuracy: true
			})
		}
	}

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
		const { dispatch } = this.props

		dispatch(setIndex(index))

		this.props.history.push('/search')
	}

	/**
	 * Handle the onclick event of the Search Button
	 * @Author   q
	 * @DateTime 2019-05-03T23:46:52+0800
	 */
	async handleSearchBtnClick() {
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
		await dispatch(httpRequest(url, null, bodyToSend, 'POST', 'routes'))
		if (!isFetching) {
			// this.props.history.push('/routes')
			this.props.history.push('/newroutes')
		}
	}

	render() {
		return (
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

export default connect(mapStateToProps)(Main)