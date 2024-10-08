import React from "react";
import Home from "../pages/Home";
import MyNavbar from "../components/MyNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CourseCard from "../pages/CourseCard";
import Teacher from "../pages/Teacher";
import ContactForm from "../pages/ContactForm";
import Paths from "../pages/Paths";
import NotFound from "../pages/NotFound";
import PrivateRouter from "../router/PrivateRouter";
import CardDetails from "../pages/CardDetails";
import TeacherDetails from "../pages/TeacherDetails";
import FS from "../pages/FS";
import AWS from "../pages/AWS";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/Login" element={<Login/>}/>
          

          <Route path="/Teacher" element={<Teacher />} />
          <Route path="/Teacher/:idd" element={<TeacherDetails />} />
          <Route path="/Courses" element={<PrivateRouter />}>
            <Route path="" element={<CourseCard />} />{" "}
          </Route>
          <Route path="/:namE" element={<CardDetails />} />

          <Route path="/Contact" element={<PrivateRouter />}>
            <Route path="" element={<ContactForm />} />
          </Route>

          <Route path="/Paths" element={<Paths />}>
            <Route path="Paths/FS" element={<FS/>} />
            <Route path="Paths/AWS" element={<AWS/>} />
            
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
