import { init, exit } from "myPackage";
// import { init, exit } from "./myPackage"; // 타입스크립트 파일에 "./myPackage"파일을 불러온다는 뜻이다.

init({ url: "true" });
exit(1);
