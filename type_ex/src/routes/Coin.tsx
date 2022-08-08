import { useQueries, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router";
import { useLocation, Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinInfo, fetchCoinTickers } from "../api";

interface RouteState {
  state: {
    name: string;
  };
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Coin() {
  // useParams에 default타입이 string|undefined라서 안해줘 됨, 하지만 해줄 거면 useState에 하는 것을 참고해서 해보자.
  // const [ex, setEx] = useState<interfaceObject[]>([])
  // const [ex, setEx] = useParams<RouteParams>([])
  const { coinId } = useParams();
  const { state } = useLocation() as RouteState;
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");

  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    [coinId, "info"],
    () => fetchCoinInfo(coinId),
    {
      onSuccess(data) {
        console.log("info ::: ", data);
      },
      onError(err) {
        console.log(err);
      },
    }
  );
  const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>(
    [coinId, "price"],
    () => fetchCoinTickers(coinId),
    {
      onSuccess(data) {
        console.log("price ::: ", data);
      },
      onError(err) {
        console.log(err);
      },
    }
  );
  const loading = infoLoading || priceLoading;
  /* const [getInfo, getPrice] = useQueries({
    queries: [
      {
        queryKey: [`${coinId}/Info`],
        queryFn: () => fetchCoinInfo(`${coinId}`),
      },
      {
        queryKey: [`${coinId}/Price`],
        queryFn: () => fetchCoinTickers(`${coinId}`),
      },
    ],
  });
  const { isLoading: isInfoLoading, data } = getInfo;
  const { isLoading: isPriceLoading, data } = getPrice; */
  /* const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
    })();
  }, []); */

  return (
    <>
      <h1>
        coin{" "}
        {state?.name ? state.name : loading ? "...Loading" : infoData?.name}
      </h1>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>{infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>{infoData?.open_source ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{priceData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{priceData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to="chart">Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to="price">Price</Link>
            </Tab>
          </Tabs>
          <Outlet />
        </>
      )}
    </>
  );
}

export default Coin;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 2rem 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;
