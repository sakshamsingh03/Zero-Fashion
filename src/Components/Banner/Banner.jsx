import React from 'react'
import './Banner.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="banner-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collection</p>
            <p>for everyone</p>
          </div>
          <div className="banner-latest-button">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
        <div className="banner-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Banner