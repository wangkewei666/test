// const autoprefixer = require('autoprefixer');
// const pxtorem = require('postcss-pxtorem')

module.exports = {
    // baseUrl  type:{string} default:'/' 
    // 将部署应用程序的基本URL
    // 将部署应用程序的基本URL。
    // 默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下。
    // https://www.my-app.com/。如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，集baseUrl到'/my-app/'.
 
    baseUrl: process.env.NODE_ENV === 'production' ? '/online/' : '/',
    // 配置rem
    // css:{
    //     // modules:false,
    //     // extract:true,
    //     sourceMap:false,
    //     loaderOptions: {
    //       postcss: {
    //         plugins: [
    //           autoprefixer(),
    //           pxtorem({
    //             rootValue: 75.0,
    //             propList: ['*']
    //           })
    //         ]
    //       }
    //     }
    // },
  
    //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
    lintOnSave: false,
    // productionSourceMap：{ type:Bollean,default:true } 生产源映射
    // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
    productionSourceMap: false,
    // devServer:{type:Object} 3个属性host,port,https
    // 它支持webPack-dev-server的所有选项
 
    devServer: {
 //       port: 8010, // 端口号
  //      host: 'localhost',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        port: 8090,
      proxy: {
	      '/api': {
	        target: 'http://127.0.0.1:8080/', //对应自己的接口
	        changeOrigin: true,
	        ws: true,
	        pathRewrite: {
	          '^/api': ''
	        }
	      }
    },  // 配置多个代理
    }
}