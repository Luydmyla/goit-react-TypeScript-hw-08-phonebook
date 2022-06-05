import styled from 'styled-components';
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: stretch;
  /* width: 600px; */
  /* width: 100%; */
  font-size: 20px;
  padding: 10px;
  margin-bottom: 15px;
  margin-top: 0;
`;
export const ContactListItem = styled.li`
  display: flex;
  padding: 10px;
  /* align-items: baseline; */
  align-items: center;
  justify-content: space-between;
`;

export const Contact = styled.p`
  /* width: 70%; */
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
`;

export const ContactListName = styled.span`
  color: darkblue;
  display: flex;
`;

export const ContactListNumber = styled.span`
  color: darkcyan;
  display: flex;
`;

export const ContactListButton = styled.button`
  /* display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  width: max-content;
  /* height: 44px; */
  /* padding: 5px; */
  margin-left: 10px;
  height: 44px;
  box-shadow: 5px 5px 10px 1px #30ebfc;
  border-radius: 10px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 16px;
  transition: all 0.2s;
  color: blue;
  background-color: yellow;
  /* background-color: transparent; */
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
