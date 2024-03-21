var User = require('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const Course = require('../models/course');
const { addProgress } = require('./progressController')
const register = async (req, res) => {
    try {

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: hash
        })

        await newUser.save()

        res.status(200).json({
            success: true,
            message: 'Successfully created'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to create. Try again'
        })

    }
}

const login = async (req, res) => {

    const username = req.body.username;

    try {
        const user = await User.findOne({ username })

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }

        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password);

        if (!checkCorrectPassword) {
            return res.status(401).json({
                success: false,
                message: 'Incorrect email or password'
            })
        }

        const { password, role, ...rest } = user._doc;

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "15d" }
        )

        // set token in cookies
        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: token.expiresIn
        }).status(200).json({
            success: true,
            message: 'Successfully login',
            token: token,
            role: role,
            data: { ...rest }
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'fail to login'
        })
    }
}
const createUser = async (req, res) => {
    const newUser = new User(req.body)

    try {
        const savedUser = await newUser.save()

        res.status(200).json({
            success: true,
            message: "Successfully created",
            data: savedUser
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create. Try again"
        })
    }
}

const getAllUser = async (req, res) => {

    try {
        const AllUser = await User.find({})

        res.status(200).json({
            success: true,
            count: AllUser.length,
            message: "Successfully get all",
            data: AllUser
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to get all. Try again"
        })
    }
}

const getUserById = async (req, res) => {
    const id = req.params.id;

    try {
        const getUserById = await User.findById(id).populate('coursesEnrolled')

        res.status(200).json({
            success: true,
            message: "Successfully get User",
            data: getUserById
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to get User. Try again"
        })
    }
}

const updateUser = async (req, res) => {
    const id = req.params.id;

    try {
        const updateUser = await User.findByIdAndUpdate(id, {
            $set: { ...req.body }
        }, { new: true })

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updateUser
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update. Try again"
        })
    }
}

const deleteUserById = async (req, res) => {
    const id = req.params.id;

    try {
        const deleteUserById = await User.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            message: "Successfully deleted",
            data: deleteUserById
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete. Try again"
        })
    }
}

const updateUserFreeCourse = async (req, res) => {
    const idCourse = req.params.idCourse;
    const idUser = req.params.id;

    try {
        const course = await Course.findById(idCourse).populate({
            path: 'chapters',
            populate: {
                path: 'lessons',
                model: 'Lesson' // Tên của mô hình Lesson
            }
        });
        const user = await User.findById(idUser)

        if (!course || !course.isFree) {
            return res.status(400).json({
                success: false,
                message: "Course not found or not free."
            });
        }


        const isEnrolled = user.coursesEnrolled
            .some(enrolledCourse => enrolledCourse._id.toString() === course._id.toString());

        if (isEnrolled) {
            return res.status(400).json({
                success: false,
                message: "You have registered for this course."
            });
        }

        const updateCourseOfUser = await User.findByIdAndUpdate(idUser, {
            $push: { coursesEnrolled: course._id }
        });

        if (!updateCourseOfUser) {
            return res.status(400).json({
                success: false,
                message: "Course not found or not free."
            });
        }

        addProgress(user, course)
        res.status(200).json({
            success: true,
            message: "Course successfully submitted",
            data: updateCourseOfUser
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to submit. Try again"
        });
    }
};

module.exports = {
    register,
    login,
    createUser,
    deleteUserById,
    getAllUser,
    getUserById,
    updateUserFreeCourse,
    updateUser
}