import { useQuery } from "@tanstack/react-query";
import ApexCharts from "react-apexcharts";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import { IHistorical } from "./Chart";

function Price() {
  const coinId = useOutletContext<string>();
  const { isLoading, data } = useQuery<IHistorical[]>(
    [coinId, "chart"],
    () => fetchCoinHistory(coinId),
    {
      refetchOnWindowFocus: false,
      refetchInterval: 10000,
    }
  );
  return (
    <>
      {isLoading && "Loading..."}
      <ApexCharts
        type="candlestick"
        series={[
          {
            data: data?.map((el) => {
              return {
                x: new Date(el.time_close),
                y: [el.open, el.high, el.low, el.close],
              };
            }) as [],
          },
        ]}
        options={{
          chart: { height: 800, width: 880, toolbar: { show: false } },
          xaxis: {
            type: "datetime",
          },
        }}
      />
    </>
  );
}

export default Price;
