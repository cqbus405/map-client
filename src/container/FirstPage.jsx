import React, { Component } from 'react'
import '../assets/sass/main.scss'

class FirstPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			fakeData: [{
				id: 1,
				title: '大溪地艾薇度假酒店,值得',
				distance: '23km',
				images: [
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564337948157&di=e43277bf27669e3523a8bd1a0cc80466&imgtype=0&src=http%3A%2F%2Fimg1.badazhou.com%2Fuploads%2Fimages%2Fbadazhou%2Foceania%2Ftahiti%2Fborabora%2Ffourseasons%2F51f902756b94a.jpg'
				],
				user: '看脸87斤',
				hot: 8.7,
				comments: 257,
				like: 2314,
				avatar: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2131852904,352554911&fm=27&gp=0.jpg',
				bgStyle: {
					flex: '1',
					height: '170px',
					margin: '2px',
					backgroundImage: '',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					borderRadius: '4px'
				}
			}, {
				id: 2,
				title: '300元不远美美玩大半天还吃得超愉快,主城+郊区比网红景点...',
				distance: '',
				images: [
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564338050876&di=a655bb299fc35ab257c16b80b373310c&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20120111%2FImg331863292.jpg',
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564338110208&di=f9f7ca220834504e2e2378cedcdf94d7&imgtype=0&src=http%3A%2F%2Fwww.cma.gov.cn%2F2011xzt%2F2014zt%2F20140930%2F2014093002%2F201410%2FW020141020412132117809.jpg'
				],
				user: '官方推荐',
				hot: 7.2,
				comments: 35,
				like: 55,
				avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564346908706&di=2dfefb0e6f72b7fdf990c06963f45e5c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201208%2F15%2F20120815111223_eksZ3.thumb.700_0.jpeg',
				bgStyle: {
					flex: '1',
					height: '100px',
					margin: '2px',
					backgroundImage: '',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					borderRadius: '4px'
				}
			}, {
				id: 3,
				title: '我的泸沽湖6日游记',
				distance: '1213km',
				images: [
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564338148573&di=836fcaf9d1f4601713440bc3343d7e9f&imgtype=0&src=http%3A%2F%2Fimage3.cnpp.cn%2Fupload%2Fimages%2F20170329%2F16093422999_600x400.jpg',
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564338177791&di=110e50d36646415a0483854cdbe8786b&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F05f4470fcb120f8c8137f88c1dacd6279b0ab3203a934-woa4ag_fw658',
					'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1564328290&di=de121767c8134707fb668c46da543a8d&src=http://5b0988e595225.cdn.sohucs.com/images/20171019/7edc0226eacc479fa4155291e1cfc23f.jpeg'
				],
				user: 'AWR的旅途',
				hot: 8.1,
				comments: 112,
				like: 1892,
				avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564346934318&di=e3277a26f4204669349bfbd279e72c18&imgtype=0&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2018-12-02%2F022252653.jpg',
				bgStyle: {
					flex: '1',
					height: '70px',
					margin: '2px',
					backgroundImage: '',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					borderRadius: '4px'
				}
			},{
				id: 4,
				title: '月销4W+的旅行收纳神器',
				distance: '',
				images: [
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564338486272&di=2748c6ce37281a119fba0c6482ffbe4d&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fn12%2Fjfs%2Ft2002%2F214%2F1819136245%2F73203%2F4cd7ea19%2F56e0ef77N12d4cfeb.jpg%2521q70.jpg'
				],
				user: '广告',
				hot: 0,
				comments: 0,
				like: 0,
				avatar: '',
				bgStyle: {
					flex: '1',
					height: '170px',
					margin: '2px',
					backgroundImage: '',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					borderRadius: '4px'
				}
			},{
				id: 5,
				title: '258的防风镜质量可靠吗？测评在此',
				distance: '',
				images: [
				'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564338537787&di=b81e907d69441b2245dea502a9773cac&imgtype=0&src=http%3A%2F%2Fimg.juimg.com%2Ftuku%2Fyulantu%2F130525%2F240410-1305250H63273.jpg'
				],
				user: '星球哥',
				hot: 0,
				comments: 35,
				like: 55,
				avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564347012090&di=e1b60acf90e3431ba878d7ef6a9d4d9c&imgtype=0&src=http%3A%2F%2Fwww.ghost64.com%2Fqqtupian%2FzixunImg%2Flocal%2F2017%2F03%2F09%2F14890405078091.jpg',
				bgStyle: {
					flex: '1',
					height: '170px',
					margin: '2px',
					backgroundImage: '',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					borderRadius: '4px'
				}
			}]
		}

		this.handleCreateTripBtnClick = this.handleCreateTripBtnClick.bind(this)
	}

	handleCreateTripBtnClick() {
		this.props.history.push('/newsearch')
	}

	render() {
		return (
			<div className="wrapper">
				<div>
					<div className="long-btn" onClick={this.handleCreateTripBtnClick}>创建行程</div>
					<div className="filter-wrapper">
						<div className="filter-item">关注</div>
						<div className="filter-item">推荐</div>
						<div className="filter-item">直播</div>
						<div className="filter-item">吃货</div>
						<div className="filter-item">本地</div>
						<div className="filter-item">更多</div>
					</div>
				</div>
				<div className="main">
					{this.state.fakeData.map((item, key) => {
						return (
							<div key={key} className="content-wrapper">
								<div className="title-wrapper">
									<div>{item.title}</div>
									{item.distance ? <div>{item.distance}</div> : ''}
								</div>
								<div className="images-wrapper">
									{item.images.map((innerItem, innerKey) => {
										let newBgStyle = Object.assign({}, item.bgStyle, {backgroundImage: `url(${innerItem})`})

										return (
											<div key={innerKey} style={newBgStyle}>
											</div>
										) 
									})}
								</div>
								<div className="info-wrapper">
									<div className="userinfo">
										{item.avatar ? <div><img alt="avatar" src={item.avatar} /></div> : ''}
										<div>{item.user}</div>
									</div>
									<div className="articleinfo">
										<div>{item.hot}</div>
										<div>{item.comments}</div>
										<div>{item.like}</div>
									</div>								
								</div>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default FirstPage