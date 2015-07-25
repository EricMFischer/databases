var db = require('../db'); // database folder is being exported here to models

module.exports = {
  messages: {
    get: function (req, res) { // a function which produces all the messages
      var queryString = "select * from messages"
      db.connection.query(queryString, function(err, rows, fields){
        if (err) {
          console.log(err)
        } else {
          var data = {results: []}
          data.results = rows;
          console.log(data);
          res.end(JSON.stringify(data));
        }
      });
    },

    post: function (req, res) { // a function which can be used to insert a message into the database
      var message = req.body.message;
      var username = req.body.username;
      var roomname = req.body.roomname;
      var queryString = "insert into messages (username, message, roomname) values(" + "'" + username + "'," + "'" + message + "'," + "'" + roomname + "'" + ")"
      console.log(queryString);
  
      db.connection.query(queryString, function(err, rows, fields){
        if (err) {
          res.end("Hey there's an error" + err);
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(rows);
        }
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      var queryString = "select * from username"
      db.connection.query(queryString, function(err, rows, fields){
        if (err) {
          console.log(err)
        } else {
          res.end(JSON.stringify(rows));
        }
      });
    },

    post: function (req,res) {
      var username = req.body.username;
      var queryString = "insert into username (username) values ('" + username + "')"

      db.connection.query(queryString, function(err, rows, fields){
        if (err) {
          console.log(err);
        }
        else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(JSON.stringify(rows));
        }
      });
    }
  }

};

