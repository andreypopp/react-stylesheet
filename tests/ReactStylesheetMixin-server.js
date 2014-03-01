var assert                  = require('assert');
var React                   = require('react');
var ReactStylesheetMixin    = require('../lib/ReactStylesheetMixin');
var renderComponentToString = require('../lib/renderComponentToString');

describe('ReactStylesheetMixin (server)', function() {

  var Component = React.createClass({
    mixins: [ReactStylesheetMixin],

    stylesheets: [
      '/assets/style.css'
    ],

    render: function() {
      return React.DOM.div(null, 'Hello');
    }
  });

  it('renders into a markup which contains <link> elements', function() {
    var markup = renderComponentToString(Component());
    assert(markup.match(/^<link /));
  });

  var App = React.createClass({

    render: function() {
      return React.DOM.html(null,
        React.DOM.head(null, React.DOM.title(null, 'title')),
        React.DOM.body(null, Component())
      );
    }
  });

  it('renders into a markup which contains <link> elements in <head> (if it presents)', function() {
    var markup = renderComponentToString(App());
    assert(markup.match(/<head[^>]*><link /));
  });

});
