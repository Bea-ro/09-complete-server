const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'art-api',
    allowFormats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
  }
});

const uploadImgCloudinary = multer({ storage });

const deleteImgCloudinary = (imgUrl) => {
  const imgSplitted = imgUrl.split('/');
  const nameSplitted = imgSplitted[imgSplitted.length - 1].split('.');
  const folderSplitted = imgSplitted[imgSplitted.length - 2];
  const public_id = `${folderSplitted}/${nameSplitted[0]}`;
  cloudinary.uploader.destroy(public_id, () => {
    console.log('image deleted');
  });
};

const configCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });
};

module.exports = {
  uploadImgCloudinary,
  deleteImgCloudinary,
  configCloudinary
};
