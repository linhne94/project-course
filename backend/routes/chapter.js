var express = require('express');
const { createChapter, getAllChapter, updateChapter, deleteChapterById, getChapterCount, createChapterInCourse, getChapterById } = require('../controllers/chapterController');
// const { verifyAdmin } = require('../utils/verifyToken');

const chapterRoute = express.Router();

chapterRoute.get("/", getAllChapter);
chapterRoute.get("/:id", getChapterById);
chapterRoute.get("/search/getChapterCount", getChapterCount);
chapterRoute.post("/", createChapter);
chapterRoute.post("/:courseId", createChapterInCourse);
chapterRoute.put("/:id", updateChapter);
chapterRoute.delete("/:id", deleteChapterById);

module.exports = chapterRoute;