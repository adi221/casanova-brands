import React from 'react';
import PageHero from '../components/PageHero/PageHero';

const About = () => {
  return (
    <div className='about-page'>
      <PageHero title='About' />
      <main style={{ marginTop: '2rem' }}>
        <h1>
          About Casanova<span>Brands</span>Inc.
        </h1>
        <div className='underline'></div>
        <p
          style={{
            display: 'block',
            margin: '1rem auto',
            fontSize: '1.3rem',
            padding: '2rem',
            maxWidth: '1170px',
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nemo
          atque! Non voluptatibus voluptas repudiandae similique a, perspiciatis
          quibusdam. Perspiciatis alias laborum ipsam consectetur voluptates
          aliquid, tempora aspernatur ipsa dolore sit beatae nobis harum in
          autem illum quae perferendis eveniet neque magni odit! Hic, illo.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nemo
          atque! Non voluptatibus voluptas repudiandae similique a, perspiciatis
          quibusdam. Perspiciatis alias laborum ipsam consectetur voluptates
          aliquid, tempora aspernatur ipsa dolore sit beatae nobis harum in
          autem illum quae perferendis eveniet neque magni odit! Hic, illo.
        </p>
      </main>
    </div>
  );
};

export default About;
