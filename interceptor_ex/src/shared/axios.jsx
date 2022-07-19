import axios from "axios";
const instance = axios.create({
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    console.log(config);
    config.headers["X-AUTH-TOKEN"] = "1234";
    // return에 config값을 보내주지 않으면 request를 보내기 전에 config값이 나가지 않는다.
    return config;
  },
  (err) => {
    // 두 번째 인자는 error와 관련된 것. 오류 난 걸 받아올 수 있다. 오류 요청을 보내기 전에 할 수 있는 어떤 걸 할 수 있다.
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

export default instance;
