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
    map.enableScrollWheelZoom(true)

    // 设置map样式
    map.setMapStyle({styleJson: mapStyle})

    for (let i = 0; i < places.length; ++i) {
      let place = places[i]
      let location = place.location
      let point = new BMap.Point(location.lng, location.lat)
      let mk = new BMap.Marker(point)
      map.addOverlay(mk)      
    }

    let data = []
    let timeData = []

    let rs = []

    for (let i = 0; i < routes.length; ++i) {
      let route = routes[i]
      let steps = route.steps

      steps.map((step, key) => {
        let path = step.path
        path = path.replace(/;/g, ',')
        rs.push(path)
      })
    }

    const mapv = window.mapv

    let maxLength = 0
    for (let i = 0; i < rs.length; i++) {
      let item = rs[i].split(',')
      let coordinates = []
      if (item.length > maxLength) {
        maxLength = item.length
      }
      for (let j = 0; j < item.length; j += 2) {
        coordinates.push([item[j], item[j + 1]])
        timeData.push({
          geometry: {
            type: 'Point',
            coordinates: [item[j], item[j + 1]]
          },
          count: 1,
          time: j
        })
      }
      data.push({
        geometry: {
          type: 'LineString',
          coordinates: coordinates
        }
      })
    }

    const dataSet = new mapv.DataSet(data)

    const options = {
      strokeStyle: 'rgba(50, 50, 255, 0.8)',
      // coordType: 'bd09mc',
      // globalCompositeOperation: 'lighter',
      shadowColor: 'rgba(53,57,255,0.2)',
      shadowBlur: 3,
      lineWidth: 3.0,
      draw: 'simple'
    }

    let mapvLayer = new mapv.baiduMapLayer(map, dataSet, options)


    const dataSet2 = new mapv.DataSet(timeData)

    const options2 = {
      fillStyle: 'rgba(255, 250, 250, 0.2)',
      // coordType: 'bd09mc',
      globalCompositeOperation: "lighter",
      size: 1.5,
      animation: {
        stepsRange: {
          start: 0,
          end: 100 
        },
        trails: 3,
        duration: 5,
      },
      draw: 'simple'
    }

    let mapvLayer2 = new mapv.baiduMapLayer(map, dataSet2, options2)
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

export default connect(mapStateToProps)(Map)