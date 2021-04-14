let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader'
            // },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                // use: [
                //     'style-loader',
                //     'css-loader'
                // ]
            }
        ]
    }
}


module.exports = conf;