import fetch from 'cross-fetch'

export const IS_FETCHING = 'IS_FETCHING'
export const HANDLE_RESPONSE = 'HANDLE_RESPONSE'
export const HANDLE_ERROR = 'HANDLE_ERROR'
export const GET = 'GET'
export const GET_CURRENT_LOCATION = 'GET_CURRENT_LOCATION'
export const CLEAR_PLACES = 'CLEAR_PLACES'

const isFetching = isFetching => {
	return {
		type: IS_FETCHING,
		isFetching
	}
}

const handleResponse = data => {
	return {
		type: HANDLE_RESPONSE,
		data
	}
}

const handleError = error => {
	return {
		type: HANDLE_ERROR,
		error
	}
}

export const get = (url, values, body, method) => {
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
				console.log(response)
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
					dispatch(handleResponse(data))
				}
			})
	}
}

export const getCurrentLocation = currentLocation => {
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