// import formidable file handler package & middleware func
const formidable = require("formidable");
// imports sharp package for image resizing & cropping
const sharp = require("sharp");
// import path finder from nodejs Core
const path = require("path");
const { imageProcessor } = require("../utils/imageProcessor");
exports.uploadPhoto = async (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req, async function (err, fields, files) {
    if (err) {
      res.json({
        error: err,
      });
    } else {
      const { imgSettings } = fields;
      const file = files.image;
      const output = path.join(process.cwd(), "/public/assets/");
      const metadata = await sharp(file.filepath).metadata();
      const settings = await JSON.parse(imgSettings);
      const resizedImage = await imageProcessor(
        file,
        settings.width,
        settings.height,
        settings.name,
        settings.format
      );
      return res.status(200).json({
        statusCode: 200,
        message: "Image Uploaded",
        formdata: settings,
        settings: settings,
        beforeMeta: metadata,
        /* url: `${output}/public/assets/${name}.${formate}`,
      
        afterMetaData: resizedImage, */
      });
    }
  });
};
