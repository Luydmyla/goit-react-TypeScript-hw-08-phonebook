import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkElem = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  font-weight: 500;
  color: #2a363b;
  font-size: 22px;
  margin-right: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 1px #30ebfc;
  background-color: yellow;
  /* background: linear-gradient(lightblue, lightyellow); */
  /* background: linear-gradient(lightyellow, lightblue); */
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    box-shadow: 5px 5px 10px 1px #30ebfc;
    /* width: 115px;
    height: 44px; */
    /* background: #fff; */
    /* border: 1px solid #ff6b01; */
    color: #30ebfc;
  }

  &.active {
    /* composes: link; */
    color: #2314f7;
  }
`;
