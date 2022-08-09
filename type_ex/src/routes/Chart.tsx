import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router";
import { fetchCoinHistory } from "../api";
import ApaxChart from "react-apexcharts";

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

function Chart() {
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
      {isLoading ? (
        "Loading..."
      ) : (
        <ApaxChart
          type="line"
          series={[
            {
              name: coinId,
              data: data?.map((el) => el.close) as [],
            },
          ]}
          options={{
            chart: { height: 700, width: 770, toolbar: { show: false } },
            theme: { mode: "dark" },
            grid: {
              show: false,
            },
            stroke: {
              curve: "smooth",
              width: 3,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: { show: false },
              type: "datetime",
              categories: data?.map((el) => el.time_close),
              axisTicks: { show: false },
              axisBorder: { show: false },
            },
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["blue"],
                stops: [0, 100],
              },
            },
            colors: ["red"],
          }}
        />
      )}
    </>
  );
}

export default Chart;
