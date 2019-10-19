import fetch from 'cross-fetch'

export const IS_FETCHING = 'IS_FETCHING'
export const HANDLE_RESPONSE = 'HANDLE_RESPONSE'
export const HANDLE_ERROR = 'HANDLE_ERROR'
export const GET = 'GET'
export const GET_CURRENT_LOCATION = 'GET_CURRENT_LOCATION'
export const CLEAR_PLACES = 'CLEAR_PLACES'
export const ADD_DESTINATION = 'ADD_DESTINATION'
export const REMOVE_DESTINATION = 'REMOVE_DESTINATION'
export const CHOOSE_PLACE = 'CHOOSE_PLACE'
export const SET_INDEX = 'SET_INDEX'
export const HANDLE_SEARCH_PLACE_RESULT = 'HANDLE_SEARCH_PLACE_RESULT'

const isFetching = isFetching => {
	return {
		type: IS_FETCHING,
		isFetching
	}
}

const handleResponse = (data, type) => {
	return {
		type: HANDLE_RESPONSE,
		data,
		dataType: type
	}
}

const handleError = error => {
	return {
		type: HANDLE_ERROR,
		error
	}
}

export const httpRequest = (url, values, body, method, type) => {
	return (dispatch) => {
		dispatch(isFetching(true))

		let queryParam = '?'

		for (let item in values) {
			queryParam += `${item}=${values[item]}&`
		}

		queryParam = queryParam.substring(0, queryParam.length - 1)

		let endPoint = url + queryParam

		let requestMethod = method ? method : 'GET'

		let options = {
			method: requestMethod
		}

		if (body) {
			options.headers = {
				"Content-Type": "application/json"
			}

			options.body = JSON.stringify(body)
		}

		return fetch(endPoint, options)
			.then(response => {
				dispatch(isFetching(false))
				if (response.ok) {
					return response.json()
				} else {
					let code = response.status
					let errmsg = response.statusText
					return {
						code,
						msg: errmsg
					}
				}
			})
			.then(json => {
				let code = json.code
				if (code !== 0) {
					let errmsg = json.msg
					dispatch(handleError(code + ' ' + errmsg))
				} else {
					let data = json.data
					// 1 搜索地点信息
					type = typeof type === 'number' ? type : parseInt(type)
					if (type === 1) {
						dispatch(handleSearchPlaceResult(data))
					} else {
						dispatch(handleResponse(data, type))
					}
				}
			})
	}
}

export const handleSearchPlaceResult = data => {
	return {
		type: HANDLE_SEARCH_PLACE_RESULT,
		data
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

export const choosePlace = (index, place) => {
	return {
		type: CHOOSE_PLACE,
		index,
		place
	}
}

export const fetchCurrentLocation = currentLocation => {
	return {
		type: GET_CURRENT_LOCATION,
		currentLocation
	}
}

export const clearPlaces = () => {
	return {
		type: CLEAR_PLACES
	}
}

export const setIndex = index => {
	return {
		type: SET_INDEX,
		index
	}
}