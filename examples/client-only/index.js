/**
 * @jsx React.DOM
 */

var React       = require('react');
var Stylesheet  = require('../../');

var App = React.createClass({
  getInitialState: function() {
    return {coin: true};
  },
  onClick: function(coin) {
    this.setState({coin: coin});
  },
  render: function() {
    return (
      <div>
        <Stylesheet href="styles/main.css" />
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
  mixins: [Stylesheet.StylesheetMixin],

  getStylesheets: function() {
    return [
      "styles/button.css",
      "styles/blue-button.css"
    ];
  },

  render: function() {
    return (
      <a className="Button BlueButton" onClick={this.props.onClick.bind(null, true)}>
        BLUE
      </a>
    );
  }
});

window.onload = function() {
  React.renderComponent(App(), document.body);
}
