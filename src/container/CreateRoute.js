import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../component/Header'
import InputLine from '../component/InputLine'
import { addDestination } from '../action/actions'
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
		this.handleInputBoxClick = this.handleInputBoxClick.bind(this)
	}

	handleAddBtnClick() {
		// let destinations = this.state.destinations
		// destinations.push({})
		// this.setState(Object.assign(this.state, {destinations}))
		this.props.dispatch(addDestination())
	}

	handleDeleteBtnClick(e) {
		let destinations = this.state.destinations
		if (destinations.length === 1) return

		let index = e.currentTarget.id
		destinations.splice(index, 1)
		this.setState(Object.assign(this.state, {destinations}))
	}

	handleInputBoxClick(e) {
		console.log('clicked')
	}

	render() {
		const { places } = this.props
		const destinations = places.destinations

		return (
			<div className="route-wrapper">
				<Header title="路线规划" />
				<form className="route-form">
					<label>起点</label>
					<br />
 					<InputLine btnObj={{btnImg: icAdd, btnText: '新增', btnId: 1, btnType: 1, name: this.state.start.name ? this.state.start.name : '输入起点...' }} handleClick={this.handleAddBtnClick} handleInputBoxClick={this.handleInputBoxClick} />
					<br />
					<label>终点</label>
					<br />
					{
						destinations.map((item, key) => {
							const name = item.name ? item.name : '输入目的地...' 
							return <InputLine key={key} btnObj={{btnImg: icCross, btnText: '删除', btnId: key, btnType: 2, name}} handleClick={this.handleDeleteBtnClick} handleInputBoxClick={this.handleInputBoxClick} />
						})
					}
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	const { places } = state
	return {
		places
	}
}

export default connect(mapStateToProps)(CreateRoute)