import { useRef } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDocs, where, query, collection } from "firebase/firestore";
import { db } from "../shared/firebase";

const Login = () => {
  const refId = useRef(null);
  const refPw = useRef(null);

  const loginBtn = async () => {
    const request = await signInWithEmailAndPassword(
      getAuth(),
      refId.current.value,
      refPw.current.value
    );

    const user_docs = await getDocs(
      query(
        collection(db, "authex"),
        where("user_id", "==", request.user.email)
      )
    );
    const user_name = [];
    user_docs.forEach((el) => console.log(user_name.push(el.data().name)));
    console.log(user_name);
    return 0;
  };

  return (
    <>
      <div>
        아이디: <input ref={refId} type="email" placeholder="e-mail"></input>{" "}
        <br />
        비밀번호:{" "}
        <input ref={refPw} type="password" placeholder="password"></input>{" "}
        <br />
        <button onClick={loginBtn}>로그인</button>
      </div>
    </>
  );
};

export default Login;
