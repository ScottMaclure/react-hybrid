/**
 * Simple React component (sans-JSX) to test server setup.
 */

var React = require('react'),
	// Allows for shorthand notation in render() method.
	DOM = React.DOM,
	div = DOM.div;

module.exports = React.createClass({

	render: function () {

		return div(
			{ className: 'helloWorld' },
			'Hello, ReactWorld!'
		);

	}

});
