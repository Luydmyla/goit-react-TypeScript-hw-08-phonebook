import React from 'react';
import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { authOperations } from '../../redux/auth';
// import { useDispatch } from 'react-redux';
import {
  Form,
  FormLabel,
  FormInput,
  FormButton,
  Title,
} from './ContactEditor.styled';
import { useUpdateContactsMutation } from 'redux/itemsSlice';
import PropTypes from 'prop-types';

export default function ContactEditor({ onClose, data }) {
  console.log(data);
  const [name, setName] = useState(data.name);
  const [number, setNumber] = useState(data.number);
  // console.log(name);
  // console.log(number);

  const [updateContacts] = useUpdateContactsMutation();
  // console.log(updateContact);
  // console.log(useUpdateContactsMutation());
  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name, number);
    const contactId = data.id;
    console.log(contactId);
    // if (name !== '' && number !== '') {
    updateContacts({ name, number, contactId });
    // resetForm();
    // закивамо модалку
    onClose();
    return;
    // }
    // alert('Введіть імя та номер');
  };
  // const resetForm = () => {
  //   setName('');
  //   setNumber('');
  // };

  return (
    <>
      {/* <title>Edit Contact {name}</title> */}

      <Form onSubmit={handleSubmit}>
        <Title>Редагуємо контакт котика {data.name}</Title>
        <FormLabel>
          Ім'я :
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <br />
        <FormLabel>
          Номер для зв'язку:
          <FormInput
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title=" number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        {/* <FormButton type="submit">Add contact</FormButton> */}
        <FormButton type="submit">Зберегти контакт</FormButton>
      </Form>
    </>
  );
}
ContactEditor.propTypes = {
  onSave: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};
