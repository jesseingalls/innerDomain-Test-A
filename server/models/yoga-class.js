const mongoose = require('mongoose');

const YogaClassSchema = mongoose.Schema({
  day_id: {type: Number},
  day: {type: String},
  type: {type: String},
  level: {type: String},
  time: {type: String},
  place: {type: String},
}, { timestamps: true });

mongoose.model('YogaClass', YogaClassSchema);
