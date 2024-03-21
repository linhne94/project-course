var express = require('express');
const { submitLesson } = require('../controllers/progressController');

const progressRoute = express.Router();

progressRoute.put("/submitLesson", submitLesson);


module.exports = progressRoute;