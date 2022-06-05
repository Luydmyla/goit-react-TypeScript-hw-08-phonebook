import styled from 'styled-components';

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: none;
  font-size: 24px;
  font-weight: 700;
  color: blue;
  margin-bottom: 10px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* width: fit-content; */
  width: 600px;
  height: fit-content;
  border: 4px solid blue;
  padding: 15px;
  /* text-transform: capitalize; */
`;

export const FormLabel = styled.label`
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: blue;
`;

export const FormInput = styled.input`
  width: 70%;
  margin-left: 20px;
  height: 44px;
  font-size: 22px;
  color: blue;
  border: 2px solid rgb(234, 255, 47);
`;

export const FormButton = styled.button`
  padding: 5px;
  height: 44px;
  box-shadow: 5px 5px 10px 1px #30ebfc;
  border-radius: 10px;
  border: none;
  margin-top: 21px;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 16px;
  transition: all 0.2s;
  color: blue;
  background-color: yellow;
  cursor: pointer;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    box-shadow: 5px 5px 10px 1px #30ebfc;
    color: #30ebfc;
  }
  &::after {
    content: '';
    height: 100%;
    width: 100%;
    border-radius: 10px;
    top: 0;
    left: 0;
  }
  &:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    // opacity: 0;
  }
  :active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    box-shadow: 5px 5px 10px 1px #30ebfc;
  }
`;
