import { connect } from 'react-redux'
import CreateRoute from '../component/CreateRoute'
import { 
	addDestination,
	deleteDestination,
	openOrCloaseSearchDialog,
	getPlaceSuggestion,
	clearPlaceSuggestion,
	getPlaceDetail
} from '../action/createRouteAction'

const mapStateToProps = state => {
	return {
		start: state.start,
		destinations: state.destinations,
		isSearchDialogOpen: state.dialogSwitch.searchDialog,
		placeSuggestions: state.placeSuggestion.suggestions
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addDestination: () => dispatch(addDestination()),
		deleteDestination: index => dispatch(deleteDestination(index)),
		openOrCloaseSearchDialog: isOpen => dispatch(openOrCloaseSearchDialog(isOpen)),
		getPlaceSuggestion: (inputValue, city) => dispatch(getPlaceSuggestion(inputValue, city)),
		clearPlaceSuggestion: () => dispatch(clearPlaceSuggestion()),
		getPlaceDetail: (uid, index) => dispatch(getPlaceDetail(uid, index))
	}
}

const CreateRouteContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CreateRoute)

export default CreateRouteContainer