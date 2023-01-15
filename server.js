var express = require('express');
var app = express();
const mongodb = require('./db/connect');
const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Server is running on port ${port}`);
  }
});