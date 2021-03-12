import React from 'react';

import Header from '../components/HomeUI/Header';
import ExploreSection from '../components/HomeUI/ExploreSection';
import FaqSection from '../components/HomeUI/FaqSection/FaqSection';
import ReviewSection from '../components/HomeUI/ReviewSection/ReviewSection';
import Contact from '../components/HomeUI/Contact';

const Home = () => {
  return (
    <>
      <Header />
      <ExploreSection />
      <FaqSection />
      <ReviewSection />
      <Contact />
    </>
  );
};

export default Home;
