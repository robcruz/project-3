const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ImageUploadSchema = new Schema({
  title: String,
  body: String,
  username: String,
  datePosted:{
    type: Date,
    default: new Date()
  },
  image: String
});

const ImageUpload = mongoose.model('ImageLink',ImageUploadSchema);
module.exports = ImageUpload
