import React from "react";
import Home from "./pages/Home";
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CourseCard from "./pages/CourseCard";
import Teacher from "./pages/Teacher";
import ContactForm from "./pages/ContactForm";
import Paths from "./pages/Paths";

const App = () => {
  return (
    <div>
   <BrowserRouter>
   <MyNavbar/>
   <Routes>
 

    <Route path="/" element={<Home/>}/>
    <Route path="/Teacher" element={<Teacher/>}/>
    <Route path="/Courses" element={<CourseCard/>} />
    <Route path="/Contact" element={<ContactForm/>} />
    <Route path="/Paths" element={<Paths/>} />




    






   </Routes>



      

      </BrowserRouter>
    </div>
  );
};

export default App;
