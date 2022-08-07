import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 1rem;
  border-radius: 1rem;
  a {
    padding: 2rem;
    transition: color 0.2s linear;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Img = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);
  console.log(coins);
  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <CoinsList>
          {coins.map((el) => (
            <Coin key={el.id}>
              <Link to={`/${el.id}`} state={{ name: el.name }}>
                <Img
                  alt=""
                  src={`https://cryptocurrencyliveprices.com/img/${el.id}.png`}
                />
                {el.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </>
  );
}

export default Home;
