import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../assets/sass/map.scss'

class Map extends Component {
  componentDidMount() {
    let { start, routes } = this.props

    var BMap = window.BMap
    var map = new BMap.Map('container')
    var point = new BMap.Point(start.lng, start.lat)
    map.centerAndZoom(point, 15)

    var mk = new BMap.Marker(point);
    map.addOverlay(mk)

    let route = routes[0]
    let steps = route.steps
    steps.map(step => {
      let path = step.path
      let points = path.split(';')

      let line = []
      points.map(point => {
        let pointArr = point.split(',')
        let lng = pointArr[0]
        let lat = pointArr[1]
        line.push(new BMap.Point(lng, lat))
      })

      map.addOverlay(new BMap.Polyline(line, {
        strokeOpacity: 1,
        strokeWeight: 6
      }))
    })
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
    routes: state.http.data.routes
  }
}

export default connect(mapStateToProps)(Map);