import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onSubmit = e => {
    e.preventDefault();
    console.info(this.state);
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className='card mb-3'>
        <div className='card-header bg-primary text-white'>Add Contact</div>
        <div>
          <div className='card-body'>
            <form onSubmit={this.onSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  name='name'
                  className='form-control lg'
                  placeholder='Enter Name...'
                  value={name}
                  onChange={this.onChange}
                />
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  className='form-control lg'
                  placeholder='Enter Email...'
                  value={email}
                  onChange={this.onChange}
                />
                <label htmlFor='name'>Phone</label>
                <input
                  type='phone'
                  name='phone'
                  className='form-control lg'
                  placeholder='Enter Phone...'
                  value={phone}
                  onChange={this.onChange}
                />
              </div>
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
  }
}

export default AddContact;
