/**
 * Default routes.
 */

var React = require('react');
var helloReactComponent = require('../components/HelloReact');

/**
 * Basic test to show the server is working.
 */
exports.helloWorld = function (req, res) {
	res.send('Hello, World! (Need a template engine?)');
};

/**
 * Longhand demo showing each step, for debugging etc.
 */
exports.helloReact = function (req, res) {
	var component = helloReactComponent();
	var html = React.renderComponentToString(component);
	res.send(html);
};

/**
 * Hello -> olleH
 */
exports.mirror = function (req, res) {
	res.send('Mirror: ' + (req.params.inputString || '').split('').reverse().join(''));
};