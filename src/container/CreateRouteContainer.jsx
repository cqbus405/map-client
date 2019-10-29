import { connect } from 'react-redux'
import CreateRoute from '../component/CreateRoute'

const mapStateToProps = state => {
	return {
		start: state.start,
		destinations: state.destinations,
		isSearchDialogOpen: state.dialogSwitch.searchDialog
	}
}

const CreateRouteContainer = connect(mapStateToProps)(CreateRoute)

export default CreateRouteContainer