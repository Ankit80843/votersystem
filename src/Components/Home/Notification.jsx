// Notification.js
import React, { useEffect } from 'react';
import './Notification.css'; // Create a CSS file for styling

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // Hide notification after 5 seconds

    return () => clearTimeout(timer); // Clear timer on unmount
  }, [onClose]);

  return (
    <div className="notification">
      {message}
    </div>
  );
};

export default Notification;
