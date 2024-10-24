// AssignmentComponent.js
import React from 'react';
import AssignmentCard from './AssignmentCard';
import './AssignmentCard.css';

const assignment = {
  title: "Build a Dashboard Interface for EzyMetrics",
  company: "EzyMetrics",
  role: "Frontend Developer",
  requirements: [
    {
      section: "Design the UI in Figma",
      points: [
        "A sidebar with navigation sections (Dashboard, Leads, Analytics, Reports).",
        "Customizable widgets on the dashboard.",
        "Lead management section with dummy lead data.",
        "A basic reporting tool for generating PDF/CSV reports.",
      ],
    },
    {
      section: "Implement the design in React.js",
      points: [
        "Responsive on both desktop and mobile.",
        "Using dummy data for leads and performance metrics.",
        "Visualized with a library like Chart.js or similar.",
      ],
    },
    {
      section: "Key Functionalities",
      points: [
        "Customizable widgets.",
        "Lead management with details in a modal/sidebar.",
        "Analytics and report generation.",
      ],
    },
  ],
  submission: {
    github: "GitHub repository link for the code.",
    figma: "Link to the Figma design.",
    readme: "Brief README explaining how to run the project.",
  },
  deadline: "2 days",
  submissionLink: "https://forms.office.com/r/MLsyQwBGw5",
};

const AssignmentComponent = () => {
  return (
    <>
    <h1>Details about the Assignment</h1>
    <div className="assignment-grid">
      {assignment.requirements.map((req, index) => (
        <AssignmentCard
          key={index}
          title={req.section}
          content={req.points}
        />
      ))}

      <AssignmentCard
        title="Submission Requirements"
        content={[
          assignment.submission.github,
          assignment.submission.figma,
          assignment.submission.readme,
        ]}
      />

      <AssignmentCard
        title="Deadline"
        content={`Deadline: ${assignment.deadline}`}
      />

      <div className="submission-link">
        <a
          href={assignment.submissionLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Submit Assignment
        </a>
      </div>
    </div>
    </>
  );
};

export default AssignmentComponent;
