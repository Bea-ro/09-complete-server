const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    movement: { type: String, required: true, trim: true },
    area: {
      type: [String],
      enum: ['pinture', 'sculpture', 'arquitecture'],
      required: true
    },
    mainArtworks: [{ type: mongoose.Types.ObjectId, required: true, trim: true, ref: 'Artwork' }]
  },
  {
    timestamps: true,
    collection: 'authors'
  }
);

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
