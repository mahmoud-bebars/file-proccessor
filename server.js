const express = require("express");
const exphbs = require("express-handlebars");
const fileupload = require("express-fileupload");

const db = require("./models/db");

const uploadRouter = require("./routes/photoUploadRoute");

const app = express();
app.use(fileupload());
const port = process.env.PORT || 5000;

// set static files
app.use(express.static("public"));
app.use(express.static("upload"));

// templeting engine
app.engine("hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", "hbs");

db.start.connect((err) => {
  if (err) throw err;
  console.log("mysql db is connected successfully");
});

app.get("/", (req, res) => {
  db.start.query("SELECT * FROM users WHERE id = '1'", (err, rows) => {
    if (!err) {
      res.render("index", { rows });
    } else {
      throw err;
    }
  });
});

app.use("/upload", uploadRouter);

app.listen(port, () => {
  console.log(
    `server is up and listening to port: ${port} on http://localhost:${port}`
  );
});
