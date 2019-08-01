import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../assets/sass/newroutes.scss'
import ic_route from '../assets/image/ic_route.svg'
import PlaceBar from '../component/PlaceBar'
import RouteBar from '../component/RouteBar'
import Header from '../component/Header'

class Routes extends Component {
	constructor(props) {
		super(props)

		let { routes, places } = this.props

		let displayList = []

		let totalDuration = 0
		let totalDistance = 0
		for (let i = 0; i < routes.length; ++i) {
			let place = places[i]
			let route = routes[i]
			displayList.push(place)
			displayList.push(route)
		
			if (i === routes.length - 1) {
				let lastPlace = places[i + 1]
				displayList.push(lastPlace)
			}

			totalDistance += route.distance
			totalDuration += route.duration
		}

		this.state = {
			displayList,
			totalDuration,
			totalDistance
		}

		this.handleEditBtnClick = this.handleEditBtnClick.bind(this)
		this.handleMapBtnClick = this.handleMapBtnClick.bind(this)

		this.goToNewSearch = this.goToNewSearch.bind(this)
	}

	handleEditBtnClick() {
		this.props.history.push('/main')
	}

	handleMapBtnClick() {
		this.props.history.push('/map')
	}

	goToNewSearch() {
		this.props.history.push('/newsearch')
	}

	render() {
		let displayList = this.state.displayList
		let totalDuration = this.state.totalDuration
		let totalDistance = this.state.totalDistance

		return (
			<div>
				<Header />
				<div className="newroutes-wrapper">
					{displayList.map((item, key) => {
						return key % 2 === 0 ? <PlaceBar key={key} place={item} goToNewSearch={this.goToNewSearch} /> : <RouteBar key={key} route={item} goToNewSearch={this.goToNewSearch} />
					})}
					<div className="newroutes-total">
						<div><b>{(parseFloat(totalDuration) / 60).toFixed(1)}</b>分钟</div>
						<div><b>{(parseFloat(totalDistance) / 1000).toFixed(2)}</b>'公里'</div>
					</div>
					<div className="newroutes-btn-group">
						<div onClick={this.handleEditBtnClick}>编辑</div>
						<div>保存</div>
						<div>发布</div>
						<div onClick={this.handleMapBtnClick}>地图</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		routes: state.http.data.routes,
		places: state.places
	}
}

export default connect(mapStateToProps)(Routes)