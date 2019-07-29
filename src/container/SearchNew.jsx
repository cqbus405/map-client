import React, { Component } from 'react'
import '../assets/sass/searchnew.scss'

class SearchNew extends Component {
	constructor(props) {
		super(props)

		this.state = {
			fakeData: [{
				id: 1,
				name: '受气牛肉',
				cover: 'http://qcloud.dpfile.com/pc/Wq2d-UeO2FG43-KHSRLRG4XQA8nTfqgk4IwNu-FOW111YlpP_VRbRSdqmUQ1NqkejoJrvItByyS4HHaWdXyO_DrXIaWutJls2xCVbatkhjUNNiIYVnHvzugZCuBITtvjski7YaLlHpkrQUr5euoQrg.jpg',
				type: '餐饮',
				location: {
					position: {
						lat: '',
						lnt: ''
					},
					street: '沙坪坝站北路三峡广场印象汇5楼',
					district: '',
					city: '',
					province: ''
				}
			}, {
				id: 2,
				name: '拆火锅',
				cover: 'http://qcloud.dpfile.com/pc/2a6E0kHQO_EbgGn-DPSqaLIf1I1i2zXNdt3a1GR9MXTkNbyrPE9B32GREdOE5uJQjoJrvItByyS4HHaWdXyO_DrXIaWutJls2xCVbatkhjUNNiIYVnHvzugZCuBITtvjski7YaLlHpkrQUr5euoQrg.jpg',
				type: '餐饮',
				location:  {
					position: {
						lat: '',
						lnt: ''
					},
					street: '松林路下中渡口130号创客港南门防空洞',
					district: '',
					city: '',
					province: ''
				}
			}, {
				id: 3,
				name: '南之山书店·Origin',
				cover: 'http://qcloud.dpfile.com/pc/a2wzjOuoTbGfJ07yS2uGPoT_ha2eJJa0BqjYa9A8f3NWniVC1RDTZfxMS7SFPEJDjoJrvItByyS4HHaWdXyO_DrXIaWutJls2xCVbatkhjUNNiIYVnHvzugZCuBITtvjski7YaLlHpkrQUr5euoQrg.jpg',
				type: '住宿',
				location:  {
					position: {
						lat: '',
						lnt: ''
					},
					street: '南山公园北路128号',
					district: '',
					city: '',
					province: ''
				}
			}, {
				id: 4,
				name: '重庆丽晶酒店',
				cover: 'http://p0.meituan.net/tdchotel/e359e60a1b164adbfc952b4e5d57571f43008.jpg',
				type: '住宿',
				location:  {
					position: {
						lat: '',
						lnt: ''
					},
					street: '金沙门路66号',
					district: '',
					city: '',
					province: ''
				}
			}, {
				id: 5,
				name: '万国体育国际击剑',
				cover: 'http://p1.meituan.net/dpmerchantimage/a5d25fc9-7e26-4384-9ea7-60933a4e997a.jpg%40640w_480h_0e_1l%7Cwatermark%3D0',
				type: '亲子',
				location:  {
					position: {
						lat: '',
						lnt: ''
					},
					street: '新南路429号-爱融荟城-B区L3层',
					district: '',
					city: '',
					province: ''
				}
			}, {
				id: 6,
				name: '托马斯小镇',
				cover: 'https://p0.meituan.net/dpdeal/7f5be6c9f70a0a0393c6bbaaba64a4a4167321.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',
				type: '亲子',
				location:  {
					position: {
						lat: '',
						lnt: ''
					},
					street: '袁家岗奥体路1号K-Land小时代梦想艺术乐园L3层',
					district: '',
					city: '',
					province: ''
				}
			}, {
				id: 7,
				name: '仙女山国家森林公园 ',
				cover: 'http://qcloud.dpfile.com/pc/tRw98bBvi1ZFIrJZumo-hc6ab5ECSyzCM1y5RMThrwYj5lz1eDFkcCiBcYKi1L8pjoJrvItByyS4HHaWdXyO_DrXIaWutJls2xCVbatkhjUNNiIYVnHvzugZCuBITtvjski7YaLlHpkrQUr5euoQrg.jpg',
				type: '景点',
				location:  {
					position: {
						lat: '',
						lnt: ''
					},
					street: '仙女镇仙女山国家森林公园',
					district: '',
					city: '',
					province: ''
				}
			}, {
				id: 8,
				name: '花坝景区',
				cover: 'http://qcloud.dpfile.com/pc/5TNArdZm_1PpVFgDBiCncRCRK9VboVzHZsjOC8l8zePJDRY7-AEYtILZt_KuQUlcjoJrvItByyS4HHaWdXyO_DrXIaWutJls2xCVbatkhjUNNiIYVnHvzugZCuBITtvjski7YaLlHpkrQUr5euoQrg.jpg',
				type: '景点',
				location:  {
					position: {
						lat: '',
						lnt: ''
					},
					street: '石壕镇万隆村',
					district: '',
					city: '',
					province: ''
				}
			}, {
				id: 9,
				name: '重庆科技馆',
				cover: 'http://qcloud.dpfile.com/pc/_SCn5fHtVG1ST2Tr_pZX0nQhfCy7wRlpO5l_XETTP5H9FiMxfamhzOpBpUB36ZKEjoJrvItByyS4HHaWdXyO_DrXIaWutJls2xCVbatkhjUNNiIYVnHvzugZCuBITtvjski7YaLlHpkrQUr5euoQrg.jpg',
				type: '文化',
				location:  {
					position: {
						lat: '',
						lnt: ''
					},
					street: '江北城文星门街7号',
					district: '',
					city: '',
					province: ''
				}
			}, {
				id: 10,
				name: '罗中立美术馆',
				cover: 'http://qcloud.dpfile.com/pc/AFHEfQV4n0ee1XNQssbiCEPKsnOEIddQiG8Ic9J-nny20MwiZ1PnhLkFQaLXTOXwjoJrvItByyS4HHaWdXyO_DrXIaWutJls2xCVbatkhjUNNiIYVnHvzugZCuBITtvjski7YaLlHpkrQUr5euoQrg.jpg',
				type: '文化',
				location:  {
					position: {
						lat: '',
						lnt: ''
					},
					street: '大学城熙街',
					district: '',
					city: '',
					province: ''
				}
			}]
		}
	}

	render() {
		return (
			<div className="s-wrapper">
				<div className="s-search-wrapper">
					<div className="s-search-bar">
						<div>重庆</div>
						<div>请输入目的地（街道、餐厅、景区等）</div>
					</div>
					<div className="s-filter">
						<div>住宿</div>
						<div>景点</div>
						<div>餐饮</div>
						<div>文化</div>
						<div>亲子</div>
						<div>更多</div>
					</div>
					<div className="s-sort">
						<div>热度排序</div>
						<div>距离排序</div>
					</div>
				</div>
				<div className="s-content-wrapper">
					<div className="s-content">
						{this.state.fakeData.map((item, key) => {
							return (
								<div key={key} className="s-item">
									<img src={item.cover} alt={item.name} />
									<div className="s-info">
										<div>{item.name}</div>
										<div>{item.type}</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		)
	}
}

export default SearchNew