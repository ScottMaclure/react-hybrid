/**
 * Default routes.
 */

var React = require('react');
var helloReactComponent = require('../components/HelloReact');
var FragmentHelper = require('../libs/FragmentHelper');

/**
 * Longhand demo showing each step, for debugging etc.
 */
exports.helloReact = function (req, res) {

	var props = {
		title: req.params.title || '(title)'
	};

	var component = helloReactComponent(props);

	var reactHtml = React.renderComponentToString(component);

	res.send(FragmentHelper.renderPage('index', reactHtml));

};

/**
 * Hello -> olleH
 */
exports.mirror = function (req, res) {
	res.send('Mirror: ' + (req.params.inputString || '').split('').reverse().join(''));
};