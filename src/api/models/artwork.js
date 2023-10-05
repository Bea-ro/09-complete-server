const mongoose = require('mongoose');

const ArtworkSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    year: { type: Number, required: true },
    area: {
      type: String,
      enum: ['painting', 'sculpture', 'arquitecture'],
      required: true,
      trim: true
    },
    movement: { type: String, required: true, trim: true },
    image: { type: mongoose.Schema.Types.Mixed, required: false }
  },
  {
    timestamps: true,
    collection: 'artworks'
  }
);

const Artwork = mongoose.model('Artwork', ArtworkSchema);

module.exports = Artwork;
