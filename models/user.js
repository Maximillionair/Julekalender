const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: string,
        required: true,
        match: [/.+\@.+\..+/, 'Please use a valid email address']
    },
    // password: {
    //     type: string,
    //     required: [true, 'passowrd is required'],
    //     minlength: [6, "password must be 6 characters long"]
    // }
    message: {
        type: string,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;