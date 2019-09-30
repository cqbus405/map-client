import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store from '../store/store'
import Wrapper from './Wrapper'
import CreateRoute from './CreateRoute'

const App = () => (
	<Provider store={store.store}>
		<PersistGate loading={null} persistor={store.persistor}>
			<Router>
				<Route path="/" exact component={Wrapper} />
				<Route path="/route/create" exact component={CreateRoute} />
			</Router>
		</PersistGate>
	</Provider>
)

export default App;