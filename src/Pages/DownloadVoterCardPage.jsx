// import React, { useState } from 'react';
// import './DownloadVoterCardPage.css';

// const DownloadVoterCardPage = () => {
//   const [applicationId, setApplicationId] = useState('');
//   const [name, setName] = useState('');
//   const [fatherName, setFatherName] = useState('John Doe');
//   const [gender, setGender] = useState('Male');
//   const [dob, setDob] = useState('01-01-1990');
//   const [address, setAddress] = useState('123 Main Street, City Name, State, PIN: 123456');
//   const [showCard, setShowCard] = useState(false);

//   const handleDownload = () => {
//     setShowCard(true);
//   };

//   const handleCardDownload = () => {
//     alert('Downloading voter card...');
//   };

//   return (
//     <div className="dvcp-download-voter-card-page">
//       <h1>Download Voter Card</h1>
//       <div className="dvcp-input-section">
//         <input
//           type="text"
//           placeholder="Application ID"
//           value={applicationId}
//           onChange={(e) => setApplicationId(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <button onClick={handleDownload}>Download</button>
//       </div>

//       {showCard && (
//         <div className="dvcp-card-section">
//           <div className="dvcp-card-container">
//             <div className="dvcp-card dvcp-front">
//               <div className="dvcp-card-header">
//                 <img
//                   src="https://iconape.com/wp-content/png_logo_vector/indian-government-logo.png"
//                   alt="Logo 1"
//                   className="dvcp-logo"
//                 />
//                 <div className="dvcp-header-text">
//                   <h2>भारत निर्वाचन आयोग</h2>
//                   <h3>Election Commission of India</h3>
//                 </div>
//                 <img
//                   src="https://www.eci.gov.in/newimg/eci-logo-white.svg"
//                   alt="Logo 2"
//                   className="dvcp-logo"
               
//                 />
//               </div>
//               <p style={{fontSize: '15px', textAlign: 'center'}}>मतदाता पहचान पत्र </p>
//               <div className="dvcp-photo-container">
//                 <img
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHtEM2bXDOxO3HV0Oakt0e04xWBCpnurXWbg&s"
//                   alt="Voter"
//                   className="dvcp-photo"
//                 />
//               </div>
//               {/* Barcode and Application ID */}
//               <div className="dvcp-barcode-section">
//                 <p><strong>ID:</strong> {applicationId}</p>
//                 <img
//                   src="https://barcode.tec-it.com/barcode.ashx?data=1234567890&type=Code128&translate-esc=true"
//                   alt="Barcode"
//                   className="dvcp-barcode"
//                 />
//               </div>

//               <div className="dvcp-card-details">
//                 {/* English and Hindi Names Side by Side */}
//                 <div className="dvcp-details-row">
//                   <p><strong>Name:</strong> {name}</p>
//                   <p><strong>नाम:</strong> {name}</p>
//                 </div>

//                 {/* Father's Name Side by Side */}
//                 <div className="dvcp-details-row">
//                   <p><strong>Father's Name:</strong> {fatherName}</p>
//                   <p><strong>पिता का नाम:</strong> {fatherName}</p>
//                 </div>

//                 {/* Gender Side by Side */}
//                 <div className="dvcp-details-row">
//                   <p><strong>Gender:</strong> {gender}</p>
                
//                 </div>

//                 {/* Date of Birth Side by Side */}
//                 <div className="dvcp-details-row">
                
//                   <p><strong>जन्म तिथि:</strong> {dob}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="dvcp-card dvcp-back">
//               <h3>Address Details</h3>
//               <div className="dvcp-details-row">
//                 <p><strong>Address:</strong> {address}</p>
//                 <br />
//                 <p><strong>पता:</strong> {address}</p>
//               </div>

//               <div className="dvcp-back-footer">
//                 <p>This card is for identification purposes only and does not confer any rights.</p>
//                 <p>If found, please return to the nearest Election Office.</p>
//               </div>
// <div className="dvcp-barcode-back">

// <img
//                 src="https://www.qrstuff.com/images/default_qrcode.png"
//                 alt="QR code"
                
//               />
// </div>
//             </div>
//           </div>

//           <button className="dvcp-download-button" onClick={handleCardDownload}>
//             Download Card
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DownloadVoterCardPage;



import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './DownloadVoterCardPage.css';

