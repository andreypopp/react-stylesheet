"use strict";

var React                   = require('react');
var renderComponentToString = require('./renderComponentToString');
var ReactStylesheet         = require('./ReactStylesheet');

React.renderComponentToString = renderComponentToString;

module.exports = ReactStylesheet;
module.exports.Stylesheet = ReactStylesheet;
module.exports.renderComponentToString = renderComponentToString;
