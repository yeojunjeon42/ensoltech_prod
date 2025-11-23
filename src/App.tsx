import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VerticalPCB from './pages/Equipment/VerticalPCB';
import HorizontalPCB from './pages/Equipment/HorizontalPCB';
import VacuumHolePlugging from './pages/Equipment/VacuumHolePlugging';
import DoubleSidedPrinter from './pages/Equipment/DoubleSidedPrinter';
import EquipmentDetail from './pages/Equipment/EquipmentDetail';
import './styles/styles.css';

function App() {
    return (
        <Router basename="/ensoltech_new">
            <div className="min-h-screen bg-white"> 
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/equipment/vertical-pcb" element={<VerticalPCB />} />
                    <Route path="/equipment/horizontal-pcb" element={<HorizontalPCB />} />
                    <Route path="/equipment/vacuum-hole-plugging" element={<VacuumHolePlugging />} />
                    <Route path="/equipment/double-sided-printer" element={<DoubleSidedPrinter />} />
                    <Route path="/equipment/:id" element={<EquipmentDetail />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}
export default App;