// import './Form.styled.js';
import {
  Form,
  FormLabel,
  FormInput,
  FormButton,
} from './AddContactForm.styled';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddContactForm(props) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // console.log(name);
  // console.log(number);
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
    props.onSubmit({ name, number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Ім'я котика:
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
      <FormButton type="submit">Додати котика</FormButton>
    </Form>
  );
}
AddContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
