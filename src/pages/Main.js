import React, { Component, Fragment } from 'react'
import {
  TabBar,
  NavBar,
  Icon,
  PullToRefresh,
  Toast,
  ListView
} from 'antd-mobile'
import { Icons, NavTabs } from '@/components'
import Home from './home' //首页
import TvSeries from './tvSeries' //连续剧
import Film from './film' //电影
import Variety from './variety' //综艺
import Anime from './anime'
function MyBody(props) {
  return <div className="free-watch-list">{props.children}</div>
}
export default class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checkedTab: '首页',
      hidden: false,
      fullScreen: false,
      tabBarList: []
    }
  }
  componentDidMount() {
    this.getMenuList()
  }
  getMenuList(params = { m: 'vod-index.html' }) {
    window.mw.api.getList(params).then(
      res => {
        let { checkedTab, tabBarList } = this.state
        tabBarList = res.header.map(v => {
          let obj = {
            title: v.content,
            key: v.content,
            tabsList: v.slide.map(item => {
              item.title = item.content
              return item
            }),
            params: v.params
          }

          return obj
        })
        this.setState({ tabBarList })
        console.log(['res', res])
      },
      err => {
        console.log(['err', err])
      }
    )
  }

  renderContent = item => {
    switch (item.title) {
      case '首页':
        return <Home params={item.params}></Home>
      case '电影':
        return <Film params={item.params}></Film>
      case '连续剧':
        return <TvSeries params={item.params}></TvSeries>
      case '综艺':
        return <Variety params={item.params}></Variety>
      case '动漫':
        return <Anime params={item.params}></Anime>
    }
  }
  renderItem = (item, index) => {
    return (
      <TabBar.Item
        title={item.title}
        selected={this.state.checkedTab === item.key}
        selectedIcon={<Icons type={item.selectedIcon} />}
        key={item.key}
        onPress={() => {
          this.tabBarClick(item)
        }}
        icon={<Icons type={item.icon} />}
      >
        {this.renderContent(item)}
      </TabBar.Item>
    )
  }
  tabBarClick = item => {
    this.setState(
      {
        checkedTab: item.key
      },
      () => {
        let params = item.params || { m: 'vod-index.html' }
        this.getMenuList(params)
      }
    )
  }
  render() {
    let { tabBarList } = this.state
    let renderTabBar = tabBarList.map((item, index) => {
      return this.renderItem(item, index)
    })
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          hidden={this.state.hidden}
          tintColor="#33A3F4"
          barTintColor="white"
          tabBarPosition="bottom"
        >
          {renderTabBar}
        </TabBar>
      </div>
    )
  }
}
