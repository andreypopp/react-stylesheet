/**
 * @jsx React.DOM
 */

var React       = require('react');
var Stylesheet  = require('react-stylesheet');

var App = React.createClass({displayName: 'App',
  render: function() {
    return (
      React.DOM.html(null, 
        React.DOM.head(null, 
          React.DOM.link( {rel:"stylesheet", href:"styles/main.css"} ),
          React.DOM.script( {src:"bundle.js"})
        ),
        React.DOM.body(null, 
          Body(null )
        )
      )
    );
  }
});

var Body = React.createClass({displayName: 'Body',
  getInitialState: function() {
    return {coin: true};
  },
  onClick: function(coin) {
    this.setState({coin: coin});
  },
  render: function() {
    return (
      React.DOM.div(null, 
        " Hello! ",
        this.state.coin ?
          RedButton( {onClick:this.onClick} ) :
          BlueButton( {onClick:this.onClick} )
      )
    );
  }
});

var RedButton = React.createClass({displayName: 'RedButton',
  render: function() {
    return (
      React.DOM.a( {className:"Button RedButton", onClick:this.props.onClick.bind(null, false)}, 
        Stylesheet( {href:"styles/button.css"} ),
        Stylesheet( {href:"styles/red-button.css"} ),
        " RED "
      )
    );
  }
});

var BlueButton = React.createClass({displayName: 'BlueButton',
  render: function() {
    return (
      React.DOM.a( {className:"Button BlueButton", onClick:this.props.onClick.bind(null, true)}, 
        Stylesheet( {href:"styles/button.css"} ),
        Stylesheet( {href:"styles/blue-button.css"} ),
        " BLUE "
      )
    );
  }
});

if (typeof window !== 'undefined') {
  window.onload = function() {
    React.renderComponent(App(), document);
  }
}
module.exports = App;
