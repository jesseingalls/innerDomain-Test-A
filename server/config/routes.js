const usersController = require('./../controllers/users');
const path = require('path');

module.exports = (app) => {
    app.get('/api/users', usersController.allUsers);
    app.post('/api/users', usersController.addUser);
    app.delete('/api/users/:id', usersController.deleteUser);
    app.get('/api/events', usersController.allEvents);
    app.post('/api/events', usersController.addEvent);
    app.delete('/api/events/:id', usersController.deleteEvent);
    app.get('/api/yogaclasses', usersController.allYogaClasses);
    app.post('/api/yogaclasses', usersController.addYogaClass);
    app.delete('/api/yogaclasses/:id', usersController.deleteYogaClass);
    app.get('/api/teachertrainings', usersController.allTeacherTrainings);
    app.post('/api/teachertrainings', usersController.addTeacherTraining);
    app.delete('/api/teachertrainings/:id', usersController.deleteTeacherTraining);
}
