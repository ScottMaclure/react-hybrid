/**
 * react-hybrid - express server.
 * @see http://expressjs.com/4x/api.html
 */

var express = require('express'),
	serveStatic = require('serve-static'),
	errorHandler = require('errorhandler'),
	path = require('path');

var app = express();

app.set('port', process.env.PORT || 7000);

// Static file server.
app.use(serveStatic(path.join(__dirname, 'public')));

// Required to support JSON-encoded bodies
//app.use(express.json());

// TODO Check for process.env.NODE_ENV === 'development'
app.use(errorHandler());

// Load routes, passing app
// TODO Hecate?
var indexRoute = require('./routes/index');

// Bind routes

// Test routes.
app.route('/').get(indexRoute.helloReact);
app.route('/mirror/:inputString').get(indexRoute.mirror);

// React routes.
// e.g. http://localhost:7000/hello/Jupiter
app.route('/hello/:title').get(indexRoute.helloReact);

// e.g. http://localhost:7000/helloPlanets/Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune
app.route('/helloPlanets/:planets').get(indexRoute.helloPlanets);

// @see http://stackoverflow.com/questions/17696801/express-js-app-listen-vs-server-listen
app.listen(app.get('port'), function () {
	console.log('HTTP server listening on: http://localhost:' + app.get('port'));
});