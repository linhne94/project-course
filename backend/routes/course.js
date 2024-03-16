var express = require('express');
const { createCourse, getAllCourse, getCourseById, updateCourse, deleteCourseById, getCourseCount, getCourseBySearch, getFeaturedCourse } = require('../controllers/courseController');
// const { verifyAdmin } = require('../utils/verifyToken');

const bodyParser = require("body-parser");

const courseRoute = express.Router();
courseRoute.use(bodyParser.json());

courseRoute.get("/", getAllCourse);
courseRoute.get("/search/getFeaturedCourse", getFeaturedCourse);
courseRoute.get("/search/getCourseBySearch", getCourseBySearch);
courseRoute.get("/search/getCourseCount", getCourseCount);
courseRoute.get("/:id", getCourseById);
courseRoute.post("/", createCourse);
courseRoute.put("/:id", updateCourse);
courseRoute.delete("/:id", deleteCourseById);

module.exports = courseRoute;