import fetch from 'cross-fetch'

export const IS_FETCHING = 'IS_FETCHING'
export const HANDLE_RESPONSE = 'HANDLE_RESPONSE'
export const HANDLE_ERROR = 'HANDLE_ERROR'
export const GET = 'GET'

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

export const get = (url, values) => {
	return dispatch => {
		dispatch(isFetching(true))

		let queryParam = '?'

		for (let item in values) {
			queryParam += `${item}=${values[item]}&`
		}

		queryParam = queryParam.substring(0, queryParam.length - 1)

		let endPoint = url + queryParam

		return fetch(endPoint)
			.then(response => {
				dispatch(isFetching(false))
				return response.json()
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

