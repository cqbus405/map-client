import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
// import { createLogger } from 'redux-logger'
import reducer from '../reducer/reducers'

// const loggerMiddleware = createLogger()

const persistConfig = {
	key: 'root',
	storage: storageSession
}

const persistedReducer = persistReducer(persistConfig, reducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = applyMiddleware(
	thunkMiddleware,
	// loggerMiddleware
)

let store = createStore(persistedReducer, composeEnhancers(middleware))
let persistor = persistStore(store)

export default { store, persistor }