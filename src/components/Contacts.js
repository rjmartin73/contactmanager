import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Karen Smith',
        email: 'ksmith@gmail.com',
        phone: '555-555-5858'
      },
      {
        id: 3,
        name: 'henry Johnson',
        email: 'henry@gmail.com',
        phone: '555-555-1688'
      }
    ]
  };

  deleteContact = id => {
    console.log(id);
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      // used this instead of <div>
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
            // email={contact.email}
            // phone={contact.phone}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
