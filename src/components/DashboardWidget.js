// src/components/DashboardWidget.js
import React from 'react';
import './DashboardWidget.css'; // Import CSS

const DashboardWidget = ({ title, value }) => {
  return (
    <div className="widget">
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
};

export default DashboardWidget;
