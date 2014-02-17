"use strict";

var React               = require('react');
var RootCommunication   = require('./RootCommunication');
var StylesheetImage     = require('./StylesheetImage');

var ReactStylesheet = React.createClass({

  displayName: 'ReactStylesheet',

  mixins: [RootCommunication],

  getImage: function() {
    return document.head.querySelector('link[href="' + this.props.href + '"]');
  },

  ensureImageMounted: function() {
    var image = this.getImage();
    if (!image) {
      var element = StylesheetImage.createElement(this.props.href);
      insertImage(element);
    }
  },

  shouldComponentUpdate: function(nextProps) {
    return nextProps.href !== this.props.href;
  },

  componentDidMount: function() {
    this.ensureImageMounted();
  },

  componentDidUpdate: function() {
    this.ensureImageMounted();
  },

  render: function() {
    var root = this.getRootComponent();
    var stylesheets = root.__stylesheets = root.__stylesheets || {};
    stylesheets[this.props.href] = true;
    return React.DOM.noscript({key: this.props.href});
  }
});

function insertImage(element) {
  var images = document.head.querySelectorAll('link[data-react-stylesheet]');
  if (images.length === 0) {
    if (document.head.firstChild) {
      document.head.insertBefore(element, document.head.firstChild);
    } else {
      document.head.appendChild(element);
    }
  } else {
    var last = images[images.length - 1];
    if (last.nextSibling) {
      document.head.insertBefore(element, last.nextSibling);
    } else {
      document.head.appendChild(element);
    }
  }
}

module.exports = ReactStylesheet;
