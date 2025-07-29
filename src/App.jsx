import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Login from './pages/Login';
import Mentors from './pages/Mentors';
import Messages from './pages/Messages';
import Settings from './pages/Setting';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      {sidebarOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-90 z-30 lg:hidden"
    onClick={() => setSidebarOpen(false)}
  ></div>
)}

      <div className="  flex min-h-screen bg-gray-100">
         <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <div className="flex-1  container mx-auto">
           <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)}/>
          <Routes>               
            <Route path="/" element={<Dashboard  />} />
            <Route path="/task" element={<Tasks />} />
             <Route path="/mentors" element={<Mentors />} />
            <Route path="/message" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}
