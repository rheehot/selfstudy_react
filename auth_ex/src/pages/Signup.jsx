import { useRef } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../shared/firebase";

const Signup = () => {
  const refId = useRef(null);
  const refPw = useRef(null);
  const refName = useRef(null);

  const signupBtn = async () => {
    console.log(refId.current.value);
    console.log(refPw.current.value);
    console.log(refId.current.value);
    const new_user = await createUserWithEmailAndPassword(
      getAuth(),
      refId.current.value,
      refPw.current.value
    );
    await addDoc(collection(db, "authex"), {
      user_id: new_user.user.email,
      name: refName.current.value,
    });
  };
  return (
    <>
      <div>
        아이디: <input ref={refId} type="email" placeholder="e-mail"></input>{" "}
        <br />
        비밀번호:{" "}
        <input ref={refPw} type="password" placeholder="password"></input>{" "}
        <br />
        이름: <input ref={refName} type="text" placeholder="name"></input>{" "}
        <br />
        <button onClick={signupBtn}>회원가입</button>
      </div>
    </>
  );
};

export default Signup;
