import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store'
import Search from './Search'
import MapContainer from './MapContainer'
import Main from './Main'
import SearchNew from './SearchNew'

const App = () => (
	<Provider store={store}>
		<Router>
			<Route path="/" exact component={Search} />
			<Route path="/map" exact component={MapContainer} />
			<Route path="/main" exact component={Main} />
			<Route path="/search" exact component={SearchNew} />
		</Router>
	</Provider>
)

export default App;