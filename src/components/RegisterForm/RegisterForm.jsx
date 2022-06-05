import './RegisterForm.styled';
import { Form, FormLabel, FormInput, FormButton } from './RegisterForm.styled';
import { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
import { authOperations } from '../../redux/auth';
import { useDispatch } from 'react-redux';
// import { authSelectors } from '../../redux/auth';
// import PropTypes from 'prop-types';

export default function RegisterForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(name);
  console.log(email);
  console.log(password);

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const isRegistered = useSelector(authSelectors.getIsRegistered);
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const location = useLocation();
  // console.log(location);
  // useEffect(() => {
  //   console.log(location.pathname);
  //   console.log(isRegistered);
  //   isRegistered ? navigate('/login') : navigate(location.pathname);
  // }, [isRegistered, location.pathname, navigate]);
  // isLoggedIn ? navigate('/contacts') : navigate(location.pathname);
  // }, [isLoggedIn, location.pathname, navigate]);

  const handleChange = event => {
    // console.log(event);
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
    // при сабміті ми диспатчим цю операцію - визивамо функцію authOperations.register і передаємо туди обект нейм, емейл і паспорт
    dispatch(authOperations.register({ name, email, password }));
    // props.onSubmit({ name, email, password });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        *Ім'я :{/* Name : */}
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Введіть своє ім'я"
          // placeholder="Enter your name"
        />
      </FormLabel>
      <br />
      <FormLabel>
        *Поштова скинька :{/* Email : */}
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
          placeholder="name@example.com"
          // placeholder="Enter your email"
        />
      </FormLabel>
      <br />
      <FormLabel>
        *Секретний пароль :{/* Password : */}
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          pattern="{ '9': '[0-9]', 'a': '[A-Za-z]', '*': '[A-Za-z0-9]' }"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Password must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          // autocomplete
          maxlength="14"
          minlength="6"
          // placeholder="Password must be min 6 and max 14 symbols"
          placeholder="Пароль має містити не меньше 6 та не більше 14 символів"
        />
      </FormLabel>
      <FormButton type="submit">Зареєструватися</FormButton>
      {/* <FormButton type="submit">Sign up</FormButton> */}
    </Form>
  );
}
// RegisterForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
