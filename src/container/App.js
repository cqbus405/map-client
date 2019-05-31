import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store'
import Main from './Main'
import Search from './Search'
import Routes from './Routes'
import MapContainer from './MapContainer'

const App = () => (
	<Provider store={store}>
		<Router>
			<Route path="/" exact component={Main} />
			<Route path="/search" exact component={Search} />
			<Route path="/routes" exact component={Routes} />
			<Route path="/map" exact component={MapContainer} />
		</Router>
	</Provider>
)

export default App;