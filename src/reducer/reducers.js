import { combineReducers } from 'redux'
import { 
	IS_FETCHING, 
	HANDLE_RESPONSE, 
	HANDLE_ERROR,
	GET_CURRENT_LOCATION,
	CLEAR_PLACES
} from '../action/actions'

const http = (state = {
	isFetching: false,
	error: null,
	data: null
}, action) => {
	switch (action.type) {
		case IS_FETCHING:
			return Object.assign({}, state, {isFetching: action.isFetching})

		case HANDLE_RESPONSE:
			return Object.assign({}, state, {data: action.data})

		case HANDLE_ERROR:
			return Object.assign({}, state, {error: action.error})

		case CLEAR_PLACES:
			return Object.assign({}, state, {data: []})

		default:
			return state
	}
}

const places = (state = {
	start: null,
	points: []
}, action) => {
	switch (action.type) {
		case GET_CURRENT_LOCATION:
			return Object.assign({}, state, {start: action.currentLocation})

		default:
			return state
	}
}

const reducer = combineReducers({
	http,
	places
})

export default reducer