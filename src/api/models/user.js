const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    // validate: {
    //   validator: function (value) {
    //     // Expresión regular para verificar la longitud mínima y presencia de mayúscula y minúscula
    //     return /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(value);
    //   },
    //   message: 'Password must have at least six characters, one uppercase and one lowercase.'
    // }
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
