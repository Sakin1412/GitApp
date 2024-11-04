import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cover from '../Pages/Cover/cover'
import SignIn from "../Pages/SignIn/signIn";

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    {/* Public routes */}
                    <Route path="/" element={<Cover />} />
                    <Route path="/signin" element={<SignIn />} />
                </Routes>
            </div>
        </Router>
    );
};

export default AppRouter;
