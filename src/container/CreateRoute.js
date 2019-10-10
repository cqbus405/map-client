import React, { Component } from 'react'
import Header from '../component/Header'
import InputLine from '../component/InputLine'
import icAdd from '../assets/image/ic_add.svg'
import icCross from '../assets/image/ic_cross.svg'

class CreateRoute extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			start: {},
			destinations: [{}]
		}

		this.handleAddBtnClick = this.handleAddBtnClick.bind(this)
		this.handleDeleteBtnClick = this.handleDeleteBtnClick.bind(this)
	}

	handleAddBtnClick() {
		let destinations = this.state.destinations
		destinations.push({})
		this.setState(Object.assign(this.state, {destinations}))
	}

	handleDeleteBtnClick(e) {
		let destinations = this.state.destinations
		if (destinations.length === 1) return

		let index = e.currentTarget.id
		destinations.splice(index, 1)
		this.setState(Object.assign(this.state, {destinations}))
	}

	render() {
		return (
			<div className="route-wrapper">
				<Header title="路线规划" />
				<form className="route-form">
					<label>起点</label>
					<br />
					<InputLine btnObj={{btnImg: icAdd, btnText: '新增', btnId: 1, btnType: 1}} handleClick={this.handleAddBtnClick} />
					<br />
					<label>终点</label>
					<br />
					{
						this.state.destinations.map((item, key) => {
							return <InputLine key={key} btnObj={{btnImg: icCross, btnText: '删除', btnId: key, btnType: 2}} handleClick={this.handleDeleteBtnClick} />
						})
					}
				</form>
			</div>
		)
	}
}

export default CreateRoute