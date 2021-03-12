import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper id='contact'>
      <div className='section-center'>
        <h1>Contact Us</h1>
        <div className='underline'></div>
        <form onSubmit={e => e.preventDefault()}>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
          <input type='email' placeholder='Email' />
          <input type='phone' placeholder='Phone' />
          <textarea placeholder='Message...' rows='10'></textarea>
          <button className='btn'>Submit</button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #f0f0f0;

  form {
    margin: 2rem auto 0 auto;
    padding: 3rem;
    width: 90vw;
    max-width: 700px;
    background-color: #102631;
  }

  input {
    height: 40px;
    width: 100%;
    padding: 20px 10px;
    outline: none;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    margin-bottom: 0.5rem;
  }

  textarea {
    margin-top: 0.5rem;
    width: 100%;
    background-color: #fff;
    padding: 10px;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  textarea::placeholder {
    font-size: 16px;
    font-family: inherit;
  }

  button {
    display: block;
    width: 100%;
    text-align: center;
  }
`;

export default Contact;
