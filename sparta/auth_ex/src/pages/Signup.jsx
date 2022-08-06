import { useRef } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../shared/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "../shared/firebase";

const Signup = () => {
  const refId = useRef(null);
  const refPw = useRef(null);
  const refName = useRef(null);
  const refFileLink = useRef(null);

  const signupBtn = async () => {
    const new_user = await createUserWithEmailAndPassword(
      getAuth(app),
      refId.current.value,
      refPw.current.value
    );
    await addDoc(collection(db, "authex"), {
      user_id: new_user.user.email,
      name: refName.current?.value,
      image_url: refFileLink.current?.url,
    });
  };

  const onChangeBtn = async (event) => {
    // uploadBytes를 이용.
    // 첫 번째 요소에 ref를 이용해서 생성된 storage의, 어디에 저장할 건지 설정.
    // 두 번째 요소에 무슨 파일을 올릴 건지 설정.
    const uploaded = await uploadBytes(
      ref(storage, `images/${event.target.files[0].name}`),
      event.target.files[0]
    );
    // 그렇게 하면 metadata랑 ref를 가지고 옴. 여기서 ref를 이용해서 download Url을 가지고 온다.

    const file_url = await getDownloadURL(uploaded.ref);
    refFileLink.current = { url: file_url };
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
        이미지:{" "}
        <input type="file" accept="image/*" onChange={onChangeBtn}></input>
        <br />
        <button onClick={signupBtn}>회원가입</button>
      </div>
    </>
  );
};

export default Signup;
