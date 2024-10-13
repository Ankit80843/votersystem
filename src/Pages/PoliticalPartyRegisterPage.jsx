// import React, { useState } from 'react';
// import './PoliticalPartyRegisterPage.css'; // Create a CSS file for styles

// const PoliticalPartyRegisterPage = () => {
//   // Step state management
//   const [step, setStep] = useState(1);
  
//   // State for form inputs
//   const [partyDetails, setPartyDetails] = useState({
//     partyName: '',
//     partyAddress: '',
//     partyEmail: '',
//     partyPhone: '',
//     partyHeadName: '',
//     totalMembers: '',
//     partySymbol: '',
//     partyRemarks: '',
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [referenceNumber] = useState(Math.floor(100000 + Math.random() * 900000)); // Random reference number

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPartyDetails({ ...partyDetails, [name]: value });
//   };

//   const handleNext = () => {
//     if (step < 3) setStep(step + 1);
//   };

//   const handleBack = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <div className="register-page">
//       <h1>Political Party Registration</h1>
//       {submitted ? (
//         <div className="confirmation-message">
//           <h2>Submission Successful!</h2>
//           <p>Your reference number is: <strong>{referenceNumber}</strong></p>
//         </div>
//       ) : (
//         <>
//           <div className="progress-bar">
//             <div
//               className="progress-fill"
//               style={{ width: `${(step / 3) * 100}%` }}
//             />
//           </div>

//           <form onSubmit={handleSubmit}>
//             {step === 1 && (
//               <div className="step">
//                 <h2>Step 1: Basic Details</h2>
//                 <div>
//                   <label>Party Name:</label>
//                   <input
//                     type="text"
//                     name="partyName"
//                     value={partyDetails.partyName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label>Party Address:</label>
//                   <input
//                     type="text"
//                     name="partyAddress"
//                     value={partyDetails.partyAddress}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label>Party Email:</label>
//                   <input
//                     type="email"
//                     name="partyEmail"
//                     value={partyDetails.partyEmail}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label>Party Phone:</label>
//                   <input
//                     type="tel"
//                     name="partyPhone"
//                     value={partyDetails.partyPhone}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <button type="button" onClick={handleNext}>Next</button>
//               </div>
//             )}

//             {step === 2 && (
//               <div className="step">
//                 <h2>Step 2: Party Members</h2>
//                 <div>
//                   <label>Party Head Name:</label>
//                   <input
//                     type="text"
//                     name="partyHeadName"
//                     value={partyDetails.partyHeadName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label>Total Members:</label>
//                   <input
//                     type="number"
//                     name="totalMembers"
//                     value={partyDetails.totalMembers}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label>Party Symbol:</label>
//                   <input
//                     type="text"
//                     name="partySymbol"
//                     value={partyDetails.partySymbol}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label>Remarks:</label>
//                   <textarea
//                     name="partyRemarks"
//                     value={partyDetails.partyRemarks}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="button-group">
//                   <button type="button" onClick={handleBack}>Back</button>
//                   <button type="button" onClick={handleNext}>Next</button>
//                 </div>
//               </div>
//             )}

//             {step === 3 && (
//               <div className="step">
//                 <h2>Step 3: Review</h2>
//                 <h3>Review Your Details</h3>
//                 <p><strong>Party Name:</strong> {partyDetails.partyName}</p>
//                 <p><strong>Party Address:</strong> {partyDetails.partyAddress}</p>
//                 <p><strong>Party Email:</strong> {partyDetails.partyEmail}</p>
//                 <p><strong>Party Phone:</strong> {partyDetails.partyPhone}</p>
//                 <p><strong>Party Head Name:</strong> {partyDetails.partyHeadName}</p>
//                 <p><strong>Total Members:</strong> {partyDetails.totalMembers}</p>
//                 <p><strong>Party Symbol:</strong> {partyDetails.partySymbol}</p>
//                 <p><strong>Remarks:</strong> {partyDetails.partyRemarks}</p>
//                 <div className="button-group">
//                   <button type="button" onClick={handleBack}>Back</button>
//                   <button type="submit">Submit</button>
//                 </div>
//               </div>
//             )}
//           </form>
//         </>
//       )}
//     </div>
//   );
// };

// export default PoliticalPartyRegisterPage;


import React, { useState } from 'react';
import './PoliticalPartyRegisterPage.css'; // Create a CSS file for styles

