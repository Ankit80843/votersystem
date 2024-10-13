import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ManageVoter from './adminpage/ManageVoter';
import ManageNomination from './adminpage/ManageNomination';
import ManageParty from './adminpage/ManageParty';
import ViewVoters from './adminpage/ViewVoters';
import ViewParties from './adminpage/ViewParties';
import ViewReports from './adminpage/ViewReports';
import DefaultPage from './adminpage/DefaultPage'; // Import the default page
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('DefaultPage'); // Set initial state to default page

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (component) => {
    setActiveComponent(component);
    setIsOpen(false);
  };

  return (
    <>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars size={24} />
      </div>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={toggleSidebar}>
          <FaTimes size={24} />
        </div>
        <h2>DASHBOARD</h2>
        <ul>
          <li onClick={() => handleLinkClick('ManageVoter')}>Manage Voter</li>
          <li onClick={() => handleLinkClick('ManageNomination')}>Manage Candidate Nomination</li>
          <li onClick={() => handleLinkClick('ManageParty')}>Manage Political Party</li>
          <li onClick={() => handleLinkClick('ViewVoters')}>View All Voters</li>
          <li onClick={() => handleLinkClick('ViewParties')}>View All Parties</li>
          <li onClick={() => handleLinkClick('ViewReports')}>View Reports</li>
        </ul>
      </div>

      <div className="content">
        {activeComponent === 'DefaultPage' && <DefaultPage />} {/* Render default page */}
        {activeComponent === 'ManageVoter' && <ManageVoter />}
        {activeComponent === 'ManageNomination' && <ManageNomination />}
        {activeComponent === 'ManageParty' && <ManageParty />}
        {activeComponent === 'ViewVoters' && <ViewVoters />}
        {activeComponent === 'ViewParties' && <ViewParties />}
        {activeComponent === 'ViewReports' && <ViewReports />}
      </div>
    </>
  );
};

export default Sidebar;
