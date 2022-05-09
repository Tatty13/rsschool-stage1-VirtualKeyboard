let path = require('path');
let miniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {
   entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: '/dist/'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: [miniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },

    plugins: [
        new miniCssExtractPlugin({
            filename: 'main.css'
        })
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, './'),
            watch: true,
          },
    }
}

module.exports = (env, options) => {
    let isProd = options.mode === 'production';
    conf.devtool = isProd ? false : 'eval-cheap-module-source-map';
    return conf;
}
