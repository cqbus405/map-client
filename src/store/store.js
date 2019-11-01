import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from '../reducer/reducers'

// const loggerMiddleware = createLogger()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const middleware = applyMiddleware(
// 	thunkMiddleware,
// 	loggerMiddleware
// )

const middleware = applyMiddleware(
	thunkMiddleware
)

let store = createStore(reducer, composeEnhancers(middleware))

export default store