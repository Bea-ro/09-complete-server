const mongoose = require('mongoose');

const MovementSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    mainArtworks: [{ type: mongoose.Types.ObjectId, required: true, trim: true, ref: 'Artwork' }],
    authors: [{ type: mongoose.Types.ObjectId, required: true, trim: true, ref: 'Author' }]
  },
  {
    timestamps: true,
    collection: 'movements'
  }
);

const Movement = mongoose.model('Movement', MovementSchema);

module.exports = Movement;
