import { connect } from 'react-redux'
import CreateRoute from '../component/CreateRoute'

const mapStateToProps = state => {
	return {
		start: state.places.start,
		destinations: state.places.destinations
	}
}

const CreateRouteContainer = connect(mapStateToProps)(CreateRoute)

export default CreateRouteContainer