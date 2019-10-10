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
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
    this.state = {
      checkedTab: '首页',
      hidden: false,
      fullScreen: false,
      tabBarList: [],
      tabsList: [],
      dataSource,
      pageIndex: 1,
      refreshing: true,
      loading: true,
      useBodyScroll: false,
      listViewHeight: 0,
      hasMore: true
    }
  }
  componentDidMount() {
    this.getMenuList()
  }
  getMenuList(params = { m: 'vod-index.html' }) {
    window.mw.api.getList(params).then(
      res => {
        let { tabBarList } = this.state
        tabBarList = res.header.map(v => {
          return {
            title: v.content,
            key: v.content,
            tabsList: v.slide.map(item => {
              item.title = item.content
              return item
            }),
            params: v.params
          }
        })
        this.setState({ tabBarList })
        console.log(['res', res])
      },
      err => {
        console.log(['err', err])
      }
    )
  }

  /**
   * 切换tabs
   */
  tabsClickItem = val => {
    this.setState(
      {
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2
        }),
        checkedTab: val.title,
        pageIndex: 1,
        checkedList: [],
        list: []
      },
      () => {
        Toast.loading('loading...', 1, async () => {
          let list = (await this.getList()) || []
          this.setState(
            {
              dataSource: this.state.dataSource.cloneWithRows(list),
              refreshing: false,
              loading: false,
              list
            },
            () => {
              this.getListHeight()
            }
          )
        })
      }
    )
  }
  /**
   * 获得list容器高度
   */
  getListHeight() {
    let clientHeight = document.documentElement.clientHeight
    let navHeight = document.querySelectorAll('.am-navbar')[0].offsetHeight
    let tabHeight = document.querySelectorAll('.mw-com-tabs')[0].offsetHeight
    let hei = clientHeight - navHeight - tabHeight
    this.setState({
      listViewHeight: hei
    })
  }
  renderContent = item => {
    switch (item.title) {
      case '首页':
        return <Home data={item}></Home>
      case '电影':
        return <Film data={item}></Film>
      case '连续剧':
        return <TvSeries data={item}></TvSeries>
      case '综艺':
        return <Variety data={item}></Variety>
      case '动漫':
        return <Anime data={item}></Anime>
    }
    // return (
    //   <Fragment>
    //     {/* <NavBar
    //       mode="dark"
    //       icon={<Icon type="left" />}
    //       onLeftClick={() => this.props.history.go(-1)}
    //       rightContent={[
    //         <Icon
    //           key="0"
    //           type="search"
    //           size="xs"
    //           style={{ marginRight: '16px' }}
    //         />,
    //         <Icon key="1" type="cross-circle" size="xs" onClick={() => {}} />
    //       ]}
    //     >
    //       {item.title}
    //     </NavBar>
    //     {item.tabsList.length ? (
    //       <NavTabs
    //         tabsList={item.tabsList}
    //         page={4}
    //         activeIndex={0}
    //         tabsClickItem={this.tabsClickItem}
    //       ></NavTabs>
    //     ) : null} */}
    //   </Fragment>
    // )
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
