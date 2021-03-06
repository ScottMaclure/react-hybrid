/**
 * Default routes.
 */

var React = require('react');
var helloReactComponent = require('../components/HelloReact');
var helloAppComponent = require('../components/HelloApp');
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
 * Testing nested react components.
 */
exports.helloPlanets = function (req, res) {

	var planets = (req.params.planets || '').split(',');

	if (planets[0].trim() === '') {
		planets = [ 'Earth' ];
	}

	var components = [];

	planets.forEach(function (planet) {
		components.push(helloReactComponent({ title: planet }));
	});

	var app = helloAppComponent({ components: components });

	var reactHtml = React.renderComponentToString(app);

	res.send(FragmentHelper.renderPage('index', reactHtml));

};

/**
 * Hello -> olleH
 */
exports.mirror = function (req, res) {
	res.send('Mirror: ' + (req.params.inputString || '').split('').reverse().join(''));
};