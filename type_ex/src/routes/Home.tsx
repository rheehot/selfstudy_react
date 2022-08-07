import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 3rem;
`;

const Container = styled.div`
  padding: 0px 2rem;
  max-width: 50rem;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 1rem;
  border-radius: 1rem;
  a {
    padding: 2rem;
    transition: color 0.2s linear;
    display: block;
    font-size: 2rem;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Home() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  return (
    <>
      <Container>
        <Header>
          <Title>Co-Inside</Title>
        </Header>
        <CoinsList>
          {coins.map((el) => (
            <Coin key={el.id}>
              <Link to={`/${el.id}`}>{el.name} &rarr;</Link>
            </Coin>
          ))}
        </CoinsList>
      </Container>
    </>
  );
}

export default Home;
