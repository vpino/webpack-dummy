const path = require('path');

module.exports = {
  
  context: __dirname,

  entry: {
    app: [path.resolve(__dirname, 'src', 'index.js')]
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: path.resolve(__dirname, 'build')
  },
 
  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    host: '0.0.0.0',
    port: 8080,
    inline: true
  },

  /* Apartado importante de webpack, 
  ** el que realiza las transformaciones
  */
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname),
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
        
        query: {
          presets: ['es2015'],
        }

      }
    ]
  }

}