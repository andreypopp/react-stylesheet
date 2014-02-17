var React   = require('react');
var App     = require('./client');
var express = require('express');

express()
  .use(express.static(__dirname))
  .get('/', function(req, res, next) {
    try {
      var markup = React.renderComponentToString(App());
      res.send(markup);
    } catch(err) {
      next(err);
    }
  })
  .listen(3000, function() {
    console.log('point your browser at http://localhost:3000'); 
  });
