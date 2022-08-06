import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const animation = keyframes`
  from{
    transform: rotate(0deg);
  }to{
    transform: rotate(360deg);
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${animation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji}:hover {
      font-size: 98px;
    }
  }
`;

function App() {
  return (
    <div>
      <Wrapper>
        <Box>
          <Emoji>😎</Emoji>
        </Box>
        <Emoji>💤</Emoji>
      </Wrapper>
    </div>
  );
}

export default App;
