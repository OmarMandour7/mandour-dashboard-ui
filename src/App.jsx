import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Mentors from './pages/Mentors';
import Messages from './pages/Messages';
import Settings from './pages/Setting';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
   
      

      <div className="flex min-h-screen bg-gray-100 ">
        {sidebarOpen && (
  <div
    className="fixed inset-0 z-30 bg-black bg-opacity-90 lg:hidden"
    onClick={() => setSidebarOpen(false)}
  ></div>
)}
         <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <div className="container flex-1 mx-auto">
           <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)}/>
             <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Dashboard  />} />
            <Route path="/task" element={<Tasks />} />
             <Route path="/mentors" element={<Mentors />} />
            <Route path="/message" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />

          </Routes>
             </AnimatePresence>
        
        </div>
      </div>
   
  );
}
