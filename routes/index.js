/**
 * Default routes.
 */

var React = require('react');
var helloReactComponent = require('../components/HelloReact');

/**
 * Longhand demo showing each step, for debugging etc.
 */
exports.helloReact = function (req, res) {

	var props = {
		title: req.params.title || '(title)'
	};

	var component = helloReactComponent(props);

	var html = React.renderComponentToString(component);

	res.send(html);

};

/**
 * Hello -> olleH
 */
exports.mirror = function (req, res) {
	res.send('Mirror: ' + (req.params.inputString || '').split('').reverse().join(''));
};