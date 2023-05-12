import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import SocialCards from "./components/SocialCards/SocialCards";
import { getToken } from "./helpers";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Task from "./components/Task/Task";
import About from "./components/About/About";
import Homeu from "./components/Homeu/Homeu";
import Home from "./components/Home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SocialCards />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route
        path="/task"
        element={getToken() ? <Task /> : <Navigate to="/task" />}
      />
      <Route
        path="/profile"
        element={getToken() ? <Profile /> : <Navigate to="/" />}
      />
      <Route path="/about" element={<About />} />
      <Route path="/homeu" element={<Homeu />} />
    </Routes>
  );
};

export default AppRoutes;