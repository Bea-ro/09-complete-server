const Avatar = require('../models/avatar');
const { deleteImgCloudinary } = require('../../middlewares/uploadFile');

const uploadAvatar = async (req, res, next) => {
  try {
    const newAvatar = new Avatar(req.body);
    if (req.file) {
      newAvatar.image = req.file.path;
    }
    const uploadedAvatar = await newAvatar.save();
    return res.status(201).json(uploadedAvatar);
  } catch (error) {
    return res.status(400).json({ message: 'Error uploading image', error: error });
  }
};

const updateAvatar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newAvatar = new Avatar(req.body);
    newAvatar._id = id;

    const originalAvatar = await Avatar.findById(id);
    if (req.file) {
      deleteImgCloudinary(originalAvatar.image);
      newAvatar.image = req.file.path;
    }

    await Avatar.findByIdAndUpdate(id, newAvatar);
    return res.status(200).json('Avatar updated');
  } catch (error) {
    return res.status(400).json({ message: 'Error updating image', error: error });
  }
};

const deleteAvatar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedAvatar = await Avatar.findByIdAndDelete(id);
    deleteImgCloudinary(deletedAvatar.image);
    return res.status(200).json('Avatar deleted');
  } catch (error) {
    return res.status(400).json({ mensaje: 'Error deleting avatar', error: error });
  }
};

module.exports = {
  uploadAvatar,
  updateAvatar,
  deleteAvatar
};
