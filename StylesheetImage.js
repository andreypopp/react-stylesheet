"use strict";

/**
 * Create markup for stylesheet image.
 *
 * @private
 *
 * @param {String} href
 */
function createMarkup(href) {
  return '<link rel="stylesheet" data-react-stylesheet="true" href="' + href + '">';
}

function createNode(href) {
  var link = document.createElement('link');
  link.dataset.reactStylesheet = "true";
  link.rel = 'stylesheet';
  link.href = href;
  return link;
}

module.exports = {
  createMarkup: createMarkup,
  createNode: createNode
};
