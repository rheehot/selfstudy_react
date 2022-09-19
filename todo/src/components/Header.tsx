import { Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";

const Header = () => {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  return (
    <>
      <Layout>
        <MainHeader>
          <h1>
            todo List{" "}
            <span onClick={() => setIsDark((prev) => !prev)}>
              {isDark ? "Wanna Light?" : "Wanna Dark"}
            </span>
          </h1>
        </MainHeader>
        <Outlet />
      </Layout>
    </>
  );
};

export default Header;

const Layout = styled.div`
  padding: 4rem 3rem;
`;

const MainHeader = styled.div`
  width: 100vw;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: ${(props) => props.theme.accentColor};
    font-size: 3rem;
    span {
      font-size: 1rem;
      background-color: ${(props) => props.theme.textColor};
      border-radius: 0.3rem;
      cursor: pointer;
    }
  }
`;
