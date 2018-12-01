import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  /// Has access to this if this function is a arrow function,
  /// otherwise you have to bind this to the event onClick={this.onShowClick.bind(this)}
  /// or use a constructor to bind it
  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className='card card-body mb-3'>
        <h4>
          {name} <i onClick={this.onShowClick} className='fas fa-sort-down' />
        </h4>
        {showContactInfo ? (
          <ul className='list-group'>
            <li className='list-group-item'>Email: {email}</li>
            <li className='list-group-item'>Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired
};

export default Contact;
