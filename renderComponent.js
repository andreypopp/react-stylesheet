"use strict";

var React               = require('react');

var renderComponentImpl = React.renderComponent;

var renderHappened = false;

/**
 * We set a special flat which instructs ReactStylesheet components to ignore
 * stylesheets reference counts on componentDidMount callback if there's markup
 * from server side rendering left.
 */
function renderComponent(component, element) {
  component = renderComponentImpl(component, element);
  if (!renderHappened) {
    renderHappened = true;
  }
  return component;
}

module.exports = renderComponent;
module.exports.renderHappened = renderHappened;
