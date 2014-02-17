"use strict";

var React                   = require('react');
var renderComponentToString = require('./renderComponentToString');
var renderComponent         = require('./renderComponent');
var ReactStylesheet         = require('./ReactStylesheet');

React.renderComponent = renderComponent;
React.renderComponentToString = renderComponentToString;

module.exports = ReactStylesheet;
module.exports.Stylesheet = ReactStylesheet;
module.exports.renderComponentToString = renderComponentToString;
module.exports.renderComponent = renderComponent;
