var React = require('react'),
	DOM = React.DOM,
	div = DOM.div;

module.exports = React.createClass({

	propTypes: {
		components: React.PropTypes.arrayOf(React.PropTypes.component)
	},

	getDefaultProps: function () {
		return {
			components: []
		};
	},

	render: function () {


		var componentsOutput = [];

		// Wrap all components in grid rows.
		for (var i = 0; i < this.props.components.length; i++) {
			componentsOutput.push(
				div(
					{ className: 'row', key: i },
					div(
						{ className: 'small-12 columns' },
						this.props.components[i]
					)
				)
			);
		}

		// Wrap in container.
		return div(
			{ className: 'container-fluid' },
			componentsOutput
		);

	}

});