
var Chapter = require('../models/chapter')
const Course = require('../models/course')


const createChapter = async (req, res) => {
    const newChapter = new Chapter(req.body)

    try {
        const savedChapter = await newChapter.save()

        res.status(200).json({
            success: true,
            message: "Successfully created",
            data: savedChapter
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create. Try again"
        })
    }
}

const createChapterInCourse = async (req, res) => {
    const courseId = req.params.courseId;
    const newChapter = new Chapter({ ...req.body })

    try {
        const savedChapter = await newChapter.save()

        await Course.findByIdAndUpdate(courseId, {
            $push: { chapters: savedChapter._id }
        })

        res.status(200).json({
            success: true,
            message: "Successfully Chapter submitted",
            data: savedChapter
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to submit. Try again"
        })
    }
}

const getAllChapter = async (req, res) => {


    try {
        const getAllChapter = await Chapter.find({}).populate('lessons')

        res.status(200).json({
            success: true,
            count: getAllChapter.length,
            message: "Successfully get all",
            data: getAllChapter
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to get all. Try again"
        })
    }
}

const getChapterById = async (req, res) => {
    const id = req.params.id;

    try {
        const getChapterById = await Chapter.findById(id).populate()
            .populate()

        res.status(200).json({
            success: true,
            message: "Successfully get Chapter",
            data: getChapterById
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to get Chapter. Try again"
        })
    }
}



const updateChapter = async (req, res) => {
    const id = req.params.id;

    try {
        const updateChapter = await Chapter.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updateChapter
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update. Try again"
        })
    }
}

const deleteChapterById = async (req, res) => {
    const id = req.params.id;

    try {
        const deleteChapterById = await Chapter.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            message: "Successfully deleted",
            data: deleteChapterById
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete. Try again"
        })
    }
}

const getChapterCount = async (req, res) => {
    try {
        const ChapterCount = await Chapter.estimatedDocumentCount()

        res.status(200).json({
            success: true,
            data: ChapterCount
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch. Try again"
        })
    }
}

module.exports = {
    createChapter,
    deleteChapterById,
    getAllChapter,
    updateChapter,
    getChapterCount,
    createChapterInCourse,
    getChapterById
}