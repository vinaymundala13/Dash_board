// src/components/TopProjects.js
import React from 'react';
import leadsData from '../data/leadsData.json';
import './TopProjects.css'; // Import CSS

const TopProjects = () => {
  return (
    <>
      <h1>Lead Session</h1>
      <div className="top-projects">
        <h3>Top Projects</h3>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Project</th>
              <th>Lead</th>
              <th>Company</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {leadsData.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.project}</td>
                <td>{lead.lead}</td>
                <td>{lead.company}</td>
                <td>{lead.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TopProjects;
