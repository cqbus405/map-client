import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store from '../store/store'
import Main from './Main'
import Search from './Search'
import Routes from './Routes'
import Map from './Map'

const App = () => (
	<Provider store={store.store}>
		<PersistGate loading={null} persistor={store.persistor}>
			<Router>
				<Route path="/" exact component={Main} />
				<Route path="/search" exact component={Search} />
				<Route path="/routes" exact component={Routes} />
				<Route path="/map" exact component={Map} />
			</Router>
		</PersistGate>
	</Provider>
)

export default App;