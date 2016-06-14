/**
 * A ClientFile
 *
 * @constructor
 *
 * @author   Jelle De Loecker <jelle@develry.be>
 * @since    0.1.0
 * @version  0.1.0
 */
var MyPlugin = Function.inherits('ClientFile', function MyPluginClientFile(client, settings) {

	var that = this;

	// Call the parent constructor
	MyPluginClientFile.super.call(this, client, settings);
});

/**
 * Startup!
 *
 * @author   Jelle De Loecker <jelle@develry.be>
 * @since    0.1.0
 * @version  0.1.0
 */
MyPlugin.setMethod(function start(callback) {
	// Call back when started
	callback(null);
});

/**
 * Stop
 *
 * @author   Jelle De Loecker <jelle@develry.be>
 * @since    0.1.0
 * @version  0.1.0
 */
MyPlugin.setMethod(function stop() {
	// Stop the plugin
});

module.exports = MyPlugin.create;