import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Header: React.FC = () => {
  useEffect(() => {
    // GSAP animation for the navbar
    const tl = gsap.timeline();
    tl.fromTo(
      '.navbar-item', // Targeting elements with this class
      {
        y: -100, // Initial position (from)
        opacity: 0, // Initial opacity (from)
      },
      {
        y: 0, // Final position (to)
        opacity: 1, // Final opacity (to)
        duration: 1,
        ease: 'power2.inOut',
        stagger: 0.5, // Stagger for smooth effect
      },
    );

    return () => {
      // Cleanup GSAP animations
      tl.kill();
    };
  }, []);

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle} className='navbar-item'>
          <Link
            to='/'
            style={linkStyle}
            onMouseEnter={e => (e.currentTarget.style.color = '#fde047')}
            onMouseLeave={e => (e.currentTarget.style.color = 'white')}
          >
            Home
          </Link>
        </li>
        <li style={liStyle} className='navbar-item'>
          <Link
            to='/donate'
            style={linkStyle}
            onMouseEnter={e => (e.currentTarget.style.color = '#fde047')}
            onMouseLeave={e => (e.currentTarget.style.color = 'white')}
          >
            Donate
          </Link>
        </li>
        <li style={liStyle} className='navbar-item'>
          <Link
            to='/about'
            style={linkStyle}
            onMouseEnter={e => (e.currentTarget.style.color = '#fde047')}
            onMouseLeave={e => (e.currentTarget.style.color = 'white')}
          >
            About Us
          </Link>
        </li>
        <li style={liStyle} className='navbar-item'>
          <Link
            to='/contact'
            style={linkStyle}
            onMouseEnter={e => (e.currentTarget.style.color = '#fde047')}
            onMouseLeave={e => (e.currentTarget.style.color = 'white')}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// Inline styles for the nav bar
const navStyle: React.CSSProperties = {
  backgroundColor: '#2b303c',
  padding: '10px',
};

const ulStyle: React.CSSProperties = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'space-around',
};

const liStyle: React.CSSProperties = {
  margin: '0 10px',
};

const linkStyle: React.CSSProperties = {
  color: 'white',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
};

export default Header;
