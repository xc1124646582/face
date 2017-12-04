const webpack = require('webpack');
const path = require('path');

const src =  path.join(__dirname, 'src');

module.exports = {
    cache: true,
    entry: {
        'app': './src/index.js',
        'vendor': ['react', 'react-dom','react-router'],
        'antd':'antd',
        'play':'./src/ckplayer.js'
    },
    devServer: {
        port: 3300

    },
    output: {
        filename: '[name].js',
        path: __dirname + '/public/',
        publicPath:'/public/',
        chunkFilename: '[name].[chunkhash:5].chunk.js'
    },
    module: {
        loaders: [
            // {
            //     test: /\.(js|jsx)$/,
            //     exclude: /node_modules/,
            //     include: path.join(__dirname, './app'),
            //     loader: 'babel-loader',
            //     query: {
            //         cacheDirectory: true,
            //         plugins: ['transform-runtime',['import', [{ libraryName: 'antd', style: 'css' }]]],
            //         presets:['es2015','react','stage-0']
            //     }
            // },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: src
            },
            {
                test: /\.css$/,

                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(jpe?g|png|gif||svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?name=img/[name].[hash].[ext]'
            }
        ]
    },
    babel: {
        presets: ['es2015', 'react', 'stage-3'],
        plugins: ['transform-object-rest-spread', 'transform-class-properties','transform-runtime']
    }
};