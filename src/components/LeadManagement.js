import React, { useState } from 'react';
import leadsData from '../data/leadsData.json';
import './LeadManagement.css'; // Import CSS

const LeadManagement = () => {
  const [leads, setLeads] = useState(leadsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [editingLead, setEditingLead] = useState(null); // State for editing lead

  // Function to handle search
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle sorting
  const handleSort = (field) => {
    const newOrder = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(newOrder);
  };

  // Function to handle lead editing
  const handleEditLead = (leadId) => {
    const leadToEdit = leads.find(lead => lead.id === leadId);
    setEditingLead({ ...leadToEdit }); // Create a copy for editing
  };

  // Function to save the edited lead
  const saveLead = (updatedLead) => {
    const updatedLeads = leads.map((lead) => (lead.id === updatedLead.id ? updatedLead : lead));
    setLeads(updatedLeads);
    setEditingLead(null); // Close the editing modal
  };

  // Function to handle lead deletion
  const handleDeleteLead = (leadId) => {
    const updatedLeads = leads.filter((lead) => lead.id !== leadId);
    setLeads(updatedLeads);
  };

  // Filter leads based on search term and sort them
  const filteredLeads = leads
    .filter((lead) => {
      if (!lead) return false; // Check if lead is undefined
      // Check if properties are defined before calling toLowerCase
      const nameMatch = lead.name && lead.name.toLowerCase().includes(searchTerm.toLowerCase());
      const emailMatch = lead.email && lead.email.toLowerCase().includes(searchTerm.toLowerCase());
      const companyMatch = lead.company && lead.company.toLowerCase().includes(searchTerm.toLowerCase());
      
      return nameMatch || emailMatch || companyMatch;
    })
    .sort((a, b) => {
      const direction = sortOrder === 'asc' ? 1 : -1;
      if (sortField === 'id') {
        return (a.id - b.id) * direction;
      } else if (sortField === 'name') {
        return a.name.localeCompare(b.name) * direction;
      } else if (sortField === 'value') {
        return (a.value - b.value) * direction;
      }
      return 0;
    });

  return (
    <div className="lead-management">
      <h3>Lead Management</h3>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search leads" 
          value={searchTerm} 
          onChange={handleSearch} 
        />
      </div>
      <div className="lead-table-header">
        <span onClick={() => handleSort('id')}>ID</span>
        <span onClick={() => handleSort('name')}>Name</span>
        <span onClick={() => handleSort('company')}>Company</span>
        <span onClick={() => handleSort('value')}>Value</span>
      </div>
      <div className="lead-cards">
        {filteredLeads.length === 0 ? (
          <p>No leads found.</p>
        ) : (
          filteredLeads.map((lead) => (
            <div className="lead-card" key={lead.id}>
              <h4>{lead.name}</h4>
              <p>Email: {lead.email}</p>
              <p>Company: {lead.company}</p>
              <p>Value: {lead.value}</p>
              <div className="lead-actions">
                <button onClick={() => handleEditLead(lead.id)}>Edit</button>
                <button onClick={() => handleDeleteLead(lead.id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Editing Modal */}
      {editingLead && (
        <div className="edit-modal">
          <h4>Edit Lead</h4>
          <input 
            type="text" 
            value={editingLead.name} 
            onChange={(e) => setEditingLead({ ...editingLead, name: e.target.value })} 
            placeholder="Name" 
          />
          <input 
            type="text" 
            value={editingLead.email} 
            onChange={(e) => setEditingLead({ ...editingLead, email: e.target.value })} 
            placeholder="Email" 
          />
          <input 
            type="text" 
            value={editingLead.company} 
            onChange={(e) => setEditingLead({ ...editingLead, company: e.target.value })} 
            placeholder="Company" 
          />
          <input 
            type="number" 
            value={editingLead.value} 
            onChange={(e) => setEditingLead({ ...editingLead, value: Number(e.target.value) })} 
            placeholder="Value" 
          />
          <button onClick={() => saveLead(editingLead)}>Save</button>
          <button onClick={() => setEditingLead(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default LeadManagement;
