import React, { Component } from 'react'
import Header from '../component/Header'
import '../assets/sass/place.scss'

class Place extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		var content = '&emsp;&emsp;重庆科技馆，位于长江与嘉陵江交汇处的重庆江北嘴中央商务区（CBD）核心区域，' +
							'于2006年1月7日奠基，2006年10月动工建设，2009年9月9日建成开馆。该馆占地面积37亩，建筑面积4.83万平方米。<br>' +
							'&emsp;&emsp;重庆科技馆分为A区和B区，馆内共设生活科技、防灾科技、交通科技、国防科技、宇航科技和基础科学6个主题展厅，' +
							'以及儿童科学乐园和工业之光2个专题展厅。展品涵盖材料、机械、交通、军工、航空航天、微电子技术、信息通讯、' +
							'计算机应用、虚拟模拟技术、生命科学、环境科学、基础科学及中国古代科学技术等多项学科领域，展品数目达400余（套）。<br>' +
							'&emsp;&emsp;2010年，国家旅游局批准重庆科技馆为国家AAAA级旅游景区。 2017年，重庆科技馆入选第一批“全国中小学' +
							'生研学实践教育基地”名单。	'

		return (
			<div>
				<Header />
				<div className="place-wrapper">
					<div className="place-cover"></div>
					<div className="place-content-wrapper">
						<div className="place-title">
							<div>重庆科技馆</div>
							<div>江北城文星门街7号</div>
						</div>
						<ul>
							<li>家庭亲子</li>
							<li>价格优惠</li>
							<li>项目多</li>
							<li>交通便利</li>
							<li>高大上</li>
						</ul>
						<div className="place-content-description" dangerouslySetInnerHTML={{__html: content}}></div>
						<div>
							<p>路人留贴</p>
							<div className="place-comment">
								<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564659459878&di=4079840ea0e36ed001a5d8aa0626f2b1&imgtype=0&src=http%3A%2F%2Ftct.ganjistatic1.com%2Fgjfsqq%2Fgjupload%2Fc6fcef1a30fa4fcba948f5331f680c49_600-0_6-0.jpg" alt="avatar" />
								<div>
									<div>东东</div>
									<div className="place-comment-time">2分钟前</div>
								</div>
								<div className="place-comment-add">关注</div>
								<div className="place-comment-text">第一次参观科技馆，颠覆了我们很多常识，科技馆应该是衡量一个城市的竞争力之一。重庆科技馆位于长江与嘉陵江交汇处的重庆江北嘴中央商务区（CBD）核心区域，
								于2006年1月7日奠基，2006年10月动工建设，2009年9月9日建成开馆。重庆科技馆以家庭、交通、基础和宇航为主，不仅仅对学生有帮助，对成人同样有收获。</div>
							</div>
						</div>
						<div className="place-add-btn">加入行程</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Place