/**
 * react-hybrid - express server.
 * @see http://expressjs.com/4x/api.html
 */

var express = require('express'),
	serveStatic = require('serve-static'),
	errorHandler = require('errorhandler'),
	http = require('http'),
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
// Won't need that many.
app.route('/').get(indexRoute.helloWorld);
app.route('/mirror/:inputString').get(indexRoute.mirror);

// @see http://stackoverflow.com/questions/17696801/express-js-app-listen-vs-server-listen
app.listen(app.get('port'), function () {
	console.log("HTTP server listening on: http://localhost:" + app.get('port'));
});