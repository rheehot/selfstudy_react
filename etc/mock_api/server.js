// axios interceptors에서 에러를 사용하기 위해서 db.json만든 걸 이용해서 서버를 만들고 서버에서 에러를 만들어보자.

// json-server 설치한 거 그대로 씀
const jsonServer = require("json-server");

// json-server의 create메소드 이용해서 서버 만들고,
const server = jsonServer.create();
// router는 db.json으로 설정해주자.
const router = jsonServer.router("db.json");
// middleware 설정은 json-server에서 기본적으로 제공해주는 친구가 있기 때문에 쓰면 된다.
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get("/geterror", (req, res) => {
  res.status(500).jsonp({ error: "500에러가 발생함!" });
});

server.use((req, res, next) => {
  next();
});

server.use(router);
server.listen(5001, () => {
  console.log("서버가 열렸어용!");
});
