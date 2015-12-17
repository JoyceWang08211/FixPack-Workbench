var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin");
//var OccurenceOrderPlugin = new require("webpack/lib/optimize/OccurenceOrderPlugin");
//var HotModuleReplacementPlugin = new require("webpack/lib/HotModuleReplacementPlugin");
//var NoErrorsPlugin = new require("webpack/lib/NoErrorsPlugin");

var entries = {
    index: './js/index.js',
    editor: './js/components/editor/index.js',
    crawler: ['./js/components/crawler/index.js', 'webpack-hot-middleware/client']
};

var entriesDev = [
    'webpack-hot-middleware/client',
    './js/index.js',
    //'./js/components/editor/index.js',
    './js/components/crawler/index.js'];

var chunks = Object.keys(entries);

module.exports = {
    context: path.join(__dirname, '/public/src'),

    resolve: {
        root: [path.join(__dirname, '/public/src'), path.join(__dirname, '/node_modules')],
        alias: {},
        extensions: ['', '.js', '.css', '.scss', '.png', '.jpg']
    },

    //entry: entries,
    entry: entries,

    hotComponents: true,

    output: {
        libraryTarget: 'var',
        filename: '[name].build.js',
        chunkFilename: '[chunkhash:8].[name].chunk.js',
        publicPath: '/assets/js/',
        path: path.join(__dirname, '/public/assets/js')
    },

    externals: {
        //'react': 'React',
        'jquery': 'jQuery',
        'react': 'React',
        'react-dom': 'ReactDOM',
        'reactUI': 'ReactUI'
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.js[x]?$/,
                loaders: ['babel?presets[]=react,presets[]=es2015']
            }
        ]
    },

    plugins: [
        new CommonsChunkPlugin({
            name: 'vendors',
            chunks: chunks,
            minChunks: chunks.length
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};