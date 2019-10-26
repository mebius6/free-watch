import React from 'react'
// const Main = React.lazy(() => import('../pages/Main'))
const Home = React.lazy(() => import('../pages/home')) // 首页
const TvSeries = React.lazy(() => import('../pages/tvSeries')) //连续剧
const Film = React.lazy(() => import('../pages/film')) //电影
const Variety = React.lazy(() => import('../pages/variety')) //综艺
const Anime = React.lazy(() => import('../pages/anime')) //动漫
const Detail = React.lazy(() => import('../pages/detail')) //列表明细

export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/tvSeries',
    component: TvSeries
  },
  {
    path: '/film',
    component: Film
  },
  {
    path: '/variety',
    component: Variety
  },
  {
    path: '/anime',
    component: Anime
  },
  {
    path: '/detail',
    component: Detail
  }
]
