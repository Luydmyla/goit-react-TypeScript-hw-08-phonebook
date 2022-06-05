import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  /* border: 2px solid blue; */
  border-radius: 10px;
  padding: 15px;
  text-transform: capitalize;
  box-shadow: 5px 5px 20px 0px #30ebfc;
  background: linear-gradient(lightblue, lightyellow);
`;

export const FormLabel = styled.label`
  /* width: 70%; */
  font-size: 20px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  font-weight: bold;
  color: blue;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  width: 70%;
  margin-left: 20px;
  height: 44px;
  font-size: 14px;
  color: blue;
  border: 2px solid rgb(234, 255, 47);
  :focus-visible {
    border: 2px solid #30ebfc;
    outline: none;
  }
`;

export const FormButton = styled.button`
  margin-top: 44px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  width: max-content;
  /* height: 44px; */
  padding: 5px;
  color: rgb(19, 61, 248);
  background-color: rgb(234, 255, 47);
  border: 3px solid yellow;
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); */
  box-shadow: 5px 5px 10px 1px #30ebfc;
  box-shadow: 5px 5px 20px 5px #30ebfc;
  /* box-shadow: 5px 5px 20px 5px #30ebfc; */
  border-radius: 10px;
  &:hover {
    transform: translateY(-3px);

    /* box-shadow: 5px 5px 10px 1px #30ebfc; */
    /* box-shadow: 5px 5px 20px 5px #30ebfc; */
    /* width: 115px;
    height: 44px; */
    /* background: #fff; */
    /* border: 1px solid #ff6b01; */
    color: #30ebfc;
  }
`;
