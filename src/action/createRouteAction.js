import fetch from 'cross-fetch'

export const GET_PLACE_SUGGESTION = 'GET_PLACE_SUGGESTION'
export const IS_FETCHING = 'IS_FETCHING'
export const CLEAR_PLACE_SUGGESTION = 'CLEAR_PLACE_SUGGESTION'
export const ADD_DESTINATION = 'ADD_DESTINATION'
export const REMOVE_DESTINATION = 'REMOVE_DESTINATION'
export const OPEN_OR_CLOSE_SEARCH_DIALOG = 'OPEN_OR_CLOSE_SEARCH_DIALOG'
export const SAVE_PLACE_DETAIL = 'SAVE_PLACE_DETAIL'
export const SAVE_START = 'SAVE_START'

const BASE_URL = 'http://172.168.10.21:3001'

export const isFetching = isFetching => {
	return {
		type: IS_FETCHING,
		isFetching
	}
}

export const getPlaceSuggestion = (place, region) => {
	return dispatch => {
		return fetch(`${BASE_URL}/place/suggestions?place=${place}&region=${region}`)
		.then(res => res.json())
		.then(body => dispatch(savePlaceSuggestion(body)))
	}
}

export const clearPlaceSuggestion = () => {
	return {
		type: CLEAR_PLACE_SUGGESTION
	}
}

const savePlaceSuggestion = data => {
	return {
		type: GET_PLACE_SUGGESTION,
		suggestions: data.data,
		statusCode: data.errcode,
		errorMessage: data.message,
		isFetching: false
	}
}

export const addDestination = () => {
	return {
		type: ADD_DESTINATION
	}
}

export const deleteDestination = index => {
	return {
		type: REMOVE_DESTINATION,
		index
	}
}

export const openOrCloaseSearchDialog = isOpen => {
	return {
		type: OPEN_OR_CLOSE_SEARCH_DIALOG,
		isOpen
	}
}

export const getPlaceDetail = (uid, index) => {
	return dispatch => {
		return fetch(`${BASE_URL}/place/detail?uid=${uid}`)
		.then(res => res.json())
		.then(body => {
			if (index !== undefined) {
				dispatch(savePlaceDetail(index, body))
			} else {
				dispatch(saveStart(body))
			}
		})
	}
}

const savePlaceDetail = (index, data) => {
	return {
		type: SAVE_PLACE_DETAIL,
		detail: data.data,
		index
	}
}

const saveStart = data => {
	return {
		type: SAVE_START,
		detail: data.data
	}
}