"use strict";

var React                 = require('react');
var StylesheetImage       = require('./StylesheetImage');

var renderComponentToStringImpl = React.renderComponentToString;

/**
 * Render component to string
 *
 * @param {Component} component
 */
function renderComponentToString(component) {
  var markup = renderComponentToStringImpl(component);

  if (component.__stylesheets_headNodeID && component.__stylesheets) {
    markup = injectStylesheetImages(
      markup,
      component.__stylesheets,
      component.__stylesheets_headNodeID
    );
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
 * @param {String} headNodeID
 */
function injectStylesheetImages(markup, stylesheets, headNodeID) {
  var injection = [];
  for (var href in stylesheets)
    injection.push(StylesheetImage.createMarkup(headNodeID, href, stylesheets[href]));
  injection = injection.join('');
  markup = markup.replace(/<head[^>]*>/, function(m) { return m + injection });
  return markup;
}

module.exports = renderComponentToString;
