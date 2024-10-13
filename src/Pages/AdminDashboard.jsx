import React from 'react';
import './AdminDashboard.css'; // Optional: create CSS for styling

const AdminDashboard = () => {
  const storedData = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="admin-dashboard">
      <h1>Welcome to the Admin Panel</h1>
      <p>Your User ID: {storedData?.userId}</p>
      {/* Additional admin functionalities can be added here */}
    </div>
  );
};

export default AdminDashboard;
