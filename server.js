var express = require('express');
var app = express();

app.get('/api/users', function(req, res) {
  res.json(
  [{
    id: 1,
    name: 'Maryam'
  },
  {
    id: 2,
    name: 'Gholi'
  }]
);
} );
app.listen(3000);
