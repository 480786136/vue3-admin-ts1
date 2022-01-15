module.exports = {
    publicPath: process.env.NODE_ENV === 'production'? '' : '/',
    //构建项目生成的目录，dist为打包生产环境，devDist为打包开发环境
    outputDir: process.env.NODE_ENV === 'production'? 'dist' : 'devDist',
    // 关闭语法的自动检测
    lintOnSave:false,
    css: {
      loaderOptions: {
        scss: {
          prependData: `@import "./src/style/main.scss";`
        }
      }
    }
  }