import React from 'react';
import Header from './components/Header';
// import TransportList from '../components/TransportList';
import Slider from './components/Slider';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

// Import your components here

const Page = () => {
  return (
    <div>
      <Header />
      <Slider />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Page;