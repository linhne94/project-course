var mongoose = require('mongoose')


const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phoneNumber: {
            type: String,
        },
        avatar: {
            type: String,
        },
        isPremium: {
            type: Boolean,
            default: false
        },
        role: {
            type: String,
            default: "user",
        },
        coursesEnrolled: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }]
    },
    { timestamps: true }
);

var User = mongoose.model("User", userSchema);
module.exports = User;
