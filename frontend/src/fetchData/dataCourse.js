import axios from "./axios";

const getAllCourse = () => {
    return axios.get("/course");
}

const getCoursePro = () => {
    return axios.get("/course/getCoursePro");
}

const getCourseFree = () => {
    return axios.get("/course/getCourseFree");
}

const getCourseById = (id) => {
    return axios.get(`/course/${id}`);
}

const postCourse = (course) => {
    return axios.post("/course", course);
}

const updateCourse = (id, course) => {
    return axios.put(`/course/${id}`, course);
}

const deleteEmployee = (id) => {
    return axios.delete(`/course/${id}`);
}

export {
    getAllCourse,
    deleteEmployee,
    getCourseById,
    getCourseFree,
    getCoursePro,
    postCourse,
    updateCourse
}
