import { LinkElem } from './Navigation.styled.js';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    // якщо не писати всередині ретурн, то використовуемо круглі скобки, бо це те що повертає стрілочна функція.
    <nav>
      <LinkElem to="/">Домашня </LinkElem>
      {isLoggedIn && <LinkElem to="/contacts">КотоКонтакти</LinkElem>}
      {/* {isLoggedIn ? (
        <LinkElem to="/contacts">Contacts</LinkElem>
      ) : (
        <LinkElem to="/">Home</LinkElem>
      )} */}
    </nav>
  );
}

export default Navigation;
