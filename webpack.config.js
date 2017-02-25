module.exports = {
    entry: "./app/components/ChatApp.js",
    output: {
        filename: "public/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader?presets[]=es2015',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}