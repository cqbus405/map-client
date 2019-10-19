import { combineReducers } from 'redux'
import { 
	IS_FETCHING, 
	HANDLE_RESPONSE, 
	HANDLE_ERROR,
	GET_CURRENT_LOCATION,
	CLEAR_PLACES,
	ADD_DESTINATION,
	REMOVE_DESTINATION,
	CHOOSE_PLACE,
	SET_INDEX,
	HANDLE_SEARCH_PLACE_RESULT
} from '../action/actions'

const http = (state = {
	isFetching: false,
	error: null,
	data: {}
}, action) => {
	switch (action.type) {
		case IS_FETCHING:
			return Object.assign({}, state, {isFetching: action.isFetching})

		case HANDLE_RESPONSE:
			let dataToStore = {}
			dataToStore[action.dataType] = action.data
			return Object.assign({}, state, {data: dataToStore})

		case HANDLE_ERROR:
			return Object.assign({}, state, {error: action.error})

		case CLEAR_PLACES:
			return Object.assign({}, state, {data: {places: []}})

		default:
			return state
	}
}

const searchPlaceResult = (state = [], action) => {
	switch (action.type) {
		case HANDLE_SEARCH_PLACE_RESULT:
			return action.data

		default:
			return state
	}
}

const start = (state = {}, action) => {
	switch (action.type) {
		default:
			return state
	}
}

const destinations = (state = [{}], action) => {
	switch (action.type) {
		case ADD_DESTINATION:
			return [...state, {}]

		case REMOVE_DESTINATION:
			state.splice(action.index, 1)
			return [...state]

		default:
			return state
	}
}

const places = (state = {start: {}, destinations: [{}]}, action) => {
	switch (action.type) {
		case GET_CURRENT_LOCATION:
			state[0] = action.currentLocation
			return [...state]

		// case ADD_DESTINATION:
		// 	return Object.assign(state, {destinations: [...state.destinations, {}]})

		// case REMOVE_DESTINATION:
		// 	state.destinations.splice(action.index, 1)
		// 	return Object.assign(state, {destinations: [...state.destinations]})

		case CHOOSE_PLACE:
			const index = action.index
			const place = action.place
			state[index] = place
			return [...state]

		default:
			return state
	}
}

const place = (state = {
	index: 0,
	name: ''
}, action) => {
	switch (action.type) {
		case SET_INDEX:
			return Object.assign({}, state, {index: action.index})

		default:
			return state
	}
}

const reducer = combineReducers({
	http,
	places,
	place,
	start,
	destinations,
	searchPlaceResult
})

export default reducer