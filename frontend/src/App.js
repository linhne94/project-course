// eslint-disable-next-line no-unused-vars
import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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


function App() {
  return <BrowserRouter >
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="signin" element={<LoginPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="path" element={<PathPage />} />
      <Route path="blog" element={<BlogPage />} />
      <Route path="admin" element={<AdminPage />} />
      <Route path="manageTeacher" element={<ManageTeacher />} />
      <Route path="courseConfirm" element={<CourseConfirm />} />
      <Route path="/courses/:id" element={<CourseInfo />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/collection/:id" element={<Info />} />
      <Route path="/collection" element={<CollectionPage />} />
      <Route path="blog" element={<LearningPage />} />
    </Routes>
  </BrowserRouter>

}

export default App;
