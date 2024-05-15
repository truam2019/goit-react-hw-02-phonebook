import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './ContactForm.css';

export default class ContactForm extends Component {
  handleSubmit = event => {
    // Call the parent callback function
    event.preventDefault();
    this.props.addContact({
      id: nanoid(),
      name: event.target.name.value,
      number: event.target.number.value,
    });
    event.target.reset();
  };
  render() {
    return (
      <div>
        <form className="submit-form" onSubmit={this.handleSubmit}>
          <div className="flex mb-2">
            <label>Name</label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div className="flex mb-2">
            <label htmlFor="number">Number</label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
          <div className="flex mb-2">
            <button className="btn btn-submit">Add Contact</button>
          </div>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func,
};
