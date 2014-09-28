var React = require('react'),
	DOM = React.DOM,
	div = DOM.div;

module.exports = React.createClass({

	propTypes: {
		title: React.PropTypes.string,
		components: React.PropTypes.arrayOf(React.PropTypes.component)
	},

	getDefaultProps: function () {
		return {
			title: 'Hello App Test',
			components: []
		};
	},

	render: function () {


		var componentsOutput = [];

		// Could make this a component.
		componentsOutput.push(
			DOM.div(
				{ className: 'page-header' },
				DOM.h1(
					null,
					this.props.title
				)
			)
		);

		// Wrap all components in grid rows.
		for (var i = 0; i < this.props.components.length; i++) {
			componentsOutput.push(
				div(
					{ className: 'row spacer', key: i },
					div(
						{ className: 'col-xs-12' },
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