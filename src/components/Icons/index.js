import React, { Component } from 'react'
import classNames from 'classnames'
import '@/assets/font/iconfont.css'

export default class Icons extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { type, className = '', ...others } = this.props
    const cls = classNames(
      {
        iconfont: true,
        [`icon-${type}`]: true
      },
      className
    )
    return <span className={cls} {...others} />
  }
}
