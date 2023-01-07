const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use('/', require('./routes'))


app.listen(port, () => console.log(`App listening on port ${port}!`));