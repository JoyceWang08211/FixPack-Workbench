var path = require('path');
var CommonsChunkPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin")

var entries = {
    index: './js/index.js',
    editor: './js/components/editor/index.js',
    crawler: './js/components/crawler/index.js'
};

var chunks = Object.keys(entries);

module.exports = {
    context: path.join(__dirname, '/public/src'),

    resolve: {
        root: [path.join(__dirname, '/public/src'), path.join(__dirname, '/node_modules')],
        alias: {},
        extensions: ['', '.js', '.css', '.scss', '.png', '.jpg']
    },

    entry: entries,

    output: {
        libraryTarget: 'var',
        filename: '[name].build.js',
        chunkFilename: '[chunkhash:8].[name].chunk.js',
        publicPath: '/public/',
        path: path.join(__dirname, '/public/assets/js')

    },

    externals: {
        //'react': 'React',
        'jquery': 'jQuery'
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.js[x]?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

    plugins: [
        new CommonsChunkPlugin({
            name: 'vendors', // ������ģ����ȡ��������Ϊ`vendors`��chunk
            chunks: chunks,
            minChunks: chunks.length // ��ȡ����entry��ͬ������ģ��
        })
    ],

    devServer: {
        stats: { colors: true }
    }
};