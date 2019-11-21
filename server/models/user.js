const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: {type: String, required: [true, "Must add a first name"], minlength: [3, "First name must be atleast 3 characters"]},
    lastName: {type: String, required: [true, "Must add a last name"], minlength: [3, "Last name must be atleast 3 characters"]},
    email: {type: String, lowercase: true, required: [true, "email can't be blank"], match: [/\S+@\S+\.\S+/, 'email is invalid'], index: true},
    comment: {type: String},
}, { timestamps: true });



mongoose.model('User', UserSchema);

