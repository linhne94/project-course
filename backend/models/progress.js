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

// Middleware to update progressPercentage before saving
progressSchema.pre('save', function (next) {
    // Calculate progress percentage logic here
    // For example, you can calculate based on completed lessons and total lessons
    const totalLessons = this.lessonsProgress.length;
    const completedLessons = this.lessonsProgress.filter(lesson => lesson.completed).length;
    this.progressPercentage = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

    next();
});

const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;
