

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { RiAdminFill } from "react-icons/ri";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    employeeId: '',
    email: '',
    mobile: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setMessage('');
    setFormData({
      userId: '',
      password: '',
      employeeId: '',
      email: '',
      mobile: '',
      confirmPassword: '',
    });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateOtp = () => {
    const otpGenerated = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
    setGeneratedOtp(otpGenerated);
    alert(`Your OTP is: ${otpGenerated}`);
    console.log(`Your OTP is: ${otpGenerated}`)
  };

  const saveToLocalStorage = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      const storedData = JSON.parse(localStorage.getItem('user'));
      if (storedData && storedData.userId === formData.userId && storedData.password === formData.password) {
        window.open('/admin', '_blank'); // Open admin in a new tab
      } else {
        setMessage('Invalid credentials. Please try again.');
      }
    } else {
      if (formData.password !== formData.confirmPassword) {
        setMessage('Passwords do not match.');
        return;
      }
      if (!formData.employeeId || !formData.email || !formData.mobile || !formData.password || !otp) {
        setMessage('Please fill in all fields.');
        return;
      }
      if (otp !== generatedOtp) {
        setMessage('Incorrect OTP.');
        return;
      }

      const newUser = {
        userId: formData.employeeId,
        password: formData.password,
        email: formData.email,
        mobile: formData.mobile,
      };

      saveToLocalStorage(newUser);
      setMessage('Sign-up successful! You can now log in.');
      console.log("SignUp Done");
      alert("Sign-up successful! You can now log in.");
      handleToggle(); // Switch to login after successful signup
    }
  };

  return (
    <div className="login-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>{isLogin ? 'Admin Login' : 'Sign Up'} <RiAdminFill /></h1>
        
        {message && <p className="message">{message}</p>}
        
        {isLogin ? (
          <>
            <input 
              className="input" 
              placeholder="Enter User Id" 
              type="text" 
              name="userId"
              value={formData.userId}
              onChange={handleInputChange}
              required
            />
            <input 
              className="input" 
              placeholder="Enter Password" 
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <span id="forget">Forget Password</span>
            <button type="submit">Submit</button>
            <span className="toggle-link" onClick={handleToggle}>Sign Up</span>
          </>
        ) : (
          <>
            <input 
              className="input" 
              placeholder="Enter Employee Id" 
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleInputChange}
              required
            />
            <input 
              className="input" 
              placeholder="Enter Email Id" 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input 
              className="input" 
              placeholder="Enter Mobile No" 
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              required
            />
            <input 
              className="input" 
              placeholder="Enter Password" 
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <input 
              className="input" 
              placeholder="Confirm Password" 
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <button className="otp-btn" type="button" onClick={generateOtp}>Send OTP</button>
            <input 
              className="input" 
              placeholder="Enter OTP" 
              type="text"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
            <span className="toggle-link" onClick={handleToggle}>Log In</span>
          </>
        )}
      </form>
    </div>
  );
}

export default Login;
