var React                   = require('react');
var renderComponentToString = require('./renderComponentToString');
var renderComponent         = require('./renderComponent');
var ReactStylesheetHead     = require('./ReactStylesheetHead');
var ReactStylesheet         = require('./ReactStylesheet');

React.renderComponent = renderComponent;
React.renderComponentToString = renderComponentToString;
React.DOM.head = ReactStylesheetHead;

module.exports = ReactStylesheet;
module.exports.Stylesheet = ReactStylesheet;
module.exports.StylesheetHead = ReactStylesheetHead;
module.exports.renderComponentToString = renderComponentToString;
module.exports.renderComponent = renderComponent;
