import React, { Component } from 'react'
import Header from '../component/Header'
import InputLine from '../component/InputLine'
import { 
	addDestination,
	deleteDestination
} from '../action/actions'
import icAdd from '../assets/image/ic_add.svg'
import icCross from '../assets/image/ic_cross.svg'

class CreateRoute extends Component {
	constructor(props) {
		super(props)
		
		this.handleAddBtnClick = this.handleAddBtnClick.bind(this)
		this.handleDeleteBtnClick = this.handleDeleteBtnClick.bind(this)
		this.handleInputBoxClick = this.handleInputBoxClick.bind(this)
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

	handleInputBoxClick(e) {
		console.log('clicked')
	}

	render() {
		return (
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
							return <InputLine key={key} btnObj={{btnImg: icCross, btnText: '删除', btnId: key, btnType: 2, name}} handleClick={this.handleDeleteBtnClick} handleInputBoxClick={this.handleInputBoxClick} />
						})
					}
				</form>
			</div>
		)
	}
}

export default CreateRoute