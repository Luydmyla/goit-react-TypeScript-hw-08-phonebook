import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Title, Text } from './HomeView.styled';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import cat from './cat.jpg';
export default function HomeView() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Container>
      <img
        src={cat}
        // src="../../views/HomeView/cat.jpg"
        alt="wellcome"
        // width="282"
        // height="282"
        width="30%"
        height="30%"
      />
      <Title>
        <span role="img" aria-label="Иконка приветствия">
          💙💛
        </span>
        Раді вітати вас на нашому сайті!
      </Title>
      {!isLoggedIn && (
        <Text>
          Для подальшого користування просимо вас{' '}
          <Link to="/login">увійти під своїм іменем.</Link>
          <br />
          Якщо ви новий користувач -
          <Link to="/register">перейдіть на сторінку реєстрації.</Link>
        </Text>
      )}
    </Container>
  );
}
