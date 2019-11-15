import React from 'react'

const RouteInfoLine = props => {
	let { distance, duration, taxiFee } = props.content

	return (
		<div className="routeInfoLineWrapper">
			<div>{distance}</div>
			<div>{duration}</div>
			<div>打车约{taxiFee}</div>
		</div>
	)
}

export default RouteInfoLine