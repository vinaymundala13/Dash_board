// src/components/Sidebar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Import CSS

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar open/close state
  };

  const closeSidebar = () => {
    if (isOpen) setIsOpen(false); // Close sidebar when a link is clicked (on mobile)
  };

  return (
    <>
      {/* Hamburger Icon Button */}
      <button className="toggle-button" onClick={toggleSidebar}>
        &#9776;
      </button>

      {/* Sidebar Navigation */}
      <div className={`sidebar ${isOpen ? 'active' : ''}`}>
        <h2>Dashboard</h2>
        <NavLink to="/" className="link" activeClassName="active" onClick={closeSidebar}>
          Home
        </NavLink>
        <NavLink to="/analytics" className="link" activeClassName="active" onClick={closeSidebar}>
          Analytics
        </NavLink>
        <NavLink to="/leads" className="link" activeClassName="active" onClick={closeSidebar}>
          Leads
        </NavLink>
        <NavLink to="/lead-management" className="link" activeClassName="active" onClick={closeSidebar}>
          Lead Management
        </NavLink>
      </div>

      {/* Overlay for Mobile to Close Sidebar */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;
