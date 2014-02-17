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
  var markup = createMarkup(href, references);
  var container = document.createElement('head');
  container.innerHTML = markup;
  return container.children[0];
}

module.exports = {
  createMarkup: createMarkup,
  createElement: createElement
};
