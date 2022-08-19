const express = require('express');
const app = express();
const rutas = require("./src/routes/index")


//require('./db.js');


app.use("/", rutas);

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

app.listen(3001, () => {
  console.log('%s listening in port 3001')
})


module.exports = app;