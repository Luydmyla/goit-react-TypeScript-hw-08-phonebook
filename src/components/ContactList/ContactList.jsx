import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.styled.js';
import {
  List,
  ContactListItem,
  ContactListNumber,
  ContactListName,
  Contact,
  ContactListButton,
} from './ContactList.styled';

// const ContactList = ({ contacts, onDeleteContactList }) => (
const ContactList = ({ contacts, onDeleteContact, onEditContact }) => (
  <List>
    {contacts.map(({ name, number, id }) => (
      <ContactListItem key={id}>
        <Contact>
          <ContactListName> Котик {name} : </ContactListName>
          <ContactListNumber> {number} </ContactListNumber>
        </Contact>
        <ContactListButton type="button" onClick={() => onDeleteContact(id)}>
          Видалити
          {/* Delete */}
        </ContactListButton>
        <ContactListButton
          type="button"
          // contacts={contacts}
          onClick={() => onEditContact({ name, number, id })}
        >
          Редагувати
        </ContactListButton>
      </ContactListItem>
    ))}
  </List>
);
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
