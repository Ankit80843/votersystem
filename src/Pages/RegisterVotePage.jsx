import React, { useState } from 'react';
import './RegisterVotePage.css';

const parties = [
  {
    name: 'Party A',
    symbol: '🦅',
  },
  {
    name: 'Party B',
    symbol: '🐉',
  },
  {
    name: 'Party C',
    symbol: '🌟',
  },
  {
    name: 'Party D',
    symbol: '🦁',
  },
];

const RegisterVotePage = () => {
  const [voterID, setVoterID] = useState('');
  const [selectedParty, setSelectedParty] = useState('');
  const [name, setName] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (voterID && selectedParty && name) {
      // Generate a random reference number
      const refNumber = `REF-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceNumber(refNumber);
      setShowPopup(true);
  
      // Clear all form fields
      setVoterID('');
      setSelectedParty('');
      setName('');
    } else {
      alert('Please fill in all the fields.');
    }
  };
  
  return (
    <div className="register-vote-container">
      <h1>Register as a Voter</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        {/* Voter ID Input */}
        <div className="form-group">
          <label htmlFor="voterID">Voter ID Card Number:</label>
          <input
            type="text"
            id="voterID"
            value={voterID}
            onChange={(e) => setVoterID(e.target.value)}
            placeholder="Enter your Voter ID"
            required
          />
        </div>

        {/* Party Selection with Tickable Options */}
        <div className="form-group">
          <label>Choose Your Party:</label>
          <div className="party-options">
            {parties.map((party, index) => (
              <div
                key={index}
                className={`party-option ${selectedParty === party.name ? 'selected' : ''}`}
                onClick={() => setSelectedParty(party.name)}
              >
                <div className="party-box">
                  <span className="party-symbol">{party.symbol}</span>
                  <span className="party-name">{party.name}</span>
                </div>
                {selectedParty === party.name && (
                  <span className="tick-mark">✔</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Name Input */}
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Full Name"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      {/* Success Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Success!</h2>
            <p>Your registration has been successfully submitted.</p>
            <p>
              <strong>Reference Number:</strong> {referenceNumber}
            </p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterVotePage;
