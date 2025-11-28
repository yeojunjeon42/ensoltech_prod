import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AnimatedRoute from './components/AnimatedRoute';
import './styles/styles.css';
import SolutionCards from './components/SolutionCards';

function AppContent() {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-white"> 
            <Navbar />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<AnimatedRoute><Home /></AnimatedRoute>} />
                    <Route path="/equipment/:id" element={<AnimatedRoute><SolutionCards /></AnimatedRoute>} />
                    <Route path="/enproductive/:id" element={<AnimatedRoute><SolutionCards /></AnimatedRoute>} />
                    <Route path="/encycle/:id" element={<AnimatedRoute><SolutionCards /></AnimatedRoute>} />
                </Routes>
            </AnimatePresence>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <Router> 
            <AppContent />
        </Router>
    );
}
export default App;
