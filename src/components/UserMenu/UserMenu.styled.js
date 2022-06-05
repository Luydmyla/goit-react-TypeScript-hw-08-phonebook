import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const Avatar = styled.img`
  margin-right: 4px;
`;
export const Name = styled.span`
  font-size: 22px;
  font-weight: 700;
  margin-right: 12px;
  color: blue;
`;
export const LogOutButton = styled.button`
  width: 112px;
  height: 44px;
  /* border: 2px solid blue; */
  box-shadow: 5px 5px 10px 1px #30ebfc;
  /* background: linear-gradient(lightyellow, lightblue); */
  border-radius: 10px;
  border: none;
  /* margin-top: 21px; */
  /* font-family: Roboto; */
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 16px;
  transition: all 0.2s;
  /* text-transform: uppercase; */
  /* color: #2a363b; */
  color: darkblue;
  background-color: yellow;
  /* background-color: transparent; */
  cursor: pointer;
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
export const AnimatedButton = styled.button`
  // animation: moveInBottom 5s ease-out;
  animation-fill-mode: backwards;
`;
// @keyframes moveInBottom {
//   0% {
//     opacity: 0;
//     transform: translateY(30px);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0px);
//   }
// }
// .pressed {
//   background-color: #ff6b01;
//   // background-color: #f1a066;
//   border: none;
//   color: $white-text-color;
// #30ebfc
// }
