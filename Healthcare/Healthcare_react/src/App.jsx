// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; 
import Medication from './pages/Medication/Medication'; 

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Medication />} />
            </Routes>
        </Router>
    );
};

export default App;
