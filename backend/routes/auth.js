var express = require('express');
const { login, register, getAllUser, getUserById, updateUser, deleteUserById, updateUserFreeCourse } = require('../controllers/authenController');
const { verifyAdmin, verifyUser } = require('../utils/verifyToken');

const authRoute = express.Router();

authRoute.post("/login", login);
authRoute.post("/register", register);
authRoute.get("/", verifyAdmin, getAllUser);
authRoute.get("/:id", getUserById);
authRoute.put("/:id", updateUser);
authRoute.put("/:id/course/:idCourse", verifyUser, updateUserFreeCourse);
authRoute.delete("/:id", verifyAdmin, deleteUserById);


module.exports = authRoute;