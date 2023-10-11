const { name } = require('./package');
const packagePath = 'microapps'
module.exports = {
  productionSourceMap: false,
  outputDir: `../../package/microapps/${name}`,
  publicPath: `/${packagePath}/${name}/`,
  devServer: {
    port:'8002',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      chunkLoadingGlobal: `webpackJsonp_${name}`, // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
    },
  },
};