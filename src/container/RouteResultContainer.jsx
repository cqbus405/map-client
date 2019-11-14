import { connect } from 'react-redux'
import RouteResult from '../component/RouteResult'

const mapStateToProps = state => {
	return {
		payload: {
			start: state.start,
			destinations: state.destinations
		},
		routeData: state.routeData
	}
}

const RouteResultContainer = connect(mapStateToProps)(RouteResult)

export default RouteResultContainer