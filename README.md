# Create your WEBPACK Sabe

Install npm in debian jessie

```bash
$ apt install curl apt-transport-https

$ curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash 

$ apt install -y nodejs

$ npm install --global npm@latest
```

## Start the webpack 


Init project of Nodejs

```bash
$ npm init -y
```

Install depends to developers

```bash
$ npm i -D webpack webpack-dev-server babel-loader babel-cli babel-preset-es2015
```

Ok all depends installed.


### Now create the file ```webpack.config.js``` with the following content:

```javascript
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
```

### Now to the file ```package.json``` add the scripts:

The file stays like this

```javascript
{
  "name": "webpack-dummy",
  "version": "1.0.0",
  "description": "Install npm in debian jessie",
  "main": "index.js",
  "scripts": {
    "build": "webpack --watch --colors",
    "start": "webpack-dev-server --progress --colors"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/vpino/webpack-dummy.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/vpino/webpack-dummy/issues"
  },
  "homepage": "https://github.com/vpino/webpack-dummy#readme",
  "devDependencies": {
    "babel-cli": "^6.24.1",
    "babel-loader": "^7.0.0",
    "babel-preset-es2015": "^6.24.1",
    "webpack": "^2.5.1",
    "webpack-dev-server": "^2.4.5"
  }
}


Now create file index in ```build/index.html``` with the following content:

```html
<!DOCTYPE html>
<html>
	<head>
		<title> Example webpack</title>
	</head>
	<body>
		<script src="bundle.js"></script>
	</body>
</html>
```

Create the index.js in ```src/index.js``` with the following content

```javascript
import Person from './person'

const person = new Person('Victor');

person.saluda()
```

Create the file ```src/person.js``` with the following content:


```javascript
export default class Person {
  
  constructor (name) {
    this.name = name;
  }

  salute(){
    console.log(`Hey there, my name is ${this.name}`);
  }

}
```

And build code:

```bash
$ npm run build
```

Execute server:

```bash
$ npm start
```


