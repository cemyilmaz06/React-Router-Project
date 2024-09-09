import React from "react";
import Home from "../pages/Home";
import MyNavbar from "../components/MyNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CourseCard from "../pages/CourseCard";
import Teacher from "../pages/Teacher";
import ContactForm from "../pages/ContactForm";
import Paths from "../pages/Paths";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Teacher" element={<Teacher />} />
          <Route path="/Courses" element={<CourseCard />} />
          <Route path="/Contact" element={<ContactForm />} />
          <Route path="/Paths" element={<Paths />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
