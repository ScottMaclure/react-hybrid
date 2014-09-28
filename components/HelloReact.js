/**
 * Simple React component (sans-JSX) to test server setup.
 */

var React = require('react'),
	// Allows for shorthand notation in render() method.
	DOM = React.DOM,
	div = DOM.div;

module.exports = React.createClass({

	propTypes: {
		title: React.PropTypes.string
	},

	getDefaultProps: function () {
		return {
			title: 'World'
		};
	},

	render: function () {

		return div(
			{ className: 'helloWorld' },
			'Hello, ' + this.props.title + '!'
		);

	}

});
