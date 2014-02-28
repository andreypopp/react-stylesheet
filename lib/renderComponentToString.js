"use strict";

var React           = require('react');
var StylesheetImage = require('./StylesheetImage');

var renderComponentToStringImpl = React.renderComponentToString;

/**
 * Render component to string
 *
 * This mimics the original React.renderComponentToString but injects collected
 * stylesheets into markup's <head>.
 *
 * @param {Component} component
 */
function renderComponentToString(component) {
  var markup = renderComponentToStringImpl(component);
  if (component.__stylesheets) {
    markup = injectStylesheetImages(markup, component.__stylesheets);
  }
  return markup;

}

/**
 * Inject stylesheet images into markup.
 *
 * @private
 *
 * @param {String} markup
 * @param {Object} stylesheets
 */
function injectStylesheetImages(markup, stylesheets) {
  var injection = Object.keys(stylesheets)
    .map(StylesheetImage.createImageMarkup)
    .join('');
  markup = markup.replace(/<head[^>]*>/, function(m) { return m + injection });
  return markup;
}

module.exports = renderComponentToString;
