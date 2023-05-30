const mongoose = require('mongoose');
require('../config/db.js');
const Author = require('../api/models/author.js');
const Artwork = require('../api/models/artwork.js');
const seed = require('./seed.js')


mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    try {
      const oldAuthors = await Author.find();
      const oldArtworks = await Artwork.find();

      if (oldAuthors) {
        await Author.collection.drop();
        console.log('La colección Authors se ha vaciado');
      }
      if (oldArtworks) {
        await Artwork.collection.drop();
        console.log('La colección Artworks se ha vaciado');
      }

      await Author.insertMany(seed.authors);
      await Artwork.insertMany(seed.artworks);
      console.log('Populated seed in DB');
    } catch (error) {
      console.log('Error populating seed in DB: ' + error);
    }
  })
  .finally(() => mongoose.disconnect());
