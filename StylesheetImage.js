"use strict";

/**
 * Create markup for stylesheet image.
 *
 * @private
 *
 * @param {String} href
 */
function createMarkup(href) {
  return '<link rel="stylesheet" href="' + href + '">';
}

function createElement(href) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  return link;
}

module.exports = {
  createMarkup: createMarkup,
  createElement: createElement
};
