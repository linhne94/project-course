const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    lessonsProgress: [{
        lesson: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Lesson'
        },
        completed: {
            type: Boolean,
            default: false
        }
    }],
    completed: {
        type: Boolean,
        default: false
    },
    progressPercentage: {
        type: Number,
        default: 0
    }
});

const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;