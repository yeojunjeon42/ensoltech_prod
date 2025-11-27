import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// All imports are now without extensions, relying on Vite/TS to resolve the confirmed .tsx files.
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import EquipmentDetail from './pages/Equipment/EquipmentDetail';
import './styles/styles.css';

function App() {
    return (

        <Router> 
            <div className="min-h-screen bg-white"> 
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/equipment/:id" element={<EquipmentDetail />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}
export default App;
