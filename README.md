Chatty-App
=====================

Chatty allows users to communicate with each other without having to register accounts. It uses React, a popular front-end library created and used heavily by Facebook as well as modern tools for Node including Webpack and Babel.

## Screent Shots

### Main Page
!["Sreenshot of main page"](https://github.com/vgjangsoo/chatty_app/blob/master/docs/main%20page.png?raw=true)

---------------------------------


### Usage

clone this repository, as well as chattty-app-server

Install the dependencies and start for both chatty-app and chattty-app-server.

```
git clone git@github.com:vgjangsoo/chatty_app.git
cd chatty_app
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies and start the server.

```
npm install
npm start
```

Start the second server.

```
cd to `chatty_server`
npm install
npm start
```

Go to http://localhost:3000 in your browser to start using the app. 😍


### Linting

This project includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* babel-core
* babel-loader
* babel-preset-es2015
* babel-preset-react
* babel-preset-stage-0
* css-loader
* eslint
* eslint-plugin-react
* node-sass
* sass-loader
* sockjs-client
* style-loader
