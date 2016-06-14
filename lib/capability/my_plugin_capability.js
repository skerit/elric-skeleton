/**
 * My Capability
 *
 * @constructor
 *
 * @author   Jelle De Loecker   <jelle@develry.be>
 * @since    0.0.1
 * @version  0.1.0
 */
var MyPlugin = Function.inherits('Capability', function MyPluginCapability() {
	MyPluginCapability.super.call(this);
});

/**
 * Constitute the class wide schema
 *
 * @author   Jelle De Loecker <jelle@develry.be>
 * @since    0.1.0
 * @version  0.1.0
 */
MyPlugin.constitute(function addFields() {
	this.schema.addField('login', 'String', {default: 'elric'});
	this.schema.addField('port', 'Number', {default: 22});
});

/**
 * The version of the client file
 *
 * @type   {String}
 */
MyPlugin.setProperty('version', '0.1.0');

/**
 * The description of this capability
 *
 * @type   {String}
 */
MyPlugin.setProperty('description', '');

/**
 * The view element to use for the configuring panel
 *
 * @type   {String}
 */
MyPlugin.setProperty('config_element', '');