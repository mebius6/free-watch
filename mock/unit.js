import Mock from 'mockjs'

const unit = {
  mock: (path, method, data, code = 0, msg = '成功') => {
    let apiUrl = `${process.env.REACT_APP_API}:${
      process.env.REACT_APP_API_PORT
    }${process.env.REACT_APP_API_BASEURL}${path}`
    if (method === 'get') {
      apiUrl = new RegExp(`${apiUrl.replace(/\//g, '\\/')}(|\\?\\S*)$`)
    }
    // console.log(apiUrl)
    Mock.mock(apiUrl, method, function(options) {
      return { code, data, msg }
    })
  }
}

export default unit
