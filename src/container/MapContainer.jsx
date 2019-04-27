import React, { Component } from 'react'
import '../assets/sass/map.scss'

class MapContainer extends Component {
  componentDidMount() {
    var BMap = window.BMap
    var map = new BMap.Map('container')
    var point = new BMap.Point(106.468834, 29.561632)
    map.centerAndZoom(point, 15)
  }

  render() {
    return (
      <div id="container"></div>
    )
  }
}

export default MapContainer;