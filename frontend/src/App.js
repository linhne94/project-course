// eslint-disable-next-line no-unused-vars
import { React } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/Register Login/LoginPage';
import PathPage from './pages/PathPage';
import SignUpPage from './pages/Register Login/RegisterForm';
import BlogPage from "./pages/BlogPage";
import AdminPage from "./pages/AdminPage";
import CollectionPage from "./pages/CollectionPage";
import CourseInfo from "./components/Part/Admin/CourseInfo";
import ManageTeacher from "./components/Part/Admin/ManageTeacher";
import CourseConfirm from "./components/Part/Admin/CourseConfirm";
import Profile from "./components/Part/Profile/Profile";
import Info from "./components/Part/Course/Info";
import LoginRegister from './pages/Register Login/LoginRegister';
import LearningPage from "./pages/LearningPage"
import TeacherManagePage from './components/Part/Teacher/Manage Course Page/TeacherManagePage';
import AddCoursePage from './components/Part/Teacher/Manage Course Page/AddCourse'
import PreviewCoursePage from './components/Part/Teacher/Manage Course Page/Preview'
import ProfileTeacherPage from './components/Part/Profile Teacher Admin/TeacherProfile'

function App() {
  return (<>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="signin" element={<LoginPage />} />
      <Route path="signup" element={<SignUpPage />} />
      {/* <Route path="path" element={<PathPage />} /> */}
      <Route path="blog" element={<BlogPage />} />
      <Route path="admin" element={<AdminPage />} />
      <Route path="manageTeacher" element={<ManageTeacher />} />
      <Route path="courseConfirm" element={<CourseConfirm />} />
      <Route path="/teacher/courses/:id" element={<CourseInfo />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/course/:id" element={<Info />} />
      <Route path="/collection" element={<CollectionPage />} />
      <Route path="/learningpage" element={<LearningPage />} />

      {/* TEACHER ROUTER */}
      <Route path="teacherpage" element={<TeacherManagePage />} />
      <Route path="addcourse" element={<AddCoursePage />} />
      <Route path="previewcourse/:id" element={<PreviewCoursePage />} />
      <Route path="profileTeacher" element={<ProfileTeacherPage />} />


    </Routes>
  </>)
}

export default App;
