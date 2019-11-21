const mongoose = require('mongoose');

const TeacherTrainingSchema = mongoose.Schema({
  image: {type: String},
  title: {type: String},
  tagLine: {type: String},
  dates: {type: String},
  price: {type: Number},
  location: {type: String},
  description: {type: String},
  phone: {type: String}
},{ timestamps: true });

mongoose.model('TeacherTraining', TeacherTrainingSchema);
