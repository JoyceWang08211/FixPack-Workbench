module.exports = {
    context: __dirname + "/public",
    entry: "./index",
    output: {
        path: __dirname + '/public/dist',
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