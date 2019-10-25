import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from '../component/Footer'

class Wrapper extends Component {
	constructor(props) {
		super(props)

		// 初始化状态
		this.state = {
			pages: [{
				url: 'ic_content',
				alt: '内容',
				page: 'Contents',
				isCurrent: true
			}, {
				url: 'ic_new',
				alt: '创建',
				page: 'New',
				isCurrent: false
			}, {
				url: 'ic_search',
				alt: '搜索',
				page: 'Search',
				isCurrent: false				
			}, {
				url: 'ic_me',
				alt: '我',
				page: 'Me',
				isCurrent: false				
			}],
			current: 0
		}

		// 绑定时间处理函数
		this.handleFooterBtnClick = this.handleFooterBtnClick.bind(this)
	}

	handleFooterBtnClick(e) {
		let nextKey = parseInt(e.currentTarget.getAttribute('data-value'))
		let currentKey = parseInt(this.state.current)

		let pages = this.state.pages
		let currentItem = pages[currentKey]
		let nextItem = pages[nextKey]

		currentItem.isCurrent = false
		nextItem.isCurrent = true

		this.setState({
			pages,
			current: nextKey
		})
	}

	render() {
		let currentKey = this.state.current
		let currentPage = this.state.pages[currentKey].page
		let Page = require(`../component/${currentPage}.jsx`).default // .default !!!
		return (
			<div className="wrapper">
				<Page />
				<Footer handleClick={this.handleFooterBtnClick} items={this.state.pages} />
			</div>
		)
	}
}

export default connect()(Wrapper)