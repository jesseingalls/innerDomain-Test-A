const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
  title: {type: String},
  category: {type: String},
  description: {type: String},
  image: {type: String},
  dates: {type: String},
}, { timestamps: true });

mongoose.model('Event', EventSchema);


