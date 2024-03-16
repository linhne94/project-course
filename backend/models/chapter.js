const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        lessons: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Lesson'
        }]
    }, { timestamps: true }
);

chapterSchema.pre('remove', async function (next) {
    try {
        await Lesson.deleteMany({ _id: { $in: this.lessons } });
        next();
    } catch (error) {
        next(error);
    }
});

const Chapter = mongoose.model('Chapter', chapterSchema);
module.exports = Chapter;