import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import { people } from '../../../data/data';

const ReviewSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  const prevIndex = () => {
    setIndex(index => {
      let newIndex = index - 1;
      return newIndex;
    });
  };

  const nextIndex = () => {
    setIndex(index => {
      let newIndex = index + 1;
      return newIndex;
    });
  };

  return (
    <section className='reviews-section'>
      <h1>Our Reviews</h1>
      <div className='underline'></div>
      <div className='reviews-container'>
        {people.map((person, personIndex) => {
          const { id, image, name, location, header, text } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }

          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article key={id} className={`review ${position}`}>
              <h5 className='review-header'>{header}</h5>
              <blockquote className='review-text'>{text}</blockquote>
              <address className='review-author'>
                <img src={image} alt={name} className='review-photo' />
                <h6 className='review-name'>{name}</h6>
                <p className='review-location'>{location}</p>
                <FaQuoteRight className='quote-icon' />
              </address>
              <div className='dots'>
                {people.map((_, personIndex) => {
                  return (
                    <div
                      key={personIndex}
                      className={`dot ${index === personIndex && 'active'}`}
                      onClick={() => setIndex(personIndex)}
                    ></div>
                  );
                })}
              </div>
            </article>
          );
        })}
        <button className='prev' onClick={prevIndex}>
          <FiChevronLeft className='review-icon' />
        </button>
        <button className='next' onClick={nextIndex}>
          <FiChevronRight className='review-icon' />
        </button>
      </div>
    </section>
  );
};

export default ReviewSection;
