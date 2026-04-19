const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputFolder = "./pictures";
const outputFolder = "./optimized-images";

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

fs.readdirSync(inputFolder).forEach(file => {
  const inputPath = path.join(inputFolder, file);
  const outputPath = path.join(outputFolder, file);

  sharp(inputPath)
    .resize({ width: 1200 }) // optional resize
    .jpeg({ quality: 70 })
    .toFile(outputPath);

  console.log("Compressed:", file);
});