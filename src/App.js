import React from 'react';
import './App.css';
import Header from './Components/Header';
import BannerForm from './Components/BannerForm';
import CarouselComponent from './Components/CarouselComponent';
import AccordionComponent from './Components/AccordionComponent';
import Slider from './Slider/slider';
import Faq from './faqs/Faq';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BannerForm />
      <CarouselComponent/>
      <AccordionComponent/>
      <Slider/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
