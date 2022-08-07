import { useParams } from "react-router";
import { useLocation } from "react-router-dom";

interface RouteState {
  state: {
    name: string;
  };
}

function Coin() {
  // useParams에 default타입이 string|undefined라서 안해줘 됨, 하지만 해줄 거면 useState에 하는 것을 참고해서 해보자.
  // const [ex, setEx] = useState<interfaceObject[]>([])
  // const [ex, setEx] = useParams<RouteParams>([])
  const { state } = useLocation() as RouteState;
  console.log(state);
  return (
    <>
      <h1>coin {state.name || "...Loading"}</h1>
    </>
  );
}

export default Coin;
