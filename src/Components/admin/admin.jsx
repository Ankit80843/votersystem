

import React, { useState, useRef, useEffect } from 'react';
import './admin.css';
import Sidebar from './Sidebar';
import { FaUserCircle } from 'react-icons/fa';

const Admin = () => {
  const storedData = JSON.parse(localStorage.getItem('user'));
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const profileContainerRef = useRef(null);

  const handleLogout = () => {
    // localStorage.removeItem('user');
    window.location.href = '/';
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Hide dropdown if clicked outside of profile container and dropdown
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        profileContainerRef.current && !profileContainerRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Welcome to Admin Panel</h1>
        <div 
          ref={profileContainerRef}
          className="profile-container"
          onMouseEnter={() => setShowDropdown(true)} // Show dropdown on hover
          onMouseLeave={() => setShowDropdown(false)} // Hide dropdown when mouse leaves
        >
          <FaUserCircle className="profile-icon" />
          <span>{storedData?.userId}</span>
          {showDropdown && (
            <div className="profile-dropdown" ref={dropdownRef}>
              <button onClick={() => window.location.href = '/change-password'}>Change Password</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </header>
      <div className="admin-content">
        <Sidebar />
        
      </div>
    </div>
  );
};

export default Admin;
