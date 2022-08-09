import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Home() {
  const { isLoading, data } = useQuery<ICoin[]>(["allCoins"], fetchCoins, {
    onSuccess(data) {
      console.log("Success fetching Data!");
    },
    onError(err) {
      console.log("Fail fetching Data! ::: ", err);
    },
  });

  return (
    <>
      <Helmet>
        <title>코인</title>
      </Helmet>
      {isLoading ? (
        "loading..."
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((el) => (
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
