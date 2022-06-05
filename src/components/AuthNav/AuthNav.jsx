import React from 'react';
// import { NavLink } from 'react-router-dom';
import { AuthNavLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <AuthNavLink to="/register">Зареєструватися</AuthNavLink>
      <AuthNavLink to="/login">Увійти тут</AuthNavLink>
    </div>
  );
}
