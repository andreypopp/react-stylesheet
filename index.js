"use strict";

var React                   = require('react');
var renderComponentToString = require('./lib/renderComponentToString');
var ReactStylesheetMixin    = require('./lib/ReactStylesheetMixin');

React.renderComponentToString = renderComponentToString;

module.exports = ReactStylesheetMixin;
