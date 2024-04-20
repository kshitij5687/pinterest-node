const mongoose = require('mongoose');
const plm = require('passport-local-mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/pin")

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  contact: Number,
  name: String,
  fullname: String,
  profileImage: String,
  boards: {
    type: Array,
    default: []
  },  //board are basically folders
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'post'
    }
  ]
});

userSchema.plugin(plm);

module.exports = mongoose.model('user',userSchema)