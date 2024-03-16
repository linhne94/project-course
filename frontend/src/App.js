// eslint-disable-next-line no-unused-vars
import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PathPage from './pages/PathPage';
import SignUpPage from './pages/SignUpPage';
import BlogPage from "./pages/BlogPage";



function App() {
  return <BrowserRouter >
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="path" element={<PathPage />} />
      <Route path="blog" element={<BlogPage />} />
    </Routes>
  </BrowserRouter>

}

export default App;
