const Artwork = require('../models/artwork');
const { deleteImgCloudinary } = require('../../middlewares/uploadFile');
const Author = require('../models/author');

const getAllArtworks = async (req, res, next) => {
  try {
    const artworks = await Artwork.find();
    return res.status(200).json(artworks);
  } catch (error) {
    return res.status(400).json({ message: 'Error getting artworks', error: error });
  }
};

const createArtwork = async (req, res, next) => {
  try {
    const newArtwork = new Artwork(req.body);
    if (req.file) {
      newArtwork.image = req.file.path;
    }
    const createdArtwork = await newArtwork.save();
    return res.status(201).json(createdArtwork);
  } catch (error) {
    return res.status(400).json({ message: 'Error adding artwork.', error: error });
  }
};

const getArtworkById = async (req, res, next) => {
  try {
    const artwork = await Artwork.findById(req.params.id);
    res.status(200).json(artwork);
  } catch (error) {
    return res.status(400).json({ message: 'Artwork not found', error: error });
  }
};

const updateArtworkById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newArtwork = await Artwork.findByIdAndUpdate(id, req.body, {
      new: true
    });
    return res.status(200).json(newArtwork);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error updating artwork. Check your data and try again.', error: error });
  }
};

const deleteArtwork = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Artwork.findByIdAndDelete(id);
    return res.status(200).json('Artwork succesfuly removed.');
  } catch (error) {
    return res.status(400).json({ message: 'Error deleting artwork', error: error });
  }
};

const deleteArtworkFieldById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Artwork.findByIdAndUpdate(id, { $unset: { author: 1 } }, { new: true });
    return res.status(200).json('Author field deleted.');
  } catch (error) {
    return res.status(400).json({ message: 'Error deleting author field.', error: error });
  }
};

const uploadArtworkImg = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (req.file) {
      const originalArtwork = await Artwork.findById(id);
      console.log('originalArtwork', originalArtwork);
      if (originalArtwork.image) {
        deleteImgCloudinary(originalArtwork.image);
      }

      const updatedArtwork = await Artwork.findByIdAndUpdate(
        id,
        { $set: { image: req.file.path } },
        { new: true }
      );
      console.log('updatedArtwork', updatedArtwork);
      return res.status(200).json(updatedArtwork);
    }
  } catch (error) {
    return res.status(400).json({ message: 'Error uploading image.', error: error });
  }
};

module.exports = {
  getAllArtworks,
  createArtwork,
  getArtworkById,
  updateArtworkById,
  deleteArtwork,
  deleteArtworkFieldById,
  uploadArtworkImg
};
