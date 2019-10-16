import React, { Component, Fragment } from 'react'
import { NavBar, Icon, PullToRefresh, Toast, ListView } from 'antd-mobile'
import { NavTabs } from '@/components'
function MyBody(props) {
  return <div className="sale-purchase-common-list">{props.children}</div>
}

export default class Home extends Component {
  constructor(props) {
    super(props)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
    this.params = this.props.params
    this.state = {
      tabsList: [],
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
  // 列表api
  getListApi(param = {}) {
    let vm = this
    let params = {
      currentPage: 1,
      orderType: 'Sale',
      orderCategory: 'OrderCategory_Autonomous_Pricing_Order',
      supplierEnterpriseId: '', //客户
      merchandiseId: '', //商品id
      classId: '',
      brandId: '',
      startTime: '',
      endTime: '',
      pageSize: vm.state.pageSize
    }
    const { checkedTab } = vm.state
    if (vm.perRel.perSearchRel.check) {
      params.rel = vm.perRel.perSearchRel.rel
    }
    if (checkedTab === '待审批') {
      params.pendingFlag = false
      params.orderStatus = 'PENDING_REVIEW_ORDER_STATUS'
      Object.assign(params, param)
    }
    if (checkedTab === '已批准') {
      params.orderStatusArray = vm.statusList.map(v => v.value)
      Object.assign(params, param)
    }

    if (checkedTab === '已失效') {
      params.orderStatus = 'INVALID_ORDER_STATUS'
      Object.assign(params, param)
    }
    this.renderFooterBtn()
    Object.assign(params, param)
    return window.mw.api.sale.saleorder.getOrderInfo(params)
  }

  //获取列表数据 返回list
  getList(params) {
    let vm = this
    return this.getListApi(params).then(
      res => {
        let itemList = res.itemList

        if (!Array.isArray(itemList) || !itemList.length) {
          this.setState({ hasMore: false })
          return []
        }
        let hasMore = res.currentPage < res.totalPage ? true : false
        this.setState({ hasMore, loading: false })
        return itemList
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

    vm.setState(
      {
        loading: true,
        pageIndex: vm.state.pageIndex + 1
      },
      async () => {
        let list = [
          ...vm.state.list,
          ...((await vm.getList({ currentPage: vm.state.pageIndex })) || [])
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
    let navHeight = document.querySelectorAll('.am-navbar')[0].offsetHeight
    let tabHeight = document.querySelectorAll('.mw-com-tabs')[0].offsetHeight
    let hei = clientHeight - navHeight - tabHeight
    this.setState({
      listViewHeight: hei
    })
  }
  renderListView = (rowData, sectionID, rowID) => {
    console.log(rowData, sectionID, rowID)
  }
  render() {
    let { list, tabsList, dataSource, loading } = this.state
    let renderRow = this.renderListView
    return (
      <Fragment>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
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
          pageSize={20}
          onEndReached={this.onEndReached}
        />
      </Fragment>
    )
  }
}
