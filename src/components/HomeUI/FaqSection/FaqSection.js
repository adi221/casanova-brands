import React from 'react';
import { faq } from '../../../data/data';
import SingleFaq from './SingleFaq';

const FaqSection = () => {
  return (
    <section className='faq-section'>
      <h1>Frequently Asked Questions</h1>
      <div className='underline'></div>
      <div className='faq-container'>
        {faq.map(oneFaq => {
          return <SingleFaq key={oneFaq.id} {...oneFaq} />;
        })}
      </div>
    </section>
  );
};

export default FaqSection;
