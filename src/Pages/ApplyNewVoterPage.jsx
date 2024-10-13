import React, { useState } from 'react';
import './ApplyNewVoterPage.css'; // External CSS

const ApplyNewVoterPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personal: {
      rName: '',
      fatherName: '',
      motherName: '',
      spouseName: '',
      gender: '',
      dob: '',
      photo: ''
    },
    address: {
      village: '',
      city: '',
      postOffice: '',
      state: '',
      pinCode: '',
      mobileNumber: '',
      emailId: ''
    }
  });
  const [showPopup, setShowPopup] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [section, field] = name.split('.');
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const [section, field] = name.split('.');
    if (files[0]) {
      const fileSize = files[0].size / 1024; // size in KB
      if (fileSize <= 200) { // limit size to 200KB
        setFormData((prev) => ({
          ...prev,
          [section]: {
            ...prev[section],
            [field]: URL.createObjectURL(files[0])
          }
        }));
      } else {
        alert('Please upload an image smaller than 200KB.');
      }
    }
  };

  const handleSubmit = () => {
    const newApplicationId = `APP${Math.floor(Math.random() * 1000000)}`;
    setApplicationId(newApplicationId);
    setShowPopup(true);
  };

  const handleReview = () => {
    if (!Object.values(formData.address).every(value => value)) {
      alert('Please fill in all address details before continuing.');
      return;
    }
    setStep(3);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleEdit = () => {
    setStep(1);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setStep(1); // Reset form step after closing popup
  };

  const steps = [
    {
      label: 'Personal Details',
      content: (
        <div className="form-grid">
          <div className="form-field">
            <label>Applicant's Name<span className="required">*</span></label>
            <input
              type="text"
              name="personal.rName"
              placeholder="Enter your name"
              onChange={handleChange}
              value={formData.personal.rName}
              required
            />
          </div>
          <div className="form-field">
            <label>Father's Name<span className="required">*</span></label>
            <input
              type="text"
              name="personal.fatherName"
              placeholder="Father's Name"
              onChange={handleChange}
              value={formData.personal.fatherName}
              required
            />
          </div>
          <div className="form-field">
            <label>Mother's Name<span className="required">*</span></label>
            <input
              type="text"
              name="personal.motherName"
              placeholder="Mother's Name"
              onChange={handleChange}
              value={formData.personal.motherName}
              required
            />
          </div>
          <div className="form-field">
            <label>Spouse's Name</label>
            <input
              type="text"
              name="personal.spouseName"
              placeholder="Spouse's Name"
              onChange={handleChange}
              value={formData.personal.spouseName}
            />
          </div>
          <div className="form-field">
            <label>Gender<span className="required">*</span></label>
            <select
              name="personal.gender"
              onChange={handleChange}
              value={formData.personal.gender}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-field">
            <label>Date of Birth<span className="required">*</span></label>
            <input
              type="date"
              name="personal.dob"
              onChange={handleChange}
              value={formData.personal.dob}
              required
            />
          </div>
          <div className="form-field">
            <label>Photo (Max 200KB)</label>
            <input
              type="file"
              name="personal.photo"
              accept="image/*"
              onChange={handleFileChange}
            />
            {formData.personal.photo && (
              <img className="photo-preview" src={formData.personal.photo} alt="Profile" />
            )}
          </div>
        </div>
      )
    },
    {
      label: 'Address Details',
      content: (
        <div className="form-grid">
          <div className="form-field">
            <label>Village<span className="required">*</span></label>
            <input
              type="text"
              name="address.village"
              placeholder="Village"
              onChange={handleChange}
              value={formData.address.village}
              required
            />
          </div>
          <div className="form-field">
            <label>City<span className="required">*</span></label>
            <input
              type="text"
              name="address.city"
              placeholder="City"
              onChange={handleChange}
              value={formData.address.city}
              required
            />
          </div>
          <div className="form-field">
            <label>Post Office<span className="required">*</span></label>
            <input
              type="text"
              name="address.postOffice"
              placeholder="Post Office"
              onChange={handleChange}
              value={formData.address.postOffice}
              required
            />
          </div>
          <div className="form-field">
            <label>State<span className="required">*</span></label>
            <input
              type="text"
              name="address.state"
              placeholder="State"
              onChange={handleChange}
              value={formData.address.state}
              required
            />
          </div>
          <div className="form-field">
            <label>PIN Code<span className="required">*</span></label>
            <input
              type="text"
              name="address.pinCode"
              placeholder="PIN Code"
              onChange={handleChange}
              value={formData.address.pinCode}
              required
            />
          </div>
          <div className="form-field">
            <label>Mobile Number<span className="required">*</span></label>
            <input
              type="text"
              name="address.mobileNumber"
              placeholder="Mobile Number"
              onChange={handleChange}
              value={formData.address.mobileNumber}
              required
            />
          </div>
          <div className="form-field">
            <label>Email ID<span className="required">*</span></label>
            <input
              type="email"
              name="address.emailId"
              placeholder="Email ID"
              onChange={handleChange}
              value={formData.address.emailId}
              required
            />
          </div>
        </div>
      )
    },
    {
      label: 'Submit',
      content: (
        <div className="review-section">
          <h3>Review Your Details</h3>
          <div className="review-content">
            <p><strong>Applicant's Name:</strong> {formData.personal.rName}</p>
            <p><strong>Father's Name:</strong> {formData.personal.fatherName}</p>
            <p><strong>Mother's Name:</strong> {formData.personal.motherName}</p>
            <p><strong>Spouse's Name:</strong> {formData.personal.spouseName}</p>
            <p><strong>Gender:</strong> {formData.personal.gender}</p>
            <p><strong>Date of Birth:</strong> {formData.personal.dob}</p>
            <p><strong>Village:</strong> {formData.address.village}</p>
            <p><strong>City:</strong> {formData.address.city}</p>
            <p><strong>Post Office:</strong> {formData.address.postOffice}</p>
            <p><strong>State:</strong> {formData.address.state}</p>
            <p><strong>PIN Code:</strong> {formData.address.pinCode}</p>
            <p><strong>Mobile Number:</strong> {formData.address.mobileNumber}</p>
            <p><strong>Email ID:</strong> {formData.address.emailId}</p>
          </div>
          <button onClick={handleEdit} className="edit-btn">Edit</button>
        </div>
      )
    }
  ];

  return (
    
    <div className="apply-new-voter-page">
       <div className="heading">
            <p>Apply New Voter Card </p>
          </div>
      <div className="progress-bar" style={{ width: `${(step / steps.length) * 100}%` }}></div>
      <div className="status">
        {steps.map((stepItem, index) => (
          <div
            key={index}
            className={`status-item ${step === index + 1 ? 'active' : ''}`}
          >
            {stepItem.label}
          </div>
        ))}
      </div>
      <div className="form-content">
        {steps[step - 1].content}
      </div>
      <div className="navigation-buttons">
        {step > 1 && <button onClick={handleBack} className="back-btn">Back</button>}
        {step < steps.length ? (
          <button
            onClick={step === 1 ? () => setStep(2) : handleReview}
            className="next-btn"
          >
            {step === 1 ? 'Next' : 'Review'}
          </button>
        ) : (
          <button onClick={handleSubmit} className="submit-btn">Submit</button>
        )}
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h4>Application Submitted</h4>
            <p>Your application has been successfully submitted. Your Application ID is <strong>{applicationId}</strong>.</p>
            <button onClick={handleClosePopup} className="close-popup-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyNewVoterPage;
