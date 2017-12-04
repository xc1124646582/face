const  webpackBase = require('./webpack.config.base');
const webpack = require('webpack');

const cfg = Object.assign(webpackBase, {
    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"',
                'BABEL_ENV':'"production"'
            }
        })
    ]
});

module.exports = cfg;


