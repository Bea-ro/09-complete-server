const mongoose = require('mongoose');

const avatarSchema = new mongoose.Schema(
  {
    image: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
    collection: 'avatars'
  }
);

const Avatar = mongoose.model('Avatar', avatarSchema);

module.exports = Avatar;
