import { combineReducers } from 'redux'
import { IS_FETCHING, HANDLE_RESPONSE, HANDLE_ERROR } from '../action/actions'

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

		default:
			return state
	}
}

const reducer = combineReducers({
	http
})

export default reducer