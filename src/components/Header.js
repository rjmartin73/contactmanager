import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const { branding } = props;
  return (
    <div>
      {/* <h1 style={headingStyle}>{branding}</h1> */}
      <nav className='navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0'>
        <div className='container'>
          <a href='/' className='navbar-brand'>
            {branding}
          </a>
          <div>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <a href='/' className='nav-link'>
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

Header.defaultProps = {
  branding: 'Contact Manger'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

// const headingStyle = {
//   color: '#bada55',
//   fontSize: '50px'
// };

export default Header;
