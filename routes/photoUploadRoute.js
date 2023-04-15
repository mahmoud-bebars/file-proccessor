const express = require("express");
const moduleController = require("../models/photoUpload");

const router = express.Router();

// photo upload function route

router.post("", moduleController.photoUpload);

module.exports = router;
