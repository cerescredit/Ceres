/**
 * @File vue.config
 * @Author nagatoyuki
 * @Date 2021/8/3 - 2:22 下午
 */
 module.exports = {
  // publicPath: `${__dirname}/dist`,  // baseUrl 已经弃用
  lintOnSave: false,
  configureWebpack: {
      module: {
          rules: [{
                  test: /\.md$/,
                  /*use: [
                    {
                      loader: "markdown-loader",
                      options: {}
                    }
                  ]*/
                  use: ["raw-loader", "markdown-loader"]
              }

          ]
      }
  }
}
