"use strict";

var StylesheetImage   = require('./StylesheetImage');

var ReactStylesheetMixin = {

  _ensureImagesMounted: function() {
    var stylesheets = this.getStylesheets();

    for (var i = 0, len = stylesheets.length; i < len; i++) {
      var href = stylesheets[i];
      if (!StylesheetImage.getImage(href)) {
        StylesheetImage.insertImage(href)
      }
    }
  },

  componentWillMount: function() {
    var stylesheets = this.getStylesheets();
    var root = getRootComponent(this);
    var registry = root.__stylesheets = root.__stylesheets || {};

    for (var i = 0, len = stylesheets.length; i < len; i++) {
      registry[stylesheets[i]] = true;
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
