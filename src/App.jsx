import  React from 'react';
import styled, {keyframes} from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Wrapper = styled.div`
    display:flex;
  `;

const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    border-radius:100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius:0px;
  }
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  span{
    font-size:30px;
    &:hover{
      font-size:70px;
    }
  }
`;

const Input = styled.input.attrs({required: true})`
    background-color:tomato;
  `;

function App() {
  return (
    <Wrapper as="header">
      <Box>
        <span>🤩</span>
      </Box>
      <Title>안녕하세요!</Title>
    </Wrapper>
      
  );
}

export default App;