import React, { useState, useEffect } from 'react';
import blackcar from './images/blackcar.jpg';
import boat from './images/boat.jpg';
import butterfly from './images/butterfly.jpg';
import cars from './images/cars.jpg';
import './Slider.css'; // You’ll create this for styles

const ImageSlider = () => {
  const images = [blackcar, boat, butterfly, cars];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className="slide" key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;


.slider-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 400%; /* 4 slides, adjust accordingly */
}

.slide {
  min-width: 100%;
  box-sizing: border-box;
}

.slide img {
  width: 100%;
  height: auto;
  display: block;
}

