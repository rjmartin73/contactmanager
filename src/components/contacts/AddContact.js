import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    suite: '',
    errors: {}
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone, suite } = this.state; //destructuring

    //  Check for errors

    if (name === '') {
      this.setState({
        errors: {
          name: 'Name is required'
        }
      });
      return;
    }
    if (email === '') {
      this.setState({
        errors: {
          email: 'Email is required'
        }
      });
      return;
    }
    if (phone === '') {
      this.setState({
        errors: {
          phone: 'Phone is required'
        }
      });
      return;
    }

    // new contact object
    const newContact = { id: uuid(), name, email, phone, suite };
    dispatch({
      type: 'ADD_CONTACT',
      payload: newContact
    });

    //clear the state
    this.setState({
      name: '',
      email: '',
      phone: '',
      suite: '',
      errors: {}
    });
    this.props.history.push('/');
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    const { name, email, phone, suite, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='card mb-3 bg-white'>
              <div className='card-header bg-primary text-white'>
                Add Contact
              </div>
              <div>
                <div className='card-body border border-primary'>
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <TextInputGroup
                      label='Names'
                      name='name'
                      placeholder='Enter Name...'
                      value={name}
                      onChange={this.onChange}
                      error={errors.name}
                    />
                    <TextInputGroup
                      label='Emails'
                      name='email'
                      placeholder='Enter Email...'
                      type='email'
                      value={email}
                      onChange={this.onChange}
                      error={errors.email}
                    />
                    <TextInputGroup
                      label='Phone'
                      name='phone'
                      placeholder='Enter Phone Number...'
                      value={phone}
                      onChange={this.onChange}
                      error={errors.phone}
                    />
                    <button
                      type='submit'
                      className='btn btn-sm btn-outline-primary my-2 my-sm-0 btn-primary '
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
