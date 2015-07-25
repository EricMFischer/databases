var db = require('../db');
var connection = require('../db/index');



module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (req, res) { // a function which can be used to insert a message into the database
      var message = req.body.message;
      var username = req.body.username;
      var roomname = req.body.roomname;
      console.log('request is here', req.body);
      var data = {
        "Data":""
      };
      connection.query("SELECT * FROM messages", [message, username, roomname], function(err, rows, fields){
        if(rows.length != 0){
          data["Data"] = "Successfully logged in..";
          res.json(data);
        }else{
          data["Data"] = "Email or password is incorrect.";
          res.json(data);
        }
      });
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {
      var message = req.body.message;
      var username = req.body.username;
      var roomname = req.body.roomname;
      console.log('request is here', req.body);
      var data = {
        "Data":""
      };
      connection.query("SELECT * FROM messages", [message, username, roomname], function(err, rows, fields){
        if(rows.length != 0){
          data["Data"] = "Successfully logged in..";
          res.json(data);
        }else{
          data["Data"] = "Email or password is incorrect.";
          res.json(data);
        }
      });
    }
  }
};

