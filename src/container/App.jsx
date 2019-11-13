import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store'
import Wrapper from './Wrapper'
import CreateRouteContainer from './CreateRouteContainer'
import RouteResultContainer from './RouteResultContainer'

const App = () => (
	<Provider store={store}>
		<Router>
			<Route path="/" exact component={Wrapper} />
			<Route path="/route/create" exact component={CreateRouteContainer} />
			<Route path="/route/result" exact component={RouteResultContainer} />
		</Router>
	</Provider>
)

export default App;