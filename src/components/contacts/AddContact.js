import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state; //destructuring

    // new contact object
    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };
    dispatch({ type: 'ADD_CONTACT', payload: newContact });

    //clear the state
    this.setState({ name: '', email: '', phone: '' });
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='card mb-3'>
              <div className='card-header bg-primary text-white'>
                Add Contact
              </div>
              <div>
                <div className='card-body'>
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <TextInputGroup
                      label='Names'
                      name='name'
                      placeholder='Enter Name...'
                      value={name}
                      onChange={this.onChange}
                    />
                    <TextInputGroup
                      label='Emails'
                      name='email'
                      placeholder='Enter Email...'
                      type='email'
                      value={email}
                      onChange={this.onChange}
                    />
                    <TextInputGroup
                      label='Phone'
                      name='phone'
                      placeholder='Enter Phone Number...'
                      value={phone}
                      onChange={this.onChange}
                    />
                    <button
                      type='submit'
                      className='btn btn-outline-primary my-2 my-sm-0 btn-primary'
                    >
                      Add Contact
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
