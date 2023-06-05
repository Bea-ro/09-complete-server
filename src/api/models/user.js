const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true, trim: true },
    password: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (value) {
          return /^(?=.*?[a-z])(?=.*?[A-Z]).{6,}$/.test(value);
        },
        message:
          'Password must be at least six characters long and contain both uppercase and lowercase letters.'
      }
    },
    avatar: { type: String, required: false, trim: true }
  },
  {
    timestamps: true,
    collection: 'users'
  }
);

userSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
