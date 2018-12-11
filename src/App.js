import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch}from 'react-router-dom';

/// Bring in custom components
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import about from './components/pages/about';
import AddContact from './components/contacts/AddContact';

import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <div className='App'>
          <Header branding='My Contact Manager' />
          <div className='container'>
            <Switch>
              <Route exact path="/" component={Contacts}/>
              <Route exact path="/contact/add" component={AddContact}/>
              <Route exact path="/about" component={about}/>

            </Switch>
          </div>
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