const DownloadVoterCardPage = () => {
  const [applicationId, setApplicationId] = useState('');
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('John Doe');
  const [gender, setGender] = useState('Male');
  const [dob, setDob] = useState('01-01-1990');
  const [address, setAddress] = useState('123 Main Street, City Name, State, PIN: 123456');
  const [showCard, setShowCard] = useState(false);

  const handleDownload = () => {
    setShowCard(true);
  };

  const handleCardDownload = (type) => {
    const cardElement = document.getElementById('voter-card');

    // Capture the voter card as an image using html2canvas
    html2canvas(cardElement).then((canvas) => {
      if (type === 'jpg') {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg', 1.0);
        link.download = 'voter-card.jpg';
        link.click();
      } else if (type === 'pdf') {
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'px',
          format: [canvas.width, canvas.height]
        });
        pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height);
        pdf.save('voter-card.pdf');
      }
    });
  };

  return (
    <div className="dvcp-download-voter-card-page">
      <h1>Download Voter Card</h1>
      <div className="dvcp-input-section">
        <input
          type="text"
          placeholder="Application ID"
          value={applicationId}
          onChange={(e) => setApplicationId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleDownload}>Search</button>
      </div>

      {showCard && (
        <div className="dvcp-card-section">
          <div id="voter-card" className="dvcp-card-container">
            <div className="dvcp-card dvcp-front">
              <div className="dvcp-card-header">
                <img
                  src="https://iconape.com/wp-content/png_logo_vector/indian-government-logo.png"
                  alt="Logo 1"
                  className="dvcp-logo"
                />
                <div className="dvcp-header-text">
                  <h2>भारत निर्वाचन आयोग</h2>
                  <h3>Election Commission of India</h3>
                </div>
                <img
                  src="https://www.eci.gov.in/newimg/eci-logo-white.svg"
                  alt="Logo 2"
                  className="dvcp-logo"
                />
              </div>
              <p style={{ fontSize: '15px', textAlign: 'center' }}>मतदाता पहचान पत्र</p>
              <div className="dvcp-photo-container">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHtEM2bXDOxO3HV0Oakt0e04xWBCpnurXWbg&s"
                  alt="Voter"
                  className="dvcp-photo"
                />
              </div>
              {/* Barcode and Application ID */}
              <div className="dvcp-barcode-section">
                <p><strong>ID:</strong> {applicationId}</p>
                <img
                  src="https://barcode.tec-it.com/barcode.ashx?data=1234567890&type=Code128&translate-esc=true"
                  alt="Barcode"
                  className="dvcp-barcode"
                />
              </div>

              <div className="dvcp-card-details">
                {/* English and Hindi Names Side by Side */}
                <div className="dvcp-details-row">
                  <p><strong>Name:</strong> {name}</p>
                  <p><strong>नाम:</strong> {name}</p>
                </div>

                {/* Father's Name Side by Side */}
                <div className="dvcp-details-row">
                  <p><strong>Father's Name:</strong> {fatherName}</p>
                  <p><strong>पिता का नाम:</strong> {fatherName}</p>
                </div>

                {/* Gender Side by Side */}
                <div className="dvcp-details-row">
                  <p><strong>Gender:</strong> {gender}</p>
                  <p><strong>लिंग:</strong> {gender}</p>
                </div>

                {/* Date of Birth Side by Side */}
                <div className="dvcp-details-row">
                  <p><strong>Date of Birth:</strong> {dob}</p>
                  <p><strong>जन्म तिथि:</strong> {dob}</p>
                </div>
              </div>
            </div>

            <div className="dvcp-card dvcp-back">
              <h3>Address Details</h3>
              <div className="dvcp-details-row">
                <p><strong>Address:</strong> {address}</p>
                <p><strong>पता:</strong> {address}</p>
              </div>

              <div className="dvcp-back-footer">
                <p>This card is for identification purposes only and does not confer any rights.</p>
                <p>If found, please return to the nearest Election Office.</p>
              </div>
              <div className="dvcp-barcode-back">
                <img
                  src="https://www.qrstuff.com/images/default_qrcode.png"
                  alt="QR code"
                />
              </div>
            </div>
          </div>

          {/* Download buttons */}
          <div className="dvcp-download-buttons">
            <button className="dvcp-download-button" onClick={() => handleCardDownload('jpg')}>
              Download as JPG
            </button>
            <button className="dvcp-download-button" onClick={() => handleCardDownload('pdf')}>
              Download as PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadVoterCardPage;
