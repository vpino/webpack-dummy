module.exports = {
  
  context: __dirname,

  entry: {
    app: [__dirname + '/src/index.js']
  },

  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    publicPath: __dirname + '/build/'
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
        include: __dirname,
        exclude: __dirname + '/node_modules/',
        loader: 'babel-loader',
        
        query: {
          presets: ['es2015'],
        }

      }
    ]
  }

}