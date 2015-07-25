var models = require('../models');
var bluebird = require('bluebird');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages

    post: function (req, res) { // a function which handles posting a message to the database
    console.log('POST /');
    console.log(req.body);
    models.messages.post(req, res);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('thanks');
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {console.log('test2')},
    post: function (req, res) {
      console.log('userPostRequest');
      models.messages.post(req, res);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('thanks');
    }
  }
};