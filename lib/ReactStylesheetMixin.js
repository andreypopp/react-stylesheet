"use strict";

var StylesheetImage   = require('./StylesheetImage');

/**
 * Mixin for React component to define stylesheets they depend on.
 */
var ReactStylesheetMixin = {

  _ensureImagesMounted: function() {
    for (var i = 0, len = this.stylesheets.length; i < len; i++) {
      var href = this.stylesheets[i];
      if (!StylesheetImage.hasImage(href)) {
        StylesheetImage.insertImage(href)
      }
    }
  },

  componentWillMount: function() {
    var root = getRootComponent(this);
    var registry = root.__stylesheets = root.__stylesheets || {};

    for (var i = 0, len = this.stylesheets.length; i < len; i++) {
      registry[this.stylesheets[i]] = true;
    }
  },

  componentDidMount: function() {
    this._ensureImagesMounted();
  },

  componentDidUpdate: function() {
    this._ensureImagesMounted();
  },
};


/**
 * Get root component in the hierarchy
 *
 * @private
 *
 * @param {ReactComponent} component
 */
function getRootComponent(component) {
  while (component._owner) {
    component = component._owner;
  }
  return component;
}

module.exports = ReactStylesheetMixin;
