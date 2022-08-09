// fetcher
export function fetchCoins() {
  return fetch(`https://api.coinpaprika.com/v1/coins`).then((res) =>
    res.json()
  );
}

const BASE_URL = `https://api.coinpaprika.com/v1`;
export function fetchCoinInfo(coinId: string | undefined) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((res) => res.json());
}
export function fetchCoinTickers(coinId: string | undefined) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((res) => res.json());
}

export function fetchCoinHistory(coinId: string) {
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  ).then((res) => res.json());
}
