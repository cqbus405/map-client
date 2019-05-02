import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store'
import Search from './Search'
import MapContainer from './MapContainer'
import Routes from './Routes'

const App = () => (
	<Provider store={store}>
		<Router>
			<Route path="/" exact component={Search} />
			<Route path="/map" exact component={MapContainer} />
			<Route path="/routes" exact component={Routes} />
		</Router>
	</Provider>
)

export default App;