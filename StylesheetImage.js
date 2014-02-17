"use strict";

/**
 * Create markup for stylesheet image.
 *
 * @private
 *
 * @param {String} href
 * @param {String} references
 */
function createMarkup(href, references) {
  return (
    '<link rel="stylesheet" href="' + href + '"' +
      ' data-references="' + references + '"' + '></link>'
  );
}

function createElement(href, references) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.setAttribute('data-references', references);
  return link;
}

module.exports = {
  createMarkup: createMarkup,
  createElement: createElement
};
