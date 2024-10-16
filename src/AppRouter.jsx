import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cover from '../Pages/Cover/cover'

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    {/* Public routes */}
                    <Route path="/" element={<Cover />} />
                </Routes>
            </div>
        </Router>
    );
};

export default AppRouter;
