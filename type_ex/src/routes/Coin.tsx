import { useParams } from "react-router";

function Coin() {
  // useParams에 default타입이 string|undefined라서 안해줘 됨
  const { coinId } = useParams();
  console.log(coinId);
  return <h1>Coin: {coinId}</h1>;
}

export default Coin;
