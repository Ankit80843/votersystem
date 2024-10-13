// import React from 'react';
// import './Sec1.css';
// import Result from './Result';
// import Map from './Map';

// function Sec1() {
//   return (
//     <div className="Sec1-container">
//       <div className="Sec1-map">
//         <Map />
//       </div>
//       <div className="Sec1-about">
//         <Result />
//       </div>
//     </div>
//   );
// }

// export default Sec1;


import React from 'react';
import { Chart } from 'react-google-charts';
import './Sec1.css';

function Sec1() {
  // Data for the GeoChart
  const data = [
    ['State Code', 'State', 'Voters'],
    ['IN-UP', 'Uttar Pradesh', 155000000],
    ['IN-MH', 'Maharashtra', 93000000],
    ['IN-BR', 'Bihar', 79000000],
    ['IN-WB', 'West Bengal', 75000000],
    ['IN-MP', 'Madhya Pradesh', 52000000],
    ['IN-TN', 'Tamil Nadu', 48000000],
    ['IN-RJ', 'Rajasthan', 47000000],
    ['IN-KA', 'Karnataka', 44000000],
    ['IN-GJ', 'Gujarat', 41000000],
    ['IN-AP', 'Andhra Pradesh', 34000000],
    ['IN-OR', 'Odisha', 29000000],
    ['IN-TG', 'Telangana', 26000000],
    ['IN-KL', 'Kerala', 24000000],
    ['IN-JH', 'Jharkhand', 23000000],
    ['IN-AS', 'Assam', 22000000],
    ['IN-PB', 'Punjab', 19000000],
    ['IN-CT', 'Chhattisgarh', 18000000],
    ['IN-HR', 'Haryana', 17000000],
    ['IN-JK', 'Jammu and Kashmir', 12000000],
    ['IN-UT', 'Uttarakhand', 8000000],
    ['IN-HP', 'Himachal Pradesh', 6500000],
    ['IN-TR', 'Tripura', 3500000],
    ['IN-ML', 'Meghalaya', 3000000],
    ['IN-MN', 'Manipur', 2800000],
    ['IN-NL', 'Nagaland', 2400000],
    ['IN-GA', 'Goa', 1500000],
    ['IN-AR', 'Arunachal Pradesh', 1400000],
    ['IN-MZ', 'Mizoram', 1100000],
    ['IN-SK', 'Sikkim', 600000],
    ['IN-DL', 'Delhi', 18000000],
    ['IN-PY', 'Puducherry', 1200000],
    ['IN-CH', 'Chandigarh', 1000000],
    ['IN-AN', 'Andaman and Nicobar Islands', 400000],
    ['IN-DN', 'Dadra and Nagar Haveli', 350000],
    ['IN-DD', 'Daman and Diu', 250000],
    ['IN-LD', 'Lakshadweep', 65000],
  ];

  const mapOptions = {
    region: 'IN',
    domain: 'IN',
    displayMode: 'regions',
    colorAxis: {
      colors: [
        '#ffebee',
        '#ffcdd2',
        '#f8bbd0',
        '#f48fb1',
        '#f44336',
        '#ffeb3b',
        '#cddc39',
        '#4caf50',
        '#388e3c',
        '#081d58',
      ],
    },
    resolution: 'provinces',
    tooltip: { trigger: 'both' },
    defaultColor: '#f5f5f5',
    width: '100%',
    height: '100%',
    chartArea: {
      width: '100%',
      height: '100%',
    },
  };

  const electionData = [
    {
      heading: 'Current Elections',
      buttons: [
        { label: 'Jammu & Kashmir', color: '#FF5733' },
        { label: 'Haryana', color: '#33FF57' },
      ],
    },
    {
      heading: 'Previous Elections',
      buttons: [
        { label: 'General Elections to Lok Sabha 2024', color: '#33B5E5' },
        { label: 'Andhra Pradesh', color: '#FFEB3B' },
        { label: 'Arunachal Pradesh', color: '#8E24AA' },
        { label: 'Odisha', color: '#FF9800' },
        { label: 'Sikkim', color: '#4CAF50' },
        { label: 'Assembly Elections', color: '#FFC107' },
        { label: 'Bye Elections', color: '#00BCD4' },
      ],
    },
    {
      heading: 'Past Elections',
      buttons: [
        { label: 'Presidential Elections', color: '#673AB7' },
        { label: 'Vice-Presidential Elections', color: '#E91E63' },
        { label: 'Lok Sabha Elections', color: '#009688' },
        { label: 'Assembly Elections', color: '#795548' },
        { label: 'Bye Elections', color: '#607D8B' },
      ],
    },
  ];

  return (
    <div className="Sec1-container">
      <div className="Sec1-map">
        <Chart
          chartType="GeoChart"
          data={data}
          options={mapOptions}
          width="100%"
          height="100%"
          legendToggle
         
        />
      
      </div>
      <div className="Sec1-about">
        {electionData.map((section, index) => (
          <section className="elections-section" key={index}>
            <h1 className="section-heading">{section.heading}</h1>
            <div className="button-group">
              {section.buttons.map((button, i) => (
                <button
                  className="election-button"
                  key={i}
                  style={{ backgroundColor: button.color }}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Sec1;
