import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 2rem;
  max-width: 50rem;
  margin: 0 auto;
`;

const HeaderLayout = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 3rem;
`;

const Header = () => {
  return (
    <Container>
      <HeaderLayout>
        <Title>Co-Inside</Title>
      </HeaderLayout>
      <Outlet />
    </Container>
  );
};

export default Header;
