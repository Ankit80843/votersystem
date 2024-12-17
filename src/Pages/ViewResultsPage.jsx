import React from 'react';
import './ViewElectionResults.css';

const ViewElectionResults = () => {
  return (
    <div className="results-container">
      <div className="coming-soon-box">
        <h1>Results Coming Soon</h1>
        <p>We are preparing the results for you. Stay tuned!</p>
        <div className="loading-animation">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default ViewElectionResults;