const PoliticalPartyRegisterPage = () => {
  const [p_step, setStep] = useState(1);
  const [p_partyDetails, setPartyDetails] = useState({
    partyName: '',
    partyAddress: '',
    partyEmail: '',
    partyPhone: '',
    partyHeadName: '',
    totalMembers: '',
    partySymbol: '',
    partyRemarks: '',
    registrationDate: '',
    partyVision: '',
    partyMission: ''
  });
  const [p_submitted, setSubmitted] = useState(false);
  const p_referenceNumber = Math.floor(100000 + Math.random() * 900000); // Random reference number

  const p_handleChange = (e) => {
    const { name, value } = e.target;
    setPartyDetails({ ...p_partyDetails, [name]: value });
  };

  const p_handleNext = () => {
    if (p_step < 3) setStep(p_step + 1);
  };

  const p_handleBack = () => {
    if (p_step > 1) setStep(p_step - 1);
  };

  const p_handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p_political-register-page">
      <h1>Political Party Registration</h1>
      {p_submitted ? (
        <div className="p_confirmation-message">
          <h2>Submission Successful!</h2>
          <p>Your reference number is: <strong>{p_referenceNumber}</strong></p>
        </div>
      ) : (
        <>
          <div className="p_progress-bar">
            <div
              className="p_progress-fill"
              style={{ width: `${(p_step / 3) * 100}%` }}
            />
          </div>

          <form onSubmit={p_handleSubmit}>
            {p_step === 1 && (
              <div className="p_step">
                <h2>Step 1: Basic Details</h2>
                <div className="p_input-group">
                  <label>Party Name:</label>
                  <input
                    type="text"
                    name="partyName"
                    value={p_partyDetails.partyName}
                    onChange={p_handleChange}
                    required
                  />
                </div>
                <div className="p_input-group">
                  <label>Party Address:</label>
                  <input
                    type="text"
                    name="partyAddress"
                    value={p_partyDetails.partyAddress}
                    onChange={p_handleChange}
                    required
                  />
                </div>
                <div className="p_input-group">
                  <label>Party Email:</label>
                  <input
                    type="email"
                    name="partyEmail"
                    value={p_partyDetails.partyEmail}
                    onChange={p_handleChange}
                    required
                  />
                </div>
                <div className="p_input-group">
                  <label>Party Phone:</label>
                  <input
                    type="tel"
                    name="partyPhone"
                    value={p_partyDetails.partyPhone}
                    onChange={p_handleChange}
                    required
                  />
                </div>
                <div className="p_button-group">
                  <button type="button" onClick={p_handleNext}>Next</button>
                </div>
              </div>
            )}

            {p_step === 2 && (
              <div className="p_step">
                <h2>Step 2: Party Members & Details</h2>
                <div className="p_input-group">
                  <label>Party Head Name:</label>
                  <input
                    type="text"
                    name="partyHeadName"
                    value={p_partyDetails.partyHeadName}
                    onChange={p_handleChange}
                    required
                  />
                </div>
                <div className="p_input-group">
                  <label>Total Members:</label>
                  <input
                    type="number"
                    name="totalMembers"
                    value={p_partyDetails.totalMembers}
                    onChange={p_handleChange}
                    required
                  />
                </div>
                <div className="p_input-group">
                  <label>Party Symbol:</label>
                  <input
                    type="text"
                    name="partySymbol"
                    value={p_partyDetails.partySymbol}
                    onChange={p_handleChange}
                    required
                  />
                </div>
                <div className="p_input-group">
                  <label>Remarks:</label>
                  <textarea
                    name="partyRemarks"
                    value={p_partyDetails.partyRemarks}
                    onChange={p_handleChange}
                  />
                </div>
                <div className="p_input-group">
                  <label>Registration Date:</label>
                  <input
                    type="date"
                    name="registrationDate"
                    value={p_partyDetails.registrationDate}
                    onChange={p_handleChange}
                    required
                  />
                </div>
                <div className="p_input-group">
                  <label>Party Vision:</label>
                  <textarea
                    name="partyVision"
                    value={p_partyDetails.partyVision}
                    onChange={p_handleChange}
                  />
                </div>
                <div className="p_input-group">
                  <label>Party Mission:</label>
                  <textarea
                    name="partyMission"
                    value={p_partyDetails.partyMission}
                    onChange={p_handleChange}
                  />
                </div>
                <div className="p_button-group">
                  <button type="button" onClick={p_handleBack}>Back</button>
                  <button type="button" onClick={p_handleNext}>Next</button>
                </div>
              </div>
            )}

            {p_step === 3 && (
              <div className="p_step">
                <h2>Step 3: Review</h2>
                <h3>Review Your Details</h3>
                <p><strong>Party Name:</strong> {p_partyDetails.partyName}</p>
                <p><strong>Party Address:</strong> {p_partyDetails.partyAddress}</p>
                <p><strong>Party Email:</strong> {p_partyDetails.partyEmail}</p>
                <p><strong>Party Phone:</strong> {p_partyDetails.partyPhone}</p>
                <p><strong>Party Head Name:</strong> {p_partyDetails.partyHeadName}</p>
                <p><strong>Total Members:</strong> {p_partyDetails.totalMembers}</p>
                <p><strong>Party Symbol:</strong> {p_partyDetails.partySymbol}</p>
                <p><strong>Remarks:</strong> {p_partyDetails.partyRemarks}</p>
                <p><strong>Registration Date:</strong> {p_partyDetails.registrationDate}</p>
                <p><strong>Party Vision:</strong> {p_partyDetails.partyVision}</p>
                <p><strong>Party Mission:</strong> {p_partyDetails.partyMission}</p>
                <div className="p_button-group">
                  <button type="button" onClick={p_handleBack}>Back</button>
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default PoliticalPartyRegisterPage;
