import config from '../config'
import parse from '../services/parse'

const services = config.apiConfig.commonBase
// body实体
let servicesRaw = JSON.parse(JSON.stringify(services))
servicesRaw.raw = true
let servicesCode = JSON.parse(JSON.stringify(services))
servicesCode.code = true
const api = {
  // 列表查询
  getList: params => {
    return new Promise((resolve, reject) => {
      window.app.http.get('', params, services).then(
        res => {
          return resolve(parse.parseListHtml(res))
        },
        err => {
          reject(err)
        }
      )
    })
  },
  // 列表搜索
  searchList: params => {
    return new Promise((resolve, reject) => {
      window.app.http.get('?m=vod-search', params, services).then(
        res => {
          return resolve(parse.parseListHtml(res).body)
        },
        err => {
          reject(err)
        }
      )
    })
  },
  getListItem: params => {
    return new Promise((resolve, reject) => {
      window.app.http.get('', params, services).then(
        res => {
          return resolve(parse.parseItemHtml(res))
          // return resolve(res)
        },
        err => {
          reject(err)
        }
      )
    })
  }
}

export default api
