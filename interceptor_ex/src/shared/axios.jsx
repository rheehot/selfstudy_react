import axios from "axios";
const instance = axios.create({
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    // use의 첫 번째 인자로 callback이 들어가는데 여기서 첫 번째 인자는 config이다.
    // 이 config에는 위에 create할 때 적어주었던 기본 config값들이 들어가 있다.
    console.log(config);
    config.headers["X-AUTH-TOKEN"] = "1234";
    // // return에 config값을 보내주지 않으면 request를 보내기 전에 config값이 나가지 않는다.
    return config;
  },
  // 두 번째 인자로도 callback이 들어가는데 여기는 err를 다룬다. 요청을 보내려고 했는데 그 요청 자체가 오류라면 이렇게 err로 처리된다.
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  // response의 첫 번째 인자는 응답이 성공했을 때이다. request가 첫 번째 인자로 config값이 담긴 callback을 받는 것과는 다르게
  // response는 응답된 response를 가지고 온다.
  (response) => {
    console.log(response);
    return response;
  },
  (err) => {
    console.log(err);
    window.alert("에러남!");
    return Promise.reject(err);
  }
);

export default instance;
