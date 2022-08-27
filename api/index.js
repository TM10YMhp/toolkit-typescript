require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require('morgan');
const cors = require('cors')

require("./src/database/connectdb.js");
const rutas = require("./src/routes/index");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const whiteList = [process.env.ORIGIN1 || 'http://localhost:3000'];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || whiteList.includes(origin)) {
        return callback(null, origin);
      }
      return callback(
        "Error de CORS origin: " + origin + " No autorizado!"
      );
    },
    credentials: true,
  })
);
//app.use(cors())
//app.use((req, res, next) => {
//  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
//  res.header('Access-Control-Allow-Credentials', 'true');
//  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//  next();
//});

// app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());

// ejemplo del login/token
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("🔥🔥🔥 http://localhost:" + PORT);
});

app.use("/", rutas);

app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(`${err.message}\n${err}\nerror name: ${err.name}`);
  res.status(status).send(message);
});

module.exports = app;
