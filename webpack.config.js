const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,

                exclude: /nodule_modules/,

                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.css$/,

                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ],
            }, {
                test: /.*\.(giv|png|jpe?g)$/i,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    }
}