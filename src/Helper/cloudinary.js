// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("File has successfully uploaded ", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
  }
};

// export { uploadOnCloudinary };
module.exports = { uploadOnCloudinary };
