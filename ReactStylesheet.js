"use strict";

var React               = require('react');
var ReactMarkupChecksum = require('react/lib/ReactMarkupChecksum');
var RootCommunication   = require('./RootCommunication');
var StylesheetImage     = require('./StylesheetImage');
var renderComponent     = require('./renderComponent');

var ReactStylesheet = React.createClass({

  displayName: 'ReactStylesheet',

  mixins: [RootCommunication],

  getImage: function() {
    var element = document.head.querySelector('link[href="' + this.props.href + '"]');
    if (!element) {
      return;
    }
    var references = element.getAttribute('data-references');
    if (!references) {
      return;
    }
    return {
      element: element,
      references: parseInt(references, 10),
      remove: function() {
        document.head.removeChild(element);
      },
      setReferences: function(num) {
        element.setAttribute('data-references', num);
      }
    };
  },

  shouldComponentUpdate: function(nextProps) {
    return nextProps.href !== this.props.href;
  },

  componentWillUnmount: function() {
    var image = this.getImage();
    if (!image) {
      return;
    }
    if (image.references === 1) {
      image.remove();
    } else {
      image.setReferences(image.references - 1);
    }
  },

  componentDidMount: function() {
    if (!renderComponent.renderHappened &&
        document.documentElement.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME)) {
      return;
    }

    var image = this.getImage();
    if (!image) {
      var element = StylesheetImage.createElement(this.props.href, 1);
      if (document.head.firstChild) {
        document.head.insertBefore(element, document.head.firstChild);
      } else {
        document.head.appendChild(element);
      }
    } else {
      image.setReferences(image.references + 1);
    }
  },

  componentWillUpdate: function() {
    this.componentWillUnmount();
  },

  componentDidUpdate: function() {
    this.componentDidMount();
  },

  render: function() {
    if (typeof window === 'undefined') {
      var root = this.getRootComponent();
      var stylesheets = root.__stylesheets = root.__stylesheets || {};
      stylesheets[this.props.href] = (stylesheets[this.props.href] || 0) + 1
    }
    return React.DOM.noscript({key: this.props.href});
  }
});

module.exports = ReactStylesheet;
