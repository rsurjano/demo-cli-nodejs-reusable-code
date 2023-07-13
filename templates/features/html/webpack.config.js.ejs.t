---
inject: true
to: <%= name %>/webpack.config.js
before: devServer
skip_if: HtmlWebpackPlugin
---
  plugins: [
    new HtmlWebpackPlugin({
        title: '', 
        template: 'src/index.html' }) 
   ],
