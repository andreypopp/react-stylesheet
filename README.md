# react-stylesheet

A mixin for React components to declare stylesheet dependencies.

## Motivation

We want to create React components which are completely self-contained and
include all needed styling. Such components should be distributed using a
package manager (probably npm) and be easy to reuse.

## Installation

    % npm install react-stylesheet

## Usage

Library exports a single mixin `ReactStylesheet` which expects a component to
provide `stylesheets` attribute which should be an array of URLs to stylesheets:

    var React           = require('react')
    var ReactStylesheet = require('react-stylesheet')

    var Button = React.createClass({
      mixins: [ReactStylesheet],

      stylesheets: [
        "/assets/widgets/button.css"
      ],

      render: function() {
        return <a>{this.props.label}</a>
      }
    })

After rendering the component, the declared stylesheets will be inserted into
document's head.

The idea is that you should be able to add stylesheets to the document even if
your component doesn't render the `<head>` element.

But it's obvious that knowing all URLs beforehand when packaging a reusable
component isn't possible. Fortunately, there are tools which address that.

## Using with require-assets

You can use [require-assets][] library to reference static assets from npm
packages. This library exports a single function `requireAssets` which resolve
an asset identifier into an URL.

    var React           = require('react');
    var ReactStylesheet = require('react-stylesheet');
    var requireAssets   = require('require-assets');

    var Button = React.createClass({
      stylesheets: [
        requireAssets('./styles.css')
      ],

      render: function() {
        return <a>this.props.children</a>
      }
    })

[require-assets]: https://github.com/andreypopp/require-assets

## Server-side rendering

If you use fullpage rendering and prerender your UI on server with
`React.renderComponentToString(...)`, then all the `<link>` tags will be
rendered inside the `<head>` tag.

## Implementation notes

**Garbage collection for stylesheets.** It is possible to extend
`react-stylesheet` to allow to purge unused stylesheets. This can be done by
storing a reference counter for each stylesheet. When such a counter hits 0, we
can remove the corresponding stylesheet from the DOM. That could hit some edge
cases where some small UI update can trigger a style recalc and reflow, to avoid
that we can invent more advanced strategies to purge unused stylesheets, e.g.
when number of CSS rules is above the threshold, do some time-ammortized purges
and so on...

**Stylesheet bundling.** It is easy to extend `react-stylesheet` to support
bundled stylesheets. We just need to remap original CSS reference to a bundle
reference. It doesn't matter if we bundle all stylesheet into one big bundle or
split bundles per UI screens — this mechanism support both scenarious. This
integrates smoothly with the garbage collection mechanism described above.
