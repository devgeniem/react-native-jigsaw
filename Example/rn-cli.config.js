var path = require('path')
const metroBundler = require('metro-bundler')

var config = {
  extraNodeModules: {
    'react-native': path.resolve(__dirname, 'node_modules/react-native'),
    'react': path.resolve(__dirname, 'node_modules/react'),
    'react-native-vector-icons': path.resolve(__dirname, 'node_modules/react-native-vector-icons')
  },
  getProjectRoots () {
    return [
      // Keep your project directory.
      path.resolve(__dirname),
      path.resolve(__dirname, '../Themes'),
      path.resolve(__dirname, '../Components')
    ]
  }
}
module.exports = config