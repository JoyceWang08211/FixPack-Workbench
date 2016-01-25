var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin");

var entries = {
    //index: './js/index.js',
    //editor: './js/components/editor/index.js',
    crawler: ['./js/components/crawler/index.js',
        'webpack-hot-middleware/client'],
    recorder: ['./js/components/recorder/index.js',
        'webpack-hot-middleware/client']
};

//var chunks = Object.keys(entries);

module.exports = {
    devtool:'cheap-source-map',
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
        publicPath: '/',
        path: path.join(__dirname, '/public/build')
    },

    externals: {
        'jquery': 'jQuery',
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-bootstrap': 'ReactBootstrap'
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.js[x]?$/,
              //todo 排除node_modules
                loaders: ['babel?presets[]=react,presets[]=es2015']
            }
        ]
    },

    plugins: [
        //new CommonsChunkPlugin({
        //    name: 'vendors',
        //    chunks: chunks,
        //    minChunks: chunks.length
        //}),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};