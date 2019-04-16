import React, { Component } from 'react';
import './App.css';

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
            <input className="input" type="text" />
          </div>
        </div>
        <div id="container"></div>
      </div>
    );
  }
}

export default App;