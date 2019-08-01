import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store from '../store/store'
import Main from './Main'
import Search from './Search'
// import Routes from './Routes'
import Map from './Map'
import FirstPage from './FirstPage'
import SearchNew from './SearchNew'
import RoutesNew from './RoutesNew'
import Place from './Place'

const App = () => (
	<Provider store={store.store}>
		<PersistGate loading={null} persistor={store.persistor}>
			<Router>
				<Route path="/" exact component={Main} />
				<Route path="/main" exact component={Main} />
				<Route path="/search" exact component={Search} />
				<Route path="/firstpage" exact component={FirstPage} />
				<Route path="/map" exact component={Map} />
				<Route path="/newsearch" exact component={SearchNew} />
				<Route path="/newroutes" exact component={RoutesNew} />
				<Route path="/place" exact component={Place} />
			</Router>
		</PersistGate>
	</Provider>
)

export default App;