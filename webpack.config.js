const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'js', 'routes.js'),
    output: {
        path: path.join(__dirname, 'js', 'build'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test:/\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'saas-loader']
            }
        ]
    }
}