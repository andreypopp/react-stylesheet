# react-stylesheet

A component for React to declare stylesheet dependencies for your reusable
components.

## Installation

    % npm install react-stylsheets

## Usage

Use `<Stylesheet />` component to declare a stylesheet dependency:

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

The idea is that you should be able to add stylesheets to the document even if
your component doesn't render the `<head>` element.

## Using with require-assets

If you are using [require-assets][] library to reference static assets from npm
packages, you can pass a result of `requireAssets(...)` call directly to
`Stylesheet` component:

    var React         = require('react');
    var Stylesheet    = require('react-stylesheet');
    var requireAssets = require('require-assets');

    var Button = React.createClass({
      render: function() {
        return (
          <a>
            <Stylesheet href={requireAssets('./index.css')}/>
            ...
          </a>
        );
      }
    });

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
