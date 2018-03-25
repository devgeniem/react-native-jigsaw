const webpack = require('webpack')

module.exports = {
  require: ['babel-polyfill'],
  components: 'Components/**/[A-Z]*.js',
  ignore: ['**/Styles.js', '**/AutoHideHeaderList.js', '**/CollapseContainer.js', '**/ModalContainer.js', '**/DateTimePicker.js', '**/DropdownPicker.js', '**/Picker.js', '**/Rating.js'],
  webpackConfig: {
    resolve: {
      alias: { 'react-native': 'react-native-web' },
      extensions: ['.web.js', '.js']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            plugins: ['react-native-web'],
            presets: ['react-native'],
            babelrc: false
          }
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                hash: 'sha512',
                digest: 'hex',
                name: '[hash].[ext]'
              }
            }
          ]
        },
        {
          test: /\.ttf$/,
          loader: 'file-loader'
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        __DEV__: process.env
      })
    ]
  }
}
