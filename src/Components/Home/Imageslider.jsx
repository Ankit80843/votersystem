import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
  "https://www.eci.gov.in/eci-backend/public/banner/May/rTNCeHAmUkbF6Zl1716792121.jpg",
  "https://www.eci.gov.in/eci-backend/public/banner/April/cg1wvFMPLChgIFV1712124541.jpg",
  "https://www.eci.gov.in/eci-backend/public/banner/January/yKVoqGJkeqV1UcJ1706198111.jpg",
  "https://th-i.thgim.com/public/elections/8klch8/article68088752.ece/alternates/FREE_1200/Profiles1.jpg",
  "https://paytmblogcdn.paytm.com/wp-content/uploads/2023/08/Blog_Paytm_Election-Commission-of-India-Know-about-Election-Laws-Polling.jpg",
  "https://hindi.eci.gov.in/uploads/monthly_2018_03/large.566073131_MatdataMahotsav-Jan2016(43).jpg.355f1a210872d88046ae20f4cf234a8f.jpg",
  "https://th-i.thgim.com/public/incoming/xmlk7m/article68079458.ece/alternates/LANDSCAPE_1200/PTI04_14_2024_000204B.jpg","https://ecisveep.nic.in/uploads/pages_media/0_MBHHBKmH.png",
  "https://t3.ftcdn.net/jpg/07/19/82/70/360_F_719827047_J00CVWHnqOWkm6FWwO0BRFTKXg9KSTZ0.jpg","https://jknewstoday.com/wp-content/uploads/2024/04/images-2.png"
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slider-container">
      <button className="slider-button prev" onClick={handlePrevClick}>‹</button>
      <div className="slider-wrapper">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Slider"
            className="slider-image"
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          />
        ))}
      </div>
      <button className="slider-button next" onClick={handleNextClick}>›</button>
    </div>
  );
}

export default ImageSlider;
