import React, { Component, Fragment } from 'react'
import {
  NavBar,
  SearchBar,
  Icon,
  List,
  PullToRefresh,
  Toast,
  ListView
} from 'antd-mobile'
import { NavTabs } from '@/components'
function MyBody(props) {
  return <div className="free-watch-list">{props.children}</div>
}

export default class Home extends Component {
  constructor(props) {
    super(props)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
    this.params = this.props.params
    this.state = {
      tabsList: this.props.tabsList,
      dataSource,
      pageIndex: 1,
      list: [],
      refreshing: true,
      loading: true,
      useBodyScroll: false,
      listViewHeight: 0,
      hasMore: true
    }
  }

  componentDidMount() {
    this.getOrderList()
  }
  // 列表api
  getListApi(params) {
    return window.app.api.getList(params)
  }

  //获取列表数据 返回list
  getList(params) {
    let vm = this
    return this.getListApi(params).then(
      res => {
        return res.body
      },
      err => {
        vm.setState({
          refreshing: false,
          loading: false,
          hasMore: false
        })
        Toast.info(err, 1)
      }
    )
  }

  getOrderList() {
    this.setState({ loading: true }, async () => {
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
  /**
   * 根据关键词 搜索列表
   *
   */
  searchListByWords = val => {
    let params = {
      wd: val,
      submit: 'search'
    }
    let vm = this
    window.app.api.searchList(params).then(
      res => {
        console.log(['res', res])
        vm.setState(
          {
            dataSource: vm.state.dataSource.cloneWithRows(res),
            refreshing: false,
            loading: false,
            list: res,
            pageIndex: 1
          },
          () => {
            vm.getListHeight()
          }
        )
      },
      err => {
        Toast.info(err, 1)
      }
    )
  }

  /**
   * 下拉刷新
   */
  onRefresh = () => {
    this.setState(
      { refreshing: true, loading: true, pageIndex: 1 },
      async () => {
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
      }
    )
  }

  /**
   * 上拉加载
   */
  onEndReached = event => {
    let vm = this
    if (vm.state.loading) {
      return false
    }
    //如果this.state.hasMore为false，说明没数据了，直接返回
    if (!vm.state.hasMore) {
      return false
    }
    // m=vod-index-pg-2
    vm.setState(
      {
        loading: true,
        pageIndex: vm.state.pageIndex + 1
      },
      async () => {
        let list = [
          ...vm.state.list,
          ...((await vm.getList({ m: `vod-index-pg-${vm.state.pageIndex}` })) ||
            [])
        ]
        vm.setState({
          dataSource: vm.state.dataSource.cloneWithRows(list),
          refreshing: false,
          loading: false,
          list
        })
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
    let navHeight = 0
    if (document.querySelectorAll('.free-watch .free-watch-navbar')) {
      navHeight = document.querySelectorAll('.free-watch-navbar')[0]
        .offsetHeight
    }

    let tabHeight = 0
    if (this.state.tabsList.length) {
      tabHeight = document.querySelectorAll('.free-watch .free-watch-tabs')[0]
        .offsetHeight
    }
    let tabbarHeight = 0
    if (document.querySelectorAll('.am-tabs-tab-bar-wrap')) {
      tabbarHeight = document.querySelectorAll('.am-tabs-tab-bar-wrap')[0]
        .offsetHeight
    }
    let searchBarHeight = 0
    if (document.querySelectorAll('.am-search')) {
      searchBarHeight = document.querySelectorAll('.am-search')[0].offsetHeight
    }
    let hei =
      clientHeight - navHeight - tabHeight - tabbarHeight - searchBarHeight
    console.log(['hei', hei])
    this.setState({
      listViewHeight: hei
    })
  }
  renderListView = (rowData, sectionID, rowID) => {
    // console.log(['rowData', rowData])
    return (
      <List
        key={`${sectionID}-${rowID}`}
        renderHeader={() => rowData.time}
        onClick={() => {
          // this.getListItemDetail(rowData.params)
        }}
      >
        <List.Item extra={`${rowData.sort}`} arrow="horizontal">
          {rowData.content}
        </List.Item>
      </List>
    )
  }
  render() {
    let { list, tabsList, dataSource, loading } = this.state
    let renderRow = this.renderListView
    return (
      <div className={'free-watch'}>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          className={'free-watch-navbar'}
          onLeftClick={() => this.props.history.go(-1)}
        >
          首页
        </NavBar>
        {tabsList.length ? (
          <NavTabs
            tabsList={tabsList}
            page={4}
            activeIndex={0}
            tabsClickItem={this.tabsClickItem}
          ></NavTabs>
        ) : null}
        <SearchBar
          placeholder="100万部影片任你搜索"
          onSubmit={this.searchListByWords}
        />
        <ListView
          ref={el => (this.lv = el)}
          dataSource={dataSource}
          renderBodyComponent={() => <MyBody />}
          renderRow={renderRow}
          renderFooter={() =>
            list.length ? (
              <div className="mw-list-footer-loading">
                {loading ? '加载中...' : '已加载完'}
              </div>
            ) : null
          }
          pullToRefresh={
            <PullToRefresh
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
          scrollRenderAheadDistance={500}
          style={{ height: this.state.listViewHeight }}
          onEndReachedThreshold={1000}
          pageSize={50}
          onEndReached={this.onEndReached}
        />
      </div>
    )
  }
}
