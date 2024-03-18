var express = require('express');
const { createCourse, getAllCourse, getCourseById, updateCourse, deleteCourseById, getCourseCount, getCourseBySearch, getFeaturedCourse, getFreeCourse, getProCourse } = require('../controllers/courseController');
// const { verifyAdmin } = require('../utils/verifyToken');


const courseRoute = express.Router();

courseRoute.get("/", getAllCourse);
courseRoute.get("/search/getFeaturedCourse", getFeaturedCourse);
courseRoute.get("/search/getCourseBySearch", getCourseBySearch);
courseRoute.get("/search/getCourseCount", getCourseCount);
courseRoute.get("/getCourseFree", getFreeCourse);
courseRoute.get("/getCoursePro", getProCourse);
courseRoute.get("/:id", getCourseById);
courseRoute.post("/", createCourse);
courseRoute.put("/:id", updateCourse);
courseRoute.delete("/:id", deleteCourseById);

module.exports = courseRoute;