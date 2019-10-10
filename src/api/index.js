import config from '../config'

const services = config.apiConfig.commonBase
// body实体
let servicesRaw = JSON.parse(JSON.stringify(services))
servicesRaw.raw = true
let servicesCode = JSON.parse(JSON.stringify(services))
servicesCode.code = true
const api = {
  // 列表查询
  getList: params => {
    return window.mw.http.get('', params, services)
  }
}

export default api
