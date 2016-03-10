module.exports = [
    {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
    },
    {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw'
    }
];
