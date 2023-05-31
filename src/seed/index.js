const mongoose = require('mongoose');
require('dotenv').config();
require('../config/db');
const Author = require('../api/models/author');
const Artwork = require('../api/models/artwork');
const seed = require('./seed');

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    try {
      const oldAuthors = await Author.find();
      const oldArtworks = await Artwork.find();

      if (oldAuthors) {
        await Author.collection.drop();
        console.log('Authors dropped');
      }
      if (oldArtworks) {
        await Artwork.collection.drop();
        console.log('Artworks dropped');
      }

      await Artwork.insertMany(seed.artworks);
      await Author.insertMany(seed.authors);
      console.log('Data saved');
    } catch (error) {
      console.log('Error saving data: ' + error);
    }
  })
  .finally(() => mongoose.disconnect());
