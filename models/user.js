const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: string,
        required: true,
        validate: {
            validator: function (v) {
                return /@afk/.test(v); // Checks if the email contains '@afk'
              },
              message: props => `${props.value} is not a valid email. It must contain "@afk".`
        }
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