const Author = require('../models/author');

const getAllAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find().populate('mainArtworks');
    return res.status(200).json(authors);
  } catch (error) {
    return res.status(400).json({ message: 'Error getting artists.', error: error });
  }
};

const createAuthor = async (req, res, next) => {
  try {
    const newAuthor = new Author(req.body);
    const createdAuthor = await newAuthor.save();
    return res.status(201).json(createdAuthor);
  } catch (error) {
    return res.status(400).json({ message: 'Error adding artist.', error: error });
  }
};

const getAuthorById = async (req, res, next) => {
  try {
    const author = await Author.findById(req.params.id).populate('mainArtworks');
    res.status(200).json(author);
  } catch (error) {
    return res.status(400).json({ message: 'Artist not found.', error: error });
  }
};

const updateAuthorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedAuthor = await Author.findByIdAndUpdate(id, req.body, {
      new: true
    }).populate('mainArtworks');
    return res.status(200).json(updatedAuthor);
  } catch (error) {
    return res.status(400).json({ message: 'Error updating artist.', error: error });
  }
};

const deleteAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Author.findByIdAndDelete(id);
    return res.status(200).json('Artist succesfuly removed.');
  } catch (error) {
    return res.status(400).json({ message: 'Error removing artist.', error: error });
  }
};

const addOrRemoveArtwork = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { mainArtwork } = req.body;
    console.log(id)
    console.log(mainArtwork)
    const selectedAuthor = await Author.findById(id);

    if (selectedAuthor.mainArtworks.includes(mainArtwork)) {
      const updatedAuthor = await Author.findByIdAndUpdate(
        id,
        {
          $pull: { mainArtworks: mainArtwork }
        },
        { new: true }
      );
      return res.status(200).json(updatedAuthor);
    }
    const updatedAuthor = await Author.findByIdAndUpdate(
      id,
      {
        $addToSet: { mainArtworks: mainArtwork }
      },
      { new: true }
    );
    return res.status(200).json(updatedAuthor);
  } catch (error) {
    return res.status(400).json({ message: 'Error adding artwork to artist', error: error });
  }
};

module.exports = {
  getAllAuthors,
  createAuthor,
  getAuthorById,
  updateAuthorById,
  deleteAuthor,
  addOrRemoveArtwork
};
