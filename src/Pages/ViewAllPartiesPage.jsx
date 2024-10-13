import React from 'react';
import './ViewAllPartiesPage.css'; // Ensure to include CSS styles

const parties = [
  {
    name: 'Party A',
    symbol: '🦅', // Use emoji or image for the symbol
    totalMembers: 1200,
    website: 'https://partya.com',
    intro: 'Party A is committed to community service and development.'
  },
  {
    name: 'Party B',
    symbol: '🐉',
    totalMembers: 850,
    website: 'https://partyb.com',
    intro: 'Party B focuses on economic reforms and growth.'
  },
  {
    name: 'Party C',
    symbol: '🌟',
    totalMembers: 3000,
    website: 'https://partyc.com',
    intro: 'Party C aims to bring social justice and equality.'
  },
  {
    name: 'Party D',
    symbol: '🦁',
    totalMembers: 950,
    website: 'https://partyd.com',
    intro: 'Party D advocates for environmental sustainability.'
  },
];

const ViewAllPartiesPage = () => {
  return (
    <div className="view-all-parties-container">
      <h1>View All Political Parties</h1>
     
      <div className="party-cards-container">
        {parties.map((party, index) => (
          <div key={index} className="card glass-card">
            <div className="card-inner">
              <div className="card-front">
                <div className="party-symbol">{party.symbol}</div>
                <h2>{party.name}</h2>
                <p>Total Members: {party.totalMembers}</p>
                <a href={party.website} target="_blank" rel="noopener noreferrer" className="website-link">View Website</a>
              </div>
              <div className="card-back">
                <p>{party.intro}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllPartiesPage;
