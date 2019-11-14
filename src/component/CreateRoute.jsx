import React, { Component } from 'react'
import Header from './Header'
import InputLine from './InputLine'
import SearchDialog from './SearchDialog'
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
		this.handleNextStepClick = this.handleNextStepClick.bind(this)

		this.state = {
			idx: 0,
			name: ''
		}
	}

	handleAddBtnClick() {
		this.props.addDestination()
	}

	handleDeleteBtnClick(e) {
		let destinations = this.props.destinations
		if (destinations.length === 1) return

		let index = e.currentTarget.id
		this.props.deleteDestination(index)
	}

	handleInputBoxClick(idx, e) {
		let name = ''
		if (idx !== undefined) {
			name = this.props.destinations[idx].name
		} else {
			name = this.props.start.name
		}
		this.setState({
			idx,
			name
		})		
		this.props.openOrCloaseSearchDialog(true)
	}

	closeSearchDialog(e) {
		this.props.openOrCloaseSearchDialog(false)
		this.props.clearPlaceSuggestion()
		this.setState({name: ''})
	}

	handleSearchDialogInputChange(e) {
		let inputValue = e.currentTarget.value.trim()
		this.setState({name: inputValue})
		if (inputValue) {
			this.props.getPlaceSuggestion(inputValue, '重庆')
		} else {
			this.props.clearPlaceSuggestion()
		}
	}

	choosePlace(index, e) {
		const uid = this.props.placeSuggestions[index].uid
		this.props.getPlaceDetail(uid, this.state.idx)
		
		this.props.openOrCloaseSearchDialog(false)
		this.props.clearPlaceSuggestion()
		this.setState({name: ''})
	}

	handleNextStepClick() {
		const {start, destinations} = this.props
		if (JSON.stringify(start) === '{}') {
			window.alert('未输入起点')
			return
		}

		for (let i = 0; i < destinations.length; ++i) {
			if (JSON.stringify(destinations[i]) === '{}') {
				window.alert('有未输入的目的地')
				return
			}			
		}

		this.props.history.push('/route/result')
	}

	render() {
		return (
			<div>
				<div className="route-wrapper">
					<Header 
						title="路线规划" handleNextStepClick={this.handleNextStepClick}
					/>
					<form className="route-form">
						<label>起点</label>
						<br />
	 					<InputLine 
	 						btnObj={{
	 							btnImg: icAdd, 
	 							btnText: '新增', 
	 							btnId: 1, 
	 							btnType: 1, 
	 							name: this.props.start.name ? this.props.start.name : '输入起点...' 
	 						}} 
	 						handleClick={this.handleAddBtnClick} 
	 						handleInputBoxClick={this.handleInputBoxClick} 
	 					/>
						<br />
						<label>终点</label>
						<br />
						{
							this.props.destinations.map((item, key) => {
								const name = item.name ? item.name : '输入目的地...' 
								return (
									<InputLine 
										key={key} 
										idx={key} 
										btnObj={{
											btnImg: icCross, 
											btnText: '删除', 
											btnId: key, 
											btnType: 2, 
											name
										}} 
										handleClick={this.handleDeleteBtnClick} 
										handleInputBoxClick={this.handleInputBoxClick} 
									/>
								)
							})
						}
					</form>
				</div>
				<SearchDialog 
					name={this.state.name} 
					isOpen={this.props.isSearchDialogOpen} 
					closeSearchDialog={this.closeSearchDialog} 
					placeSuggestions={this.props.placeSuggestions} 
					handleSearchDialogInputChange={this.handleSearchDialogInputChange} 
					inputRef={input => this.inputElement = input} 
					choosePlace={this.choosePlace} 
				/>
			</div>
		)
	}
}

export default CreateRoute