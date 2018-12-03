import React from 'react';
import PropTypes from 'prop-types';
/// Date stuff
const d = new Date();
const $months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const $day = padDate(d); //d.getDate() < 10 ? '0' + d.getDate() : d.getDate(); // add leading zero
const $time = d.toLocaleTimeString();
const _month = $months[d.getMonth()];
const _day = $day;
const $d = _month + ' ' + _day + ', ' + d.getFullYear() + ' - ' + $time;
/// End of date stuff

const Header = props => {
  //d = d.toDateString;
  const { branding } = props;
  return (
    <div>
      {/* <h1 style={headingStyle}>{branding}</h1> */}
      <nav className='navbar navbar-expand-sm navbar-dark bg-primary mb-3 mt-3 py-0'>
        <div className='container'>
          <div>
            <ul className='navbar-nav'>
              <li className='nav-item text-white-50'>{$d}</li>
            </ul>
          </div>
          <a href='/' className='navbar-brand ml-auto'>
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

/// Helper functions
function padDate($d) {
  return $d.getDate() < 10 ? '0' + $d.getDate() : $d.getDate();
}

export default Header;
