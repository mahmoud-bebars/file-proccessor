const express = require("express");
const controller = require("../models/uploader");

const router = express.Router();

// photo upload function route
router.get("/", (req, res) => {
  res.render("index", { title: "Image Uploader" });
});
router.post("/upload", controller.uploadPhoto);

module.exports = router;
