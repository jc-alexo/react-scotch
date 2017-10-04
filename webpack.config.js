const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders:
        [
            {
                
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                // loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?sourceMap!sass?sourceMap'
                )
            }
            // {
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract({
            //         loader: 'css-loader?importLoaders=1',
            //     }),            

            // },
            // {
            //     test: /\.(sass|scss)$/,
            //     loader: ExtractTextPlugin.extract(['css-loader'], ['sass-loader'])
            // }
        ]
    },
    output: {
        filename: 'public/[name].js'
    },
    sassLoader:{
        includePaths: ['src/sass']
    },
    plugins: //[HtmlWebpackPluginConfig],
    [//new ExtractTextPlugin({
    //    filename: 'dist/[name].bundle.css',
    //    allChunks: true, 
    // }),
    HtmlWebpackPluginConfig
],
};