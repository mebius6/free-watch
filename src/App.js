import React, { Component } from 'react'

import Main from './pages/Main'
import '@/styles/main.less'
import api from './api'
import http from './services/http'
import unit from './services/unit'
window.app = {
  http,
  api,
  unit
}
export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <Main></Main>
  }
}
