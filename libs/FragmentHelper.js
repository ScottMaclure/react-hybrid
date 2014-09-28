/**
 * Dinky little helper to load html fragments to house React components.
 * Needs to be replaced with something elegant, for sure.
 */

var fs = require('fs');

module.exports = {

	/**
	 * @see http://nodejs.org/api/fs.html#fs_fs_readfilesync_filename_options
	 */
	loadFragment: function (fragmentName) {
		// Fixed paths for project. Could make generic, but will end up removing this helper altogether later.
		return fs.readFileSync(__dirname + '/../fragments/' + fragmentName + '.html', 'utf-8');
	},

	renderPage: function (fragmentName, reactHtml) {
		var templateHtml = this.loadFragment(fragmentName);
		return templateHtml.replace('{{reactHtml}}', reactHtml);
	}

};