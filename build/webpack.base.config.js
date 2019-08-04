const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
    entry:['./src/index.ts'], // 基于node运行目录
    output:{
        filename:'app.js',
        path: path.resolve(__dirname, "../dist")
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/i,
                use:['ts-loader'],
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html', // 最终创建的文件名
            template: path.join(__dirname, '../src/views/index.html') // 指定模板路径
          })
    ]
}