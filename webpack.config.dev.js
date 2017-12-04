const webpackBase = require('./webpack.config.base');
const webpack = require('webpack');

const cfg = Object.assign(webpackBase, {
    //devtool: 'cheap-module-eval-source-map',
    devServer: {
        host:'0.0.0.0',
        port: 3300
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor','antd','play'],
            filename: '[name].js',
            minChunks: 2
        }),
            // name:'user', // 上面入口定义的节点组
            // filename:'build-user.js' //最后生成的文件名),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false  // remove all comments
            },
            compress: {
                warnings: false
            }
        })
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'user', // 上面入口定义的节点组
        //     filename:'build-user.js' //最后生成的文件名
        // })
    ],
    options:{
        'plugins': [['import', {
            'libraryName': 'antd',
            'style': true
        }]]
    },
    node: {
        global: true,
        crypto: 'empty',
        __dirname: true,
        __filename: true,
        process: true,
        Buffer: false,
        clearImmediate: false,
        setImmediate: false
    }
});

module.exports = cfg;