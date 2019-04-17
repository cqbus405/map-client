import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  componentDidMount() {
    var BMap = window.BMap
    var map = new BMap.Map("container", {mapStyle: {style: 'dark'}})
    var point = new BMap.Point(106.468834, 29.561632)
    map.centerAndZoom(point, 15);
  }

  render() {
    return (
      <div className="App">
        <div className="input-container">
          <div className="input-inner-container">
            <input className="input" type="search" placeholder="请输入起点" />
            <div style={{height:'1px',width:'100%',backgroundColor:'black'}}></div>
            <input className="input" type="search" placeholder="请输入终点" />
          </div>
        </div>
        <div id="container"></div>
      </div>
    );
  }
}

export default App;