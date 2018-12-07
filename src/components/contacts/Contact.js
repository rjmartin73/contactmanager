import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  /// Has access to 'this' if this function is an arrow function,
  /// otherwise you have to bind this to the event onClick={this.onShowClick.bind(this)}
  /// or use a constructor to bind it
  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  // delete handler
  onDeleteClick = (id, dispatch) => {
    //console.error('It works!');
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };
  render() {
    const { name, email, phone, id } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='card card-body mb-3'>
              <h5 className='card-title'>
                {name}{' '}
                <i
                  onClick={this.onShowClick}
                  className='fas fa-sort-down'
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className='fas fa-times'
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h5>
              {showContactInfo ? (
                <ul className='list-group'>
                  <li className='list-group-item'>Email: {email}</li>
                  <li className='list-group-item'>Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired
};

export default Contact;
