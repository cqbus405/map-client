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

      steps.map((step, key) => {
        let path = step.path
        let points = path.split(';')

        points.map((point, key2) => {
          let pointArr = point.split(',')
          let lng = pointArr[0]
          let lat = pointArr[1]
          if (key !== steps.length - 1 && key2 !== points.length - 1) {
            line.push(new BMap.Point(lng, lat))
          }
        })
      })
    }

    let symbol = new BMap.Symbol(window.BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
      scale: 0.6, //设置矢量图标的缩放比例
      strokeColor: '#fff', //设置矢量图标的线填充颜色,支持颜色常量字符串、十六进制、RGB、RGBA等格式
      strokeOpacity: 1,
      strokeWeight: 2, //旋设置线宽。如果此属性没有指定，则线宽跟scale数值相
    })

    let iconSequence = new BMap.IconSequence(symbol, '10', '2%', false)

    let polyLine = new BMap.Polyline(line, {
      strokeColor: '#18a45b',
      strokeWeight: 8,
      strokeOpacity: 0.8,
      enableClicking: false,
      icons: [iconSequence]
    })

    map.addOverlay(polyLine)
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