import cheerio from 'cheerio'
import querystring from 'querystring'
let parse = {
  parseListHtml: data => {
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
  parseItemHtml: res => {
    let $ = cheerio.load(res, {
      ignoreWhitespace: true,
      xmlMode: true
    })
    let data = {
      title: [],
      list: []
    }
    let vodImg = $('.warp .vodImg').find('img')
    let vodInfo = $('.warp .vodInfo .vodinfobox ul').children('li')
    data.title.push({ pic: vodImg.attr('src') })
    vodInfo.each((index, item) => {
      let text = `${$(item).text()} ${$(item)
        .find('span')
        .text()}`
      if (text.trim().length) {
        data.title.push({ text })
      }
    })
    let movies = $('.vodplayinfo:last-child').find('ul')

    // uls
    movies.each((index, item) => {
      //ul
      let list = []
      let lis = $(item).children('li')
      lis.each((i, v) => {
        let text = $(v)
          .text()
          .split('$')
        list.push({
          text: text[0],
          path: text[1]
        })
      })
      data.list.push(list)
    })
    return data
  }
}

export default parse
