module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16, // 1rem = 16px
      unitPrecision: 5, // 小数点位数
      propList: ['*'], // 需要转换的属性，这里表示全部都转换
      selectorBlackList: [], // 不需要转换的选择器
      replace: true,
      mediaQuery: false, // 是否在媒体查询中也进行转换
      minPixelValue: 0, // 小于或等于0px则不进行转换
      exclude: /node_modules/i // 排除 node_modules 目录下的文件
    }
  },
}