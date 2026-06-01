import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Homepage from './components/Homepage';
import AboutPage from './components/AboutPage';

export default function App() {
    return (
        <Router>
            <Routes>
                {/* The Layout component wraps all routes inside it */}
                <Route element={<Layout />}>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<AboutPage />} />
                    {/* Add more routes here later */}
                </Route>
            </Routes>
        </Router>
    );
}
