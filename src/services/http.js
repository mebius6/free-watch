import axios from 'axios'
import querystring from 'querystring'
import config from '../config'
import cheerio from 'cheerio'
// 错误提示
const networkErr = '网络请求超时'

let instance = axios.create({
  timeout: 15 * 1000, // 请求超时时间设置 15s
  withCredentials: false //  带cookie请求
  // headers: { 'Content-Type': 'application/html;charset=UTF-8' }
})

// request 拦截器
instance.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
// response 拦截器
instance.interceptors.response.use(
  res => {
    if (res.status === 200) {
      if (res.data.code === '10004') {
        // 超时
      }
    }
    return res
  },
  err => {
    if (err.response) {
      if (err.response.status === 401) {
        // 401
      }
      return Promise.reject(err.response.data || networkErr)
    }
    return Promise.reject(networkErr)
  }
)

const http = {
  formatData: (code, res) => {
    return new Promise((resolve, reject) => {
      if (res.status === 200) {
        let data = res.data
        if (res.code) {
          return resolve(
            JSON.stringify(
              Object.assign(res, { data: JSON.parse(http.parseHtml(data)) })
            )
          )
        } else {
          return resolve(http.parseHtml(data))
        }
      } else {
        return reject(res.statusText)
      }
    })
  },
  parseHtml: data => {
    let $ = cheerio.load(data, {
      ignoreWhitespace: true,
      xmlMode: true
    })
    let header = $('#sddm').children('li')

    let headerData = []
    header.each((i, v) => {
      let a = $(v)
        .find('a')
        .get(0)
      let slideDown = []
      let slide = []
      if ($(v).children(`#m${i}`).length) {
        slideDown = $(v)
          .children(`#m${i}`)
          .children('a')
        slideDown.each((index, item) => {
          let href = $(item).attr('href')
          let params = {}
          if (href.indexOf('https') < 0) {
            params = querystring.parse(href.substr(2))
            let obj = {
              content: $(item).text()
            }
            if (Object.keys(params).length) {
              obj.params = params
            }
            slide.push(obj)
          }
        })
      }
      let href = $(a).attr('href')
      let params = {}
      // 过滤网址链接和插件链接
      if (href.indexOf('https') < 0 && href.indexOf('art') < 0) {
        params = querystring.parse(href.substr(2))
        let obj = {
          content: $(a).text(),
          slide
        }
        if (Object.keys(params).length) {
          obj.params = params
        }
        headerData.push(obj)
      }
    })
    let body = $('.xing_vb').find('li')
    let bodyData = []
    body.each((index, item) => {
      if (index !== 0 && index !== body.length - 1) {
        let span = $(item).find('span')
        let content = ''
        let params = {}
        let a = $(span)
          .eq(1)
          .find('a')
        if (a) {
          content = $(a).text()
          let href = $(a).attr('href')
          if (href && href.indexOf('https') < 0) {
            params = querystring.parse(href.substr(2))
          }
        }
        let sort = $(span)
          .eq(2)
          .text()
        let time = $(span)
          .eq(3)
          .text()
        let obj = {
          content,
          params,
          sort,
          time
        }
        bodyData.push(obj)
      }
    })
    return {
      header: headerData,
      body: bodyData
    }
  },
  get: (path, params, { url = '', port = 8080, code = false }) => {
    return new Promise((resolve, reject) => {
      let apiUrl = `${config.apiUrl}:${port}/${path}`
      let headers = {
        'Content-Type': 'application/xml;charset=UTF-8'
      }
      if (url) {
        apiUrl = `${url}:${port}/${path}`
      }
      instance
        .get(apiUrl, {
          params,
          headers
        })
        .then(
          res => {
            http.formatData(code, res).then(resolve, reject)
          },
          err => {
            return reject(err || networkErr)
          }
        )
    })
  },
  post: (
    path,
    params,
    { url = '', port = 8810, code = false, raw = false, file = false }
  ) => {
    return new Promise((resolve, reject) => {
      let data = params
      let headers = {
        'Content-Type': 'application/json;charset=UTF-8'
      }
      if (file) {
        headers['Content-type'] = 'multipart/form-data'
      } else if (!raw) {
        data = querystring.stringify(params)
        headers['Content-type'] = 'application/x-www-form-urlencoded'
      }

      let apiUrl = `${config.apiUrl}:${port}/${path}`
      if (url) {
        apiUrl = `${url}:${port}/${path}`
      }
      // 拦截JSON对象里面的rel【权限控制】
      if (raw) {
        if (data.rel) {
          apiUrl += `?rel=${data.rel}`
          delete data.rel
        }
      }
      instance
        .post(apiUrl, data, {
          headers
        })
        .then(
          res => {
            http.formatData(code, res).then(resolve, reject)
          },
          err => {
            return reject(err.msg || networkErr)
          }
        )
    })
  }
}

export default http
