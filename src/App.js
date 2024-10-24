import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Analytics from './components/Analytics';
import TopProjects from './components/TopProjects';
import DashboardWidget from './components/DashboardWidget';
import LeadManagement from './components/LeadManagement';
import './App.css'
import AssignmentCard from './components/AssignmentCard';
import AssignmentComponent from './components/AssignmentComponent';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <div className="widgets-container">
            <div className="widgets">
              <DashboardWidget title="Completed" value="25+" />
              <DashboardWidget title="Reviews" value="100+" />
              <DashboardWidget title="Working" value="25+" />
            </div>
            <AssignmentComponent />
          </div>
          <Routes>
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/leads" element={<TopProjects />} />
            <Route path="/lead-management" element={<LeadManagement />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;