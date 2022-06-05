import styled from 'styled-components';
import ballons from './ballons.jpg';
export const Container = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(lightblue, lightyellow);
`;
export const RegisterFormContainer = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 5px 5px 20px 0px #30ebfc;
`;
export const WellcomeContainer = styled.div`
  width: calc(20vw - 0px);
  min-height: calc(50vh - 0px);
  display: flex;
  align-items: center;
  margin-right: 30px;
  border-radius: 10px;
  background-size: cover;
  background-image: url(${ballons});
  background-repeat: no-repeat;
  box-shadow: 5px 5px 20px 0px #30ebfc;
`;
export const Title = styled.h1`
  font-weight: 500;
  font-size: 48px;
  text-align: center;
  color: #30ebfc;
  margin-bottom: 30px;
`;
