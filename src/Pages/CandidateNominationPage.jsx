import React, { useState } from 'react';
import './CandidateNominationPage.css'; // Ensure this file contains the updated styles

const CandidateNominationPage = () => {
  const [step, setStep] = useState(1);
  const [basicInfo, setBasicInfo] = useState({
    name: '',
    aadhar: '',
    dob: '',
    gender: '',
    maritalStatus: '',
    nationality: '',
    fatherName: '',
    motherName: '',
    spouseName: '',
    occupation: '',
  });
  const [contactInfo, setContactInfo] = useState({
    village: '',
    city: '',
    state: '',
    pinCode: '',
    fullAddress: '',
    contactNumber: '',
    email: '',
  });
  const [educationDetails, setEducationDetails] = useState({
    qualification: '',
    institution: '',
    yearOfPassing: '',
  });
  const [incomeDetails, setIncomeDetails] = useState({
    annualIncome: '',
  });
  const [constituencyDetails, setConstituencyDetails] = useState({
    constituencyName: '',
    constituencyAddress: '',
  });
  const [otp, setOtp] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [referenceNumber] = useState(Math.floor(100000 + Math.random() * 900000)); // Random reference number

  const handleChange = (e, stateUpdater) => {
    const { name, value } = e.target;
    stateUpdater(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 7) {
      setStep(step + 1);
    } else {
      alert(`OTP sent to ${contactInfo.contactNumber}`);
      setStep(step + 1);
    }
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (otp === '123456') { // Replace this with actual OTP verification logic
      setShowPopup(true);
      setSubmitted(true);
    } else {
      alert("Invalid OTP");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="c_candidate-nomination-page">
      <h1>Candidate Nomination</h1>
      {showPopup && (
        <div className="c_popup-overlay">
          <div className="c_popup-message">
            <h2>Congratulations!</h2>
            <p>Your nomination was successful.</p>
            <p>Your reference number is: <strong>{referenceNumber}</strong></p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
      {!submitted && (
        <form onSubmit={step < 7 ? handleSubmit : handleFinalSubmit} className="c_form">
          {step === 1 && (
            <>
              <h2>Basic Information</h2>
              <div className="c_input-grid">
                <input type="text" name="name" placeholder="Name" value={basicInfo.name} onChange={e => handleChange(e, setBasicInfo)} />
                <input type="text" name="aadhar" placeholder="Aadhar Number" value={basicInfo.aadhar} onChange={e => handleChange(e, setBasicInfo)} />
                <input type="date" name="dob" placeholder="Date of Birth" value={basicInfo.dob} onChange={e => handleChange(e, setBasicInfo)} />
                <select name="gender" value={basicInfo.gender} onChange={e => handleChange(e, setBasicInfo)}>
                  <option value="" disabled>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <select name="maritalStatus" value={basicInfo.maritalStatus} onChange={e => handleChange(e, setBasicInfo)}>
                  <option value="" disabled>Select Marital Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                </select>
                <input type="text" name="nationality" placeholder="Nationality" value={basicInfo.nationality} onChange={e => handleChange(e, setBasicInfo)} />
                <input type="text" name="fatherName" placeholder="Father's Name" value={basicInfo.fatherName} onChange={e => handleChange(e, setBasicInfo)} />
                <input type="text" name="motherName" placeholder="Mother's Name" value={basicInfo.motherName} onChange={e => handleChange(e, setBasicInfo)} />
                <input type="text" name="spouseName" placeholder="Spouse's Name" value={basicInfo.spouseName} onChange={e => handleChange(e, setBasicInfo)} />
                <input type="text" name="occupation" placeholder="Occupation" value={basicInfo.occupation} onChange={e => handleChange(e, setBasicInfo)} />
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <h2>Contact Information</h2>
              <div className="c_input-grid">
                <input type="text" name="fullAddress" placeholder="Full Address" value={contactInfo.fullAddress} onChange={e => handleChange(e, setContactInfo)} />
                <input type="text" name="village" placeholder="Village" value={contactInfo.village} onChange={e => handleChange(e, setContactInfo)} />
                <input type="text" name="city" placeholder="City" value={contactInfo.city} onChange={e => handleChange(e, setContactInfo)} />
                <input type="text" name="state" placeholder="State" value={contactInfo.state} onChange={e => handleChange(e, setContactInfo)} />
                <input type="text" name="pinCode" placeholder="Pin Code" value={contactInfo.pinCode} onChange={e => handleChange(e, setContactInfo)} />
                <input type="text" name="contactNumber" placeholder="Contact Number" value={contactInfo.contactNumber} onChange={e => handleChange(e, setContactInfo)} />
                <input type="email" name="email" placeholder="Email" value={contactInfo.email} onChange={e => handleChange(e, setContactInfo)} />
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <h2>Education Details</h2>
              <div className="c_input-grid">
                <input type="text" name="qualification" placeholder="Qualification" value={educationDetails.qualification} onChange={e => handleChange(e, setEducationDetails)} />
                <input type="text" name="institution" placeholder="Institution" value={educationDetails.institution} onChange={e => handleChange(e, setEducationDetails)} />
                <input type="text" name="yearOfPassing" placeholder="Year of Passing" value={educationDetails.yearOfPassing} onChange={e => handleChange(e, setEducationDetails)} />
              </div>
            </>
          )}
          {step === 4 && (
            <>
              <h2>Income Details</h2>
              <div className="c_input-grid">
                <input type="text" name="annualIncome" placeholder="Annual Income" value={incomeDetails.annualIncome} onChange={e => handleChange(e, setIncomeDetails)} />
              </div>
            </>
          )}
          {step === 5 && (
            <>
              <h2>Constituency Details</h2>
              <div className="c_input-grid">
                <input type="text" name="constituencyName" placeholder="Constituency Name" value={constituencyDetails.constituencyName} onChange={e => handleChange(e, setConstituencyDetails)} />
                <input type="text" name="constituencyAddress" placeholder="Constituency Address" value={constituencyDetails.constituencyAddress} onChange={e => handleChange(e, setConstituencyDetails)} />
              </div>
            </>
          )}
          {step === 6 && (
            <>
              <h2>OTP Verification</h2>
              <p>An OTP has been sent to {contactInfo.contactNumber}</p>
              <input type="text" name="otp" placeholder="Enter OTP" value={otp} onChange={e => setOtp(e.target.value)} />
            </>
          )}
          <div className="c_button-group">
            {step > 1 && <button type="button" onClick={handleBack}>Back</button>}
            <button type="submit">{step < 7 ? 'Next' : 'Submit'}</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CandidateNominationPage;


