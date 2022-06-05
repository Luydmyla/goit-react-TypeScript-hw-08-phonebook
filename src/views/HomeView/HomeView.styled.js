import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(lightblue, lightyellow);
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 48px;
  text-align: center;
  color: blue;
  margin-bottom: 20px;
`;
export const Text = styled.p`
  width: 50%;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  color: darkblue;
  padding: 0;
  margin: 0;
`;
