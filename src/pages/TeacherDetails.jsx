import React from "react";
import { useLocation } from "react-router-dom";

const TeacherDetails = () => {
  const { state: person } = useLocation();
  return (
    <div className="text-center">
      <img src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${person.name}`} alt="img" width="400px"/>
      <h5>{person.name}</h5>
      <h6>{person.username} </h6>
      <h4>{person.phone} </h4>
    </div>
  );
};

export default TeacherDetails;
