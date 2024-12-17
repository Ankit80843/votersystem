import React, { useState } from 'react';
import './TrackVotePage.css';

const TrackVotePage = () => {
  const [voterID, setVoterID] = useState('');
  const [referenceNumber, setReferenceNumber] = useState('');
  const [status, setStatus] = useState('');
  const [showStatus, setShowStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (voterID || referenceNumber) {
      // Mock status data
      const statuses = [
        'Your vote has been successfully recorded.',
        'Your vote is under verification.',
        'Vote not found. Please check your details.',
      ];

      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      setStatus(randomStatus);
      setShowStatus(true);
    } else {
      alert('Please enter Voter ID or Reference Number.');
    }
  };

  return (
    <div className="track-vote-container">
      <h1>Track Your Vote</h1>
      <form onSubmit={handleSubmit} className="track-form">
        <div className="form-group">
          <label htmlFor="voterID">Voter ID:</label>
          <input
            type="text"
            id="voterID"
            placeholder="Enter your Voter ID or Reference Number"
            value={voterID}
            onChange={(e) => setVoterID(e.target.value)}
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="refNumber">Reference Number:</label>
          <input
            type="text"
            id="refNumber"
            placeholder="Enter Reference Number"
            value={referenceNumber}
            onChange={(e) => setReferenceNumber(e.target.value)}
          />
        </div> */}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      {showStatus && (
        <div className="status-box">
          <h2>Vote Status</h2>
          <p>{status}</p>
        </div>
      )}
    </div>
  );
};

export default TrackVotePage;
