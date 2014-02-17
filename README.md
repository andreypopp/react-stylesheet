# react-stylesheet

A component for React to inject stylesheets links into document's head.

## Installation

    % npm install react-stylsheets

## Usage

Use `<Stylesheet />` component to declare stylesheets:

    var React       = require('react');
    var Stylesheet  = require('react-stylesheet');
    
    var App = React.createClass({
      render: function() {
        return (
          <div>
            <Stylesheet href="/assets/app.css" />
            <Button />
          </div>
        );
      }
    });

    var Button = React.createClass({
      render: function() {
        return (
          <a>
            <Stylesheet href="/assets/widgets/button.css" />
            ...
          </a>
        );
      }
    });

After rendering the component hierarchy, all declared stylesheets will be
inserted into document's head.

If you use fullpage rendering and prerender your UI on server with
`React.renderComponentToString(...)`, then all the `<link>` tags will be
rendered inside the `<head>` tag.
