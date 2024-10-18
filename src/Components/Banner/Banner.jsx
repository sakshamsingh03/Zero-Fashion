import React from 'react';
import './Banner.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Banner = () => {
  return (
    <div className='banner'>
      <div className="banner-left">
        <span className="banner-label">NEW ARRIVALS ONLY</span>
        <div className="banner-title">
          <div className="banner-hand-icon">
            <span>new</span>
            <img src={hand_icon} alt="Wave" />
          </div>
          <h1>
            <span>collection</span>
            <span>for everyone</span>
          </h1>
        </div>
        <button className="banner-latest-button">
          <span>Latest Collection</span>
          <img src={arrow_icon} alt="Arrow" />
        </button>
      </div>
      <div className="banner-right">
        <img src={hero_image} alt="Hero" />
      </div>
    </div>
  );
};

export default Banner;