const express = require("express");
const fileupload = require("express-fileupload");
const path = require("path");

const app = express();

// express fileupload deafult option
app.use(fileupload());

const db = require("./db");

function photoUpload(req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("no files were uploaded");
  }

  // name of the input sampleFile
  sampleFile = req.files.sampleFile;
  uploadPath = path.dirname("server") + "/upload/" + sampleFile.name;

  //   console.log(sampleFile);

  //use mv() to place file on the server
  sampleFile.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      //   res.send("file uploaded!");
      db.start.query(
        "UPDATE users SET profileImage = ? where id = '1'",
        [sampleFile.name],
        (err, rows) => {
          if (!err) {
            res.redirect("/");
          } else {
            console.log(err);
          }
        }
      );
    }
  });
}
module.exports = { photoUpload };
