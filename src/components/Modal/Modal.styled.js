import styled from 'styled-components';
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  transform: translate(-50%, -50%);
  /* max-width: 600px; */
  height: fit-content;
  width: fit-content;
  /* width: 50vw; */
  padding: 50px;
  background-color: #fff;
  background: linear-gradient(lightblue, lightyellow);

  border-radius: 10px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;
