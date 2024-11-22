import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cover from '../Pages/Cover/cover'
import SignIn from "../Pages/SignIn/signIn";
import SignUp from "../Pages/SignUp/signUp";
// import Profile from "../Pages/Profile/profile"
import Profile from '../Pages/Profile/profile'

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    {/* Public routes */}
                    <Route path="/" element={<Cover />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </Router>
    );
};

export default AppRouter;
