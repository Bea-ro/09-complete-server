const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true, trim: true }
    //mín 6 caracteres, 1 may y 1 min
  },
  {
    timestamps: true,
    collection: 'users'
  }
);

userSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
