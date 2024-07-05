import React, { useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css'; 
import '../Slider/Slider.css';

const HeroSlider = () => {
  useEffect(() => {
    // Flickity options
    const options = {
      accessibility: true,
      autoPlay: true,
      pauseAutoPlayOnHover: false,
      prevNextButtons: true,
      pageDots: true,
      setGallerySize: false,
      arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 60,
        y2: 45,
        x3: 15
      }
    };

    // Initialize Flickity after component mounts
    const flkty = new Flickity('[data-carousel]', options);

    // Clean up on unmount
    return () => flkty.destroy();
  }, []);

  return (
    <div className="hero-slider" data-carousel>
      <div className="carousel-cell" style={{ backgroundImage: 'url(https://content.app-sources.com/s/691478243941350501/uploads/Bg_Image/2190-7412358.jpg)' }}>
        <div className="overlay"></div>
        <div className="inner">
          <h2 className="title">Premier<span> Business</span> Solutions</h2>
          <p className="title-content">Driving innovation, enhancing efficiency, and delivering unmatched success<br />for your business and corporate needs.</p>
          <div className="btnnn-wrapper">
            <a href="#;" className="btn consult">Drive Your Business Excellence</a>
          </div>
        </div>
      </div>
      <div className="carousel-cell" style={{ backgroundImage: 'url(https://content.app-sources.com/s/691478243941350501/uploads/Images/hero-img-6787203.jpg)' }}>
        <div className="overlay"></div>
        <div className="inner">
          <h2 className="title">Shape Your <span>Executive</span> Story</h2>
          <p className="title-content">Shape Your Executive Story by Embracing Challenges, Leading with Vision, and Achieving Remarkable Success.</p>
          <div className="btnnn-wrapper">
            <a href="#;" className="btn consult">View Jobs</a>
            <a href="#;" className="btn video">Submit Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
