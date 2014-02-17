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

window.onload = function() {
  React.renderComponent(App(), document.body);
}
