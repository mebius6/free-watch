const { override, fixBabelImports, addLessLoader } = require('customize-cra')
const path = require('path')
const addCustomize = () => config => {
  // 自定义根目录
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, 'src')
  }

  // px 2 vw
  require('react-app-rewire-postcss')(config, {
    plugins: loader => [
      require('postcss-flexbugs-fixes'),
      require('postcss-preset-env')({
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3
      }),
      require('postcss-aspect-ratio-mini')({}),
      require('postcss-px-to-viewport')({
        viewportWidth: 750, // (Number)视窗的宽度，对应的是我们设计稿的宽度，一般是750
        viewportHeight: 1334, // (Number)视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
        unitPrecision: 3, // (Number)指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
        viewportUnit: 'vw', // (String) 指定需要转换成的视窗单位，建议使用vw
        selectorBlackList: ['.ignore', '.hairlines'], // (Array) 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
        minPixelValue: 1, // (Number) 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
        mediaQuery: false, // (Boolean) 允许在媒体查询中转换`px`
        exclude: /(\/|\\)(node_modules)(\/|\\)/ // (Array or Regexp) 忽略某些文件
      }),
      require('postcss-write-svg')({
        utf8: false
      }),
      require('postcss-viewport-units')({
        filterRule: rule =>
          rule.nodes.findIndex(i => i.prop === 'content') === -1
      }),
      require('cssnano')({
        preset: 'advanced',
        autoprefixer: false,
        'postcss-zindex': false
      })
    ]
  })
  // mockjs
  // if (process.env.NODE_ENV === 'development') {
  //   config.entry.push(path.resolve(__dirname, 'mock/index.js'))
  // }
  // 更改打包输出目录
  // if (process.env.NODE_ENV === 'production') {
  //   config.output.path = path.resolve(__dirname, 'dist')
  // }

  // less modules  test: /\.module\.less$/ 覆盖样式有问题
  // config.module.rules[2].oneOf[8].use[1].options.localIdentName =
  //   '[name]-[local]-[hash:base64:5]'

  return config
}
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  }),
  addLessLoader({
    javascriptEnabled: true
    //modifyVars: { "@primary-color": "#1DA57A" }
  }),
  addCustomize()
)
