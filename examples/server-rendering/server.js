var React   = require('react');
var express = require('express');
var nodejsx = require('node-jsx').install();
var App     = require('./client');

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
