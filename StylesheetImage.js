"use strict";

var escapeTextForBrowser  = require('react/lib/escapeTextForBrowser');
var wrapUserProvidedKey   = require('./wrapUserProvidedKey');

/**
 * Create markup for stylesheet image.
 *
 * @private
 *
 * @param {String} rootNodeID
 * @param {String} href
 * @param {String} references
 */
function createMarkup(rootNodeID, href, references) {
  var key = escapeTextForBrowser(wrapUserProvidedKey(href));
  return (
    '<link rel="stylesheet" href="' + href + '"' +
      ' data-reactid="' + rootNodeID + '.' + key + '"' +
      ' data-references="' + references + '"' + '></link>'
  );
}

function createElement(rootNodeID, href, references) {
  var markup = createMarkup(rootNodeID, href, references);
  var container = document.createElement('head');
  container.innerHTML = markup;
  return container.children[0];
}

module.exports = {
  createMarkup: createMarkup,
  createElement: createElement
};
