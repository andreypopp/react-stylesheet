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
    var links = typeof document !== 'undefined' ?
      readStylesheetImagesFromDOM() :
      [];
    return this.transferPropsTo(head(null, links.concat(this.props.children)));
  }
});

/**
 * Read stylesheet images from DOM.
 *
 * @private
 */
function readStylesheetImagesFromDOM() {
  var links = document.querySelectorAll('link[data-references]');
  return Array.prototype.map.call(links, function(node) {
    var href = node.getAttribute('href');
    return React.DOM.link({
      'data-references': node.getAttribute('data-references'),
      href: href,
      key: href
    });
  });
}

module.exports = ReactStylesheetHead;
