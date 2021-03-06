require("./config/config");

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require("./routes/user"));

app.use(require("./routes/address"));

app.use(require("./routes/information"));

mongoose.connect(
  process.env.URLDB,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) throw err;

    console.log("DATABASE ONLINE");
  });

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}...`);
});
