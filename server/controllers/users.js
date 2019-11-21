const mongoose = require('mongoose');
const User = mongoose.model('User');
const Event = mongoose.model('Event');
const YogaClass = mongoose.model('YogaClass');
const TeacherTraining = mongoose.model('TeacherTraining');


module.exports = {
    allUsers: (req, res) => {
        User.find({}, (err, users) =>{
            if(err){
                res.json(err);
            }else{
                res.json(users);
            }
        })
    },
    addUser: (req,res) =>{
        User.create(req.body, (err, user)=>{
            if(err){
                res.json(err);
            }else {
                res.json(user);
            }
        })
    },
    deleteUser: (req, res) =>{
        User.findByIdAndRemove({_id: req.params.id}, (err, user) =>{
            if(err){
                res.json(err);
            }else {
                res.json(user);
            }
        })
    },
    allEvents: (req, res) => {
      Event.find({}, (err, events) =>{
          if(err){
              res.json(err);
          }else{
              res.json(events);
          }
      })
  },
    addEvent: (req,res) =>{
        Event.create(req.body, (err, event)=>{
            if(err){
                res.json(err);
            }else {
                res.json(event);
            }
        })
    },
    deleteEvent: (req, res) =>{
        Event.findByIdAndRemove({_id: req.params.id}, (err, event) =>{
            if(err){
                res.json(err);
            }else {
                res.json(event);
            }
        })
    },
    allYogaClasses: (req, res) => {
      YogaClass.find({}, (err, yogaclasses) =>{
          if(err){
              res.json(err);
          }else{
              res.json(yogaclasses);
          }
      })
  },
    addYogaClass: (req,res) =>{
        YogaClass.create(req.body, (err, yogaclass)=>{
            if(err){
                res.json(err);
            }else {
                res.json(yogaclass);
            }
        })
    },
    deleteYogaClass: (req, res) =>{
        YogaClass.findByIdAndRemove({_id: req.params.id}, (err, yogaclass) =>{
            if(err){
                res.json(err);
            }else {
                res.json(yogaclass);
            }
        })
    },
    allTeacherTrainings: (req, res) => {
      TeacherTraining.find({}, (err, teacherTrainings) =>{
          if(err){
              res.json(err);
          }else{
              res.json(teacherTrainings);
          }
      })
  },
    addTeacherTraining: (req,res) =>{
        TeacherTraining.create(req.body, (err, teacherTraining)=>{
            if(err){
                res.json(err);
            }else {
                res.json(teacherTraining);
            }
        })
    },
    deleteTeacherTraining: (req, res) =>{
        TeacherTraining.findByIdAndRemove({_id: req.params.id}, (err, teacherTraining) =>{
            if(err){
                res.json(err);
            }else {
                res.json(teacherTraining);
            }
        })
    },

}
