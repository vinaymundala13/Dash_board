// AssignmentCard.js
import React from 'react';
import './AssignmentCard.css';

const AssignmentCard = ({ title, content }) => {
  return (
    <>
    <div className="assignment-card">
      <h3>{title}</h3>
      {Array.isArray(content) ? (
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{content}</p>
      )}
    </div>
    </>
  );
};

export default AssignmentCard;
