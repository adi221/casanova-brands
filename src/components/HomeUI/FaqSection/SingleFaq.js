import React, { useState } from 'react';
import { FaChevronDown, FaTimes } from 'react-icons/fa';

const SingleFaq = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <div className='faq'>
      <div className='faq-header'>
        <h3 className='faq-title'>{question}</h3>
        <button onClick={() => setShow(!show)}>
          {show ? (
            <FaTimes className='faq-icon' />
          ) : (
            <FaChevronDown className='faq-icon' />
          )}
        </button>
      </div>
      {show && <div className='faq-text'>{answer}</div>}
    </div>
  );
};

export default SingleFaq;
