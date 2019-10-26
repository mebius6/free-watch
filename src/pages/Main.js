import React, { Component, Fragment } from 'react'
import { TabBar } from 'antd-mobile'
import { Icons } from '@/components'
import '../assets/css/base.less'
import Home from './home' //首页
import TvSeries from './tvSeries' //连续剧
import Film from './film' //电影
import Variety from './variety' //综艺
import Anime from './anime'

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
    window.app.api.getList(params).then(
      res => {
        let { tabBarList } = this.state
        tabBarList = res.header.map(v => {
          let obj = {
            title: v.content,
            key: v.content,
            tabsList: v.slide.map(item => {
              item.title = item.content
              return item
            }),
            params: v.params || {}
          }
          switch (v.content) {
            case '首页':
              v.path = '/'
              break
            case '电影':
              v.path = '/film'
              break
            case '连续剧':
              v.path = '/tvSeries'
              break
            case '综艺':
              v.path = '/variety'
              break
            case '动漫':
              v.path = '/anime'
              break
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
    //   <Router>
    //   <Switch>
    //     {pages}
    //     <Route component={NotFound} />
    //   </Switch>
    // </Router>
    switch (item.title) {
      case '首页':
        return <Home params={item.params} tabsList={item.tabsList}></Home>
      case '电影':
        return <Film params={item.params} tabsList={item.tabsList}></Film>
      case '连续剧':
        return (
          <TvSeries params={item.params} tabsList={item.tabsList}></TvSeries>
        )
      case '综艺':
        return <Variety params={item.params} tabsList={item.tabsList}></Variety>
      case '动漫':
        return <Anime params={item.params} tabsList={item.tabsList}></Anime>
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
      <div>
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
