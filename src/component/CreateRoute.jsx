import React, { Component, createRef } from 'react'
import Header from './Header'
import InputLine from './InputLine'
import SearchDialog from './SearchDialog'
import { 
	addDestination,
	deleteDestination,
	openOrCloaseSearchDialog,
	getPlaceSuggestion,
	clearPlaceSuggestion,
	getPlaceDetail
} from '../action/createRouteAction'
import icAdd from '../assets/image/ic_add.svg'
import icCross from '../assets/image/ic_cross.svg'

class CreateRoute extends Component {
	constructor(props) {
		super(props)
		
		this.handleAddBtnClick = this.handleAddBtnClick.bind(this)
		this.handleDeleteBtnClick = this.handleDeleteBtnClick.bind(this)
		this.handleInputBoxClick = this.handleInputBoxClick.bind(this)
		this.closeSearchDialog = this.closeSearchDialog.bind(this)
		this.handleSearchDialogInputChange = this.handleSearchDialogInputChange.bind(this)
		this.choosePlace = this.choosePlace.bind(this)

		this.state = {
			idx: 0
		}
	}

	handleAddBtnClick() {
		this.props.dispatch(addDestination())
	}

	handleDeleteBtnClick(e) {
		let destinations = this.props.destinations
		if (destinations.length === 1) return

		let index = e.currentTarget.id
		this.props.dispatch(deleteDestination(index))
	}

	handleInputBoxClick(idx, e) {
		this.props.dispatch(openOrCloaseSearchDialog(true))
		this.setState({
			idx
		})
	}

	closeSearchDialog(e) {
		this.props.dispatch(openOrCloaseSearchDialog(false))
		this.props.dispatch(clearPlaceSuggestion())
		this.inputElement.value = ''
	}

	handleSearchDialogInputChange(e) {
		let inputValue = e.currentTarget.value.trim()
		if (inputValue) {
			this.props.dispatch(getPlaceSuggestion(inputValue, '重庆'))
			let newState = Object.assign({}, this.state, {
				place: inputValue
			})
			this.setState(newState)
		} else {
			this.props.dispatch(clearPlaceSuggestion())
		}
	}

	choosePlace(index, e) {
		const uid = this.props.placeSuggestions[index].uid
		this.props.dispatch(getPlaceDetail(uid, this.state.idx))
		
		this.props.dispatch(openOrCloaseSearchDialog(false))
		this.props.dispatch(clearPlaceSuggestion())
		this.inputElement.value = ''
	}

	render() {
		return (
			<div>
				<div className="route-wrapper">
					<Header title="路线规划" />
					<form className="route-form">
						<label>起点</label>
						<br />
	 					<InputLine btnObj={{btnImg: icAdd, btnText: '新增', btnId: 1, btnType: 1, name: this.props.start.name ? this.props.start.name : '输入起点...' }} handleClick={this.handleAddBtnClick} handleInputBoxClick={this.handleInputBoxClick} />
						<br />
						<label>终点</label>
						<br />
						{
							this.props.destinations.map((item, key) => {
								const name = item.name ? item.name : '输入目的地...' 
								return <InputLine key={key} idx={key} btnObj={{btnImg: icCross, btnText: '删除', btnId: key, btnType: 2, name}} handleClick={this.handleDeleteBtnClick} handleInputBoxClick={this.handleInputBoxClick} />
							})
						}
					</form>
				</div>
				<SearchDialog isOpen={this.props.isSearchDialogOpen} closeSearchDialog={this.closeSearchDialog} placeSuggestions={this.props.placeSuggestions} handleSearchDialogInputChange={this.handleSearchDialogInputChange} inputRef={input => this.inputElement = input} choosePlace={this.choosePlace} />
			</div>
		)
	}
}

export default CreateRoute