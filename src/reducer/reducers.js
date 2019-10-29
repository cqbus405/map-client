import { combineReducers } from 'redux'
import { 
	GET_PLACE_SUGGESTION,
	IS_FETCHING,
	CLEAR_PLACE_SUGGESTION,
	ADD_DESTINATION,
	REMOVE_DESTINATION,
	OPEN_OR_CLOSE_SEARCH_DIALOG
} from '../action/createRouteAction'

const placeSuggestion = (state = {
	isFetching: false,
	statusCode: 0,
	errorMessage: 'ok',
	suggestions: null
}, action) => {
	switch (action.type) {
		case GET_PLACE_SUGGESTION:
			return Object.assign(state, {
				statusCode: action.statusCode,
				errorMessage: action.errorMessage,
				suggestions: [...action.suggestions],
				isFetching: action.isFetching
			})

		case IS_FETCHING:
			return Object.assign(state, {isFetching: action.isFetching})

		case CLEAR_PLACE_SUGGESTION:
			return Object.assign(state, {
				isFetching: false,
				statusCode: 0,
				errorMessage: 'ok',
				suggestions: []
			})

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

const dialogSwitch = (state = {searchDialog: false}, action) => {
	switch (action.type) {
		case OPEN_OR_CLOSE_SEARCH_DIALOG:
			return Object.assign({searchDialog: action.isOpen})

		default:
			return state
	}
}

const reducer = combineReducers({
	placeSuggestion,
	start,
	destinations,
	dialogSwitch
})

export default reducer