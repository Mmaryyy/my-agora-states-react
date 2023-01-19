const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
            {   
                test: /\.js/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    plugins: [
    	new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            { 
                template: './public/index.html', // 템플릿 설정
                minify: true, // 압축 설정
            }
        ),
    ],
}