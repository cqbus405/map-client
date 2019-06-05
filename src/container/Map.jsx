import React, { Component } from 'react'
import { connect } from 'react-redux'
import mapStyle from '../assets/file/mapstyle.json'
import '../assets/sass/map.scss'

class Map extends Component {
  componentDidMount() {
    let { start, routes, places } = this.props

    let BMap = window.BMap
    let map = new BMap.Map('container')

    let point = new BMap.Point(start.lng, start.lat)
    map.centerAndZoom(point, 15)

    // 设置map样式
    map.setMapStyleV2({styleJson: mapStyle})

    for (let i = 0; i < places.length; ++i) {
      let place = places[i]
      let location = place.location
      let point = new BMap.Point(location.lng, location.lat)
      let mk = new BMap.Marker(point)
      map.addOverlay(mk)      
    }

    let line = []

    for (let i = 0; i < routes.length; ++i) {
      let route = routes[i]
      let steps = route.steps

      steps.map(step => {
        let path = step.path
        let points = path.split(';')

        points.map(point => {
          let pointArr = point.split(',')
          let lng = pointArr[0]
          let lat = pointArr[1]
          line.push(new BMap.Point(lng, lat))
        })
      })
    }

    map.addOverlay(new BMap.Polyline(line, {
      strokeOpacity: 1,
      strokeWeight: 6
    }))
  }

  render() {
    return (
      <div id="container"></div>
    )
  }
}

const mapStateToProps = state => {
  return {
    start: (state.places)[0].location,
    routes: state.http.data.routes,
    places: state.places
  }
}

export default connect(mapStateToProps)(Map);