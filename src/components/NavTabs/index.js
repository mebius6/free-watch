import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.less'

export default class NavTabs extends Component {
  static propTypes = {
    tabsList: PropTypes.array,
    page: PropTypes.number,
    activeIndex: PropTypes.number,
    tabsClickItem: PropTypes.func
  }
  state = {
    tabsList: this.props.tabsList,
    activeIndex: this.props.activeIndex,
    page: this.props.page,
    moveClass: {},
    style: {}
  }

  // 获取tabs文字的宽度和划线left
  widthFun(index) {
    // tabs元素文字的宽度
    // let textWidth = document.querySelectorAll('.nav-tabs-item')[index].offsetWidth

    // 屏幕的宽度
    let clientWidth = document.body.clientWidth
    //下划线宽度
    let textWidth = document.body.clientWidth / 15
    // tabs的Item宽度
    let itemWidth = 100 / this.state.page
    let left =
      itemWidth * index + (itemWidth - (textWidth / clientWidth) * 100) / 2
    return { textWidth, left }
  }

  tabsClick = index => {
    // 获取tabs文字的宽度和划线left
    let { textWidth, left } = this.widthFun(index)
    const moveClass = {
      width: textWidth + 'px',
      left: left + '%'
    }

    this.setState({
      moveClass: moveClass,
      activeIndex: index
    })

    let params = this.state.tabsList[index]
    params['index'] = index
    // 事件
    this.props.tabsClickItem(params)
  }

  // 设置tabs下划线样式
  lineStyleFun(index) {
    // tabs宽度
    const style = {
      width: 100 / this.state.page + '%'
    }

    let { textWidth, left } = this.widthFun(index)
    const moveClass = {
      width: textWidth + 'px',
      left: left + '%'
    }
    this.setState({
      style: style,
      moveClass: moveClass
    })
  }

  componentDidMount() {
    this.lineStyleFun(this.state.activeIndex)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tabsList: nextProps.tabsList
    })
    // 如果下标变化，，重新设置选中item
    if (nextProps.activeIndex !== this.state.activeIndex) {
      this.lineStyleFun(nextProps.activeIndex)

      this.setState({
        activeIndex: nextProps.activeIndex
      })
    }
    // 如果page变化，重新设置
    if (nextProps.page !== this.state.page) {
      this.setState(
        {
          page: nextProps.page
        },
        () => {
          this.lineStyleFun(nextProps.activeIndex)
        }
      )
    }
  }

  render() {
    let { activeIndex } = this.state
    return (
      <div className="free-watch-tabs">
        <div className="nav-tabs">
          {this.state.tabsList.map((item, index) => (
            <div
              className={`nav-tabs-con ${
                this.state.activeIndex === index ? 'nav-tabs-item-active' : ''
              }`}
              key={item.title}
              style={this.state.style}
              onClick={e => {
                e.stopPropagation()
                this.tabsClick(index)
              }}
            >
              <span className="nav-tabs-item">{item.title}</span>
            </div>
          ))}
          <span className="nav-tabs-move" style={this.state.moveClass} />
        </div>
        <div className="free-watch-list">
          {this.props.children && this.props.children[activeIndex]}
        </div>
      </div>
    )
  }
}
