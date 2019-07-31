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

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(event, index) {
		this.props.history.push('/map')
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
						return key % 2 === 0 ? <PlaceBar key={key} place={item} /> : <RouteBar key={key} route={item} />
					})}
					<div className="newroutes-total">
						<div>{(parseFloat(totalDuration) / 60).toFixed(1) + '分钟'}</div>
						<div>{(parseFloat(totalDistance) / 1000).toFixed(2) + '公里'}</div>
						<div>25个热门</div>
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