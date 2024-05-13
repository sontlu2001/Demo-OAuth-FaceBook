const express = require('express')
const bodyParser = require("body-parser");
require('dotenv').config()

const port = 4000
const app = express();

// init body-parser
app.use(bodyParser.json());

// init routers
app.use("", require("./routes"));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

// error handler
app.use((error, req, res, next) => {
  const statusCode = error.status || 500;  
  const response = {
    status: "error",
    code: statusCode,
    message: error.message || "Internal Server Error",
  }
  
  return res.status(statusCode).json(response);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
