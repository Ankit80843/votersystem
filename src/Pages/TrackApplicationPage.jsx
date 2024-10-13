import React, { useState } from 'react';
import './TrackApplicationPage.css'; // CSS file add karein

const TrackApplicationPage = () => {
  const [applicationId, setApplicationId] = useState('');
  const [name, setName] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [status, setStatus] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to check the application status
    setStatus(`Application ID ${applicationId} for ${name} is currently being processed.`);
    setShowPopup(true);
  };

  return (
    <div className="track-application-container">
      <h1>Track Your Application</h1>
      <form onSubmit={handleSearch}>
        <div className="input-group">
          <label htmlFor="applicationId">Application ID</label>
          <input
            id="applicationId"
            type="text"
            value={applicationId}
            onChange={(e) => setApplicationId(e.target.value)}
            required
            placeholder="Enter your Application ID"
          />
        </div>
        <div className="input-group">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your full name"
          />
        </div>
        <button type="submit">Search Application</button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Application Status</h2>
            <p>{status}</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackApplicationPage;
