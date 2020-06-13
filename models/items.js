const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 33,
    trim: true
  },
  itemNumber: {
    type: Number
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
});

module.exports = mongoose.model('items', itemsSchema);



// itemNumber
