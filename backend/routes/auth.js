var express = require('express');
const { login, register, getAllUser, getUserById, updateUser, deleteUserById } = require('../controllers/authenController');
const { verifyAdmin } = require('../utils/verifyToken');

const authRoute = express.Router();

authRoute.post("/login", login);
authRoute.post("/register", register);
authRoute.get("/", verifyAdmin, getAllUser);
authRoute.get("/:id", getUserById);
authRoute.put("/:id", updateUser);
authRoute.delete("/:id", verifyAdmin, deleteUserById);


module.exports = authRoute;