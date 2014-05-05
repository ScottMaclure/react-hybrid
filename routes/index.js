/**
 * Default routes.
 */

exports.helloWorld = function (req, res) {
	res.send('Hello, World! (Need a template engine');
}

/**
 * Hello -> olleH
 */
exports.mirror = function (req, res) {
	res.send('Mirror: ' + (req.params.inputString || '').split('').reverse().join(''));
}
