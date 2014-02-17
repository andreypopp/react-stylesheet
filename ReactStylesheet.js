"use strict";

var React                 = require('react');
var ReactStylesheetMixin  = require('./ReactStylesheetMixin');

var ReactStylesheet = React.createClass({

  displayName: 'ReactStylesheet',

  mixins: [ReactStylesheetMixin],

  getStylesheets: function() {
    return [this.props.href];
  },

  shouldComponentUpdate: function(nextProps) {
    return nextProps.href !== this.props.href;
  },

  render: function() {
    return React.DOM.noscript({key: this.props.href});
  }
});

module.exports = ReactStylesheet;
