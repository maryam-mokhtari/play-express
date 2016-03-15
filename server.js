var logger = require('./logger')
var express = require('express');
var app = express();

app.get('/api/users',
logger,
function access(req, res, next) {
  console.log("Middleware");
  if (req.query.id != 1) {
    res.send("You don't have access!")
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
app.listen(3000);
