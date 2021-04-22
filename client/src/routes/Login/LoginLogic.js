import { useEffect, useRef, useState } from "react";
import { isRightEmail } from "../../global/helper";

// login logic
const LoginLogic = ({ history }) => {
   const [userInfo, setUserInfo] = useState({ email: false });
   const inputRef = {
      email: useRef(null),
      password: useRef(null),
   };

   const [isPossibleLogin, setIsPossibleLogin] = useState(false);

   useEffect(() => {
      // 화면 렌더링 후 이메일 input 포커싱
      inputRef.email.current.focus();
   }, []);

   useEffect(() => {
      // 이메일/비밀번호 입력 시, 맞는 형식인지 확인 -> 로그인 가능 여부 판단
      setIsPossibleLogin(isRightEmail(userInfo.email) && userInfo.password && userInfo.password.length > 7);
   }, [userInfo]);

   // 로그인
   const login = () => {
      alert("서버에 연결되지 않았습니다. 메인페이지로 이동합니다.");
      history.push("/");
   };

   return { userInfo, setUserInfo, isPossibleLogin, inputRef, login };
};

export default LoginLogic;
