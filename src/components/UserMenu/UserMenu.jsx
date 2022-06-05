import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
// import { useEffect } from 'react';
import defaultAvatar from './default-avatar.jpg';
// import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Avatar, Name, LogOutButton } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  // const navigate = useNavigate();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const location = useLocation();
  // console.log(location);
  const avatar = defaultAvatar;

  // useEffect(() => {
  //   console.log(location.pathname);
  //   console.log(isLoggedIn);
  //   // navigate('/');
  //   isLoggedIn ? navigate('/contacts') : navigate('/login');
  // }, [isLoggedIn, location.pathname, navigate]);

  const handleButton = () => {
    dispatch(authOperations.fetchCurrentUser());
    console.log(authOperations.fetchCurrentUser());
    console.log(isLoggedIn);
    // e.preventDefault();
    //при наттисканні на кнопку ми диспатчим цю операцію - визивамо функцію authOperations.register
    dispatch(authOperations.logOut());
  };
  return (
    <Container>
      <Avatar src={avatar} alt="" width="44" />
      <Name>Ласкаво просимо, Котику {name} </Name>
      {/* <button type="button" onClick={() => dispatch(authOperations.logOut())}></button> */}
      <LogOutButton type="button" onClick={handleButton}>
        {/* Log out */}
        Вихід тут
      </LogOutButton>
    </Container>
  );
}
