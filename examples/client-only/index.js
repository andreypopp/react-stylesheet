/**
 * @jsx React.DOM
 */

var React           = require('react');
var ReactStylesheet = require('../../');

var App = React.createClass({
  mixins: [ReactStylesheet],

  stylesheets: [
    "styles/main.css"
  ],

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
  mixins: [ReactStylesheet],

  stylesheets: [
    "styles/button.css",
    "styles/red-button.css"
  ],

  render: function() {
    return (
      <a className="Button RedButton" onClick={this.props.onClick.bind(null, false)}>
        RED
      </a>
    );
  }
});

var BlueButton = React.createClass({
  mixins: [ReactStylesheet],

  stylesheets: [
    "styles/button.css",
    "styles/blue-button.css"
  ],

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
