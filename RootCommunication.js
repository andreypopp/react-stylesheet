"use strict";

/**
 * Provide `getRootComponent()` method to acquire a reference to the root
 * component.
 */
var RootCommunication = {

  getRootComponent: function() {
    var root = this;
    while (root._owner) root = root._owner;
    return root;
  }
};

module.exports = RootCommunication;
