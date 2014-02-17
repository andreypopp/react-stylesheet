"use strict";

var React             = require('react');
var head              = React.DOM.head;
var RootCommunication = require('./RootCommunication');

/**
 * Component which hosts stylesheet images.
 */
var ReactStylesheetHead = React.createClass({

  displayName: 'ReactStylesheetHead',

  mixins: [RootCommunication],

  render: function() {
    if (typeof window === 'undefined') {
      var root = this.getRootComponent();
      root.__stylesheets_headNodeID = this._rootNodeID;
    }
    return this.transferPropsTo(head(null, this.props.children));
  }
});

module.exports = ReactStylesheetHead;
