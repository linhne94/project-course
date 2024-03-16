const mongoose = require('mongoose');
const Currency = mongoose.SchemaTypes.Decimal128;

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    },
    price: {
        type: Currency,
        min: 0
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    imageUrl: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    isDelete: {
        type: Boolean,
        default: false
    },
    isFree: {
        type: Boolean,
        default: false
    },
    isConfirm: {
        type: Boolean,
        default: false
    },
    chapters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chapter'
    }]
}, { timestamps: true });

courseSchema.pre('remove', async function (next) {
    try {
        await Chapter.deleteMany({ _id: { $in: this.chapters } });
        next();
    } catch (error) {
        next(error);
    }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;