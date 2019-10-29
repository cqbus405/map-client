import React, { Component } from 'react'
import Header from './Header'
import InputLine from './InputLine'
import SearchDialog from './SearchDialog'
import { 
	addDestination,
	deleteDestination,
	openOrCloaseSearchDialog
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
		console.log(idx)
		this.props.dispatch(openOrCloaseSearchDialog(true))
	}

	closeSearchDialog(e) {
		this.props.dispatch(openOrCloaseSearchDialog(false))
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
				<SearchDialog isOpen={this.props.isSearchDialogOpen} closeSearchDialog={this.closeSearchDialog} />
			</div>
		)
	}
}

export default CreateRoute