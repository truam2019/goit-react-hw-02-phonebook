import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Contacts.css';

export default class Contacts extends Component {
  handleDelete = evt => {
    this.props.deleteContact(evt.target.id);
  };
  render() {
    return (
      <div>
        <ul className="contact-list">
          {this.props.contactsList.map(contact => {
            return (
              <li className="contact-list__item" key={contact.id}>
                <p>
                  {contact.name}: {contact.number}
                </p>
                <button onClick={this.handleDelete} id={contact.id}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
Contacts.propTypes = {
  contactList: PropTypes.array,
  deleteContact: PropTypes.func,
};
