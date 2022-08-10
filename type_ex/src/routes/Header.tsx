import { Outlet } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";

const Header = () => {
  const isDark = useRecoilValue(isDarkAtom);
  const setIsDarkAtom = useSetRecoilState(isDarkAtom);
  return (
    <Container>
      <HeaderLayout>
        <Title>Co-Inside</Title>
        <LightBtn onClick={() => setIsDarkAtom((prev) => !prev)}>
          {isDark ? "Want to Light?" : `Want to Dark?`}
        </LightBtn>
      </HeaderLayout>
      <Outlet />
    </Container>
  );
};

export default Header;

const LightBtn = styled.button`
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.accentColor};
`;

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
