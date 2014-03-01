var assert                = require('assert');
var React                 = require('react');
var ReactTestUtils        = require('react/lib/ReactTestUtils');
var ReactStylesheetMixin  = require('../lib/ReactStylesheetMixin');

describe('ReactStylesheetMixin (browser)', function() {

  var Component = React.createClass({
    mixins: [ReactStylesheetMixin],

    stylesheets: [
      '/assets/style.css'
    ],

    render: function() {
      return React.DOM.div(null, 'Hello');
    }
  });

  it('inserts stylesheet into DOM on mount', function() {
    ReactTestUtils.renderIntoDocument(Component());
    var links = document.head.querySelectorAll('link');
    assert.equal(links.length, 1);
    var link = links[0];
    assert(link.dataset.reactStylesheet);
    assert(link.href.match(/\/assets\/style\.css$/));
  });

  it('does not duplicate link elements in DOM', function() {
    ReactTestUtils.renderIntoDocument(Component());
    ReactTestUtils.renderIntoDocument(Component());
    var links = document.head.querySelectorAll('link');
    assert.equal(links.length, 1);
  });

});
