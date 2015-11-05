var path = require('path');

module.exports = {
    context: path.join(__dirname, "/public"),
    entry: "./index",
    output: {
        path: path.join(__dirname, "/public/dist"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.js[x]?$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};