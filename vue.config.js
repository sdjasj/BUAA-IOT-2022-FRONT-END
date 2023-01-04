
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave:false,
  runtimeCompiler: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },
  devServer: {
    proxy: {
      '/dev/': { // 部署
        target: 'http://10.212.30.136:8200',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/dev': ''
        }
      },
      '/api-dev': { //本地
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api-dev': ''
        }
      }
    }
  }
}
