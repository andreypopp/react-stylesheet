"use strict";

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
  return (
    '<link rel="stylesheet" href="' + href + '"' +
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
