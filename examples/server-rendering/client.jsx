/**
 * @jsx React.DOM
 */

var React       = require('react');
var Stylesheet  = require('../../');

var App = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <Stylesheet href="styles/main.css" />
          <script src="bundle.js"></script>
        </head>
        <body>
          <Body />
        </body>
      </html>
    );
  }
});

var Body = React.createClass({
  getInitialState: function() {
    return {coin: true};
  },
  onClick: function(coin) {
    this.setState({coin: coin});
  },
  render: function() {
    return (
      <div>
        Hello!
        {this.state.coin ?
          <RedButton onClick={this.onClick} /> :
          <BlueButton onClick={this.onClick} />}
      </div>
    );
  }
});

var RedButton = React.createClass({
  render: function() {
    return (
      <a className="Button RedButton" onClick={this.props.onClick.bind(null, false)}>
        <Stylesheet href="styles/button.css" />
        <Stylesheet href="styles/red-button.css" />
        RED
      </a>
    );
  }
});

var BlueButton = React.createClass({
  render: function() {
    return (
      <a className="Button BlueButton" onClick={this.props.onClick.bind(null, true)}>
        <Stylesheet href="styles/button.css" />
        <Stylesheet href="styles/blue-button.css" />
        BLUE
      </a>
    );
  }
});

if (typeof window !== 'undefined') {
  window.onload = function() {
    React.renderComponent(App(), document);
  }
}
module.exports = App;
