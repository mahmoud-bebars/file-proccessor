// imports sharp package for image resizing & cropping
const sharp = require("sharp");
// import path finder from nodejs Core
const path = require("path");

exports.imageProcessor = async (file, width, height, name, format) => {
  const input = file.filepath;
  const output = path.join(process.cwd(), "/public/assets/");
  const meta = await sharp(file.filepath).metadata();
  const resizedImageMeta = await sharp(input)
    /*  .resize({
      width: parseInt(width),
      height: parseInt(height),
      position: "center",
    }) */
    .extract({
      left: meta.width / 2 - width / 2,
      top: meta.height / 2 - height / 2,
      width: width,
      height: height,
    })
    .toFormat(format)
    .toFile(`${output}${name}.${format}`)
    .then((info) => {
      return info;
    });
  return resizedImageMeta;
};
