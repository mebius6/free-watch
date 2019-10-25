import React, { Component } from 'react'

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.params = this.props.history.state.params
  }

  /**
   *  获取列表项详情
   */
  getListItemDetail = (params = {}) => {
    window.app.api.getListItem(params).then(res => {
      console.log(res)
    })
  }
  render() {
    return <div>Detail</div>
  }
}
