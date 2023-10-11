const { defineConfig } = require('@vue/cli-service')
const packageName = require("./package.json").name;

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: "/",
  outputDir: `../package/${packageName}`,
})
