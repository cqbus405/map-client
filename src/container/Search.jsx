import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../assets/sass/searchlist.scss'

import { 
	httpRequest, 
	clearPlaces,
	choosePlace
} from '../action/actions'

class Search extends Component {
	constructor(props) {
		super(props)

		this.state = {
			place: this.props.places[this.props.index].name
		}

		this.handleBackBtnClick = this.handleBackBtnClick.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handlePlaceClick = this.handlePlaceClick.bind(this)

		this.inputBoxRef = React.createRef()
	}

	/**
	 * Handle onclick event of the Back Button
	 * @Author   q
	 * @DateTime 2019-05-03T23:50:56+0800
	 * @param    event the event object
	 */
	handleBackBtnClick() {
		this.inputBoxRef.current.value = ''

		const { dispatch } = this.props
		dispatch(clearPlaces())

		// this.props.history.push('/')
		this.props.history.push('/newsearch')
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
		const index = this.props.index
		dispatch(choosePlace(index, place))

		this.handleBackBtnClick()
	}

	componentDidMount() {
		this.inputBoxRef.current.value = this.state.place ? this.state.place : ''
	}

	render() {
		return (
			<div className="searchlist">
				<div>
					<div className="backbtn" onClick={this.handleBackBtnClick}></div>
					<input type="text" placeholder="请输入地址" onChange={this.handleInputChange} ref={this.inputBoxRef} />
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
		)
	}
}

const mapStateToProps = state => {
	return {
		fetchedData: state.http.data,
		index: state.place.index,
		places: state.places
	}
}

export default connect(mapStateToProps)(Search)