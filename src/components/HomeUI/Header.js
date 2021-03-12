import { social } from '../../data/data';
import hero from '../../images/hero.jpg';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <Wrapper
      className='hero'
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${hero})`,
      }}
    >
      <div className='hero-info'>
        <div className='underline'></div>
        <h1>We're Casanova</h1>
        <h2>The Best Brands Agency in The World</h2>
        <Link
          activeClass='active'
          to='contact'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='btn'
          style={{ marginBottom: `1.2rem`, display: 'inline-block' }}
        >
          Contact Us
        </Link>
        <ul className='icons'>
          {social.map(link => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a style={{ fontSize: `1.9rem` }} href={url}>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  .underline {
    margin-bottom: 0;
    margin-left: 0.2rem;
    width: 10rem;
  }

  @media (max-width: 800px) {
    .underline {
      display: none;
    }

    h1 {
      text-align: left;
    }
  }
`;

export default Hero;
