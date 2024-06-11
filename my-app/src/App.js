import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import ContactInfo from './components/ContactInfo';

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="App">
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/introduction" element={<Introduction />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<ContactInfo />} />
            </Routes>
        </div>
    );
}

export default App;
