import styled from 'styled-components';
import WellcomeToUkraine from './WellcomeToUkraine.jpg';
export const Container = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(lightblue, lightyellow);
`;
export const LoginFormContainer = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 5px 5px 20px 0px #30ebfc;
`;
export const ImgContainer = styled.div`
  width: calc(20vw - 0px);
  min-height: 50vh;
  margin-right: 30px;
  border-radius: 10px;
  background-size: cover;
  background-image: url(${WellcomeToUkraine});
  box-shadow: 5px 5px 20px 0px #30ebfc;
`;
