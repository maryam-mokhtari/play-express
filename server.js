var logger = require('./logger')
var express = require('express');
var app = express();
var redis = require("redis");
var client = redis.createClient({host: 'redis', port: 6379});

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on("error", function (err) {
  console.log("Error " + err);
});
client.set('1001', 'yas')
client.set('1002', 'maryam')

app.get('/api/users', logger,
function access(req, res, next) {
  console.log("Middleware");
  if (req.query.id != 1) {
    client.get(req.query.id, (err, reply) => {
        res.send(reply + " don't have access!")
    })

  } else {
    next()
    console.log("main logger");
  }

},
function(req, res) {
  res.json(
    [{
      id: 1,
      name: 'Maryam'
    },
    {
      id: 2,
      name: 'Goli'
    }]
  );
});
app.listen(8080, function(){
  console.log('listening on port 8080')
})
