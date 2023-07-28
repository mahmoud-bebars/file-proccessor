const express = require("express");

const createError = require("http-errors");
const uploadRouter = require("./routes/router");
const path = require("path");
const port = process.env.PORT || 5000;
const logger = require("morgan");

const app = express();

// set static files
app.use(express.static("public"));
app.use(express.static("upload"));

app.use("/assets", express.static(path.join(__dirname, "/public")));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "hbs");

// body & cookie parsers setup
app.use(logger("tiny"));
app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: false }));

// trust proxy
app.enable("trust proxy");

app.use("/api", uploadRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.listen(port, () => {
  console.log(
    `server is up and listening to port: ${port} on http://localhost:${port}`
  );
});
