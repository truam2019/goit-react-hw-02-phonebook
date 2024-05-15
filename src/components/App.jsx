import React, { Component } from 'react';
import Contacts from './contacts/Contacts';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import './App.css';
import { contactsDb } from './contacts.db';

export class App extends Component {
  state = {
    contacts: [...contactsDb],
    filter: '',
  };
  addContact = contact => {
    const result = contactsDb.filter(word =>
      word.name.toLowerCase().includes(contact.name.toLowerCase())
    );
    if (result.length > 0) return alert(`${result[0].name} already exists`);
    contactsDb.push(contact);
    this.setState({
      contacts: [...contactsDb],
    });
  };

  findContact = param => {
    const result = contactsDb.filter(word =>
      word.name.toLowerCase().includes(param)
    );
    if (param === '') return this.setState({ contacts: contactsDb });
    this.setState({ contacts: result });
  };
  deleteContact = id => {
    const result = contactsDb.findIndex(contact => contact.id === id);
    contactsDb.splice(result, 1);
    this.setState({
      contacts: [...contactsDb],
    });
  };
  render() {
    return (
      <div className="app">
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filterContacts={this.findContact} />
        <Contacts
          contactsList={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
