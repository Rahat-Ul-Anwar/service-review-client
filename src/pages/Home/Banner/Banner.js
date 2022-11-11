import React from 'react';
import bannerImg from '../../../assets/about.jpg';

const Banner = () => {

  
    return (
        <div className="hero pt-0">
            <img src={bannerImg} alt="" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Do you want to travel</h1>
            <p className="mb-5">Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;