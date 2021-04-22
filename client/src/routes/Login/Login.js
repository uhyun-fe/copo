import React from "react";
import styled from "styled-components";

import { SignupInput, SignupItemText, SignupTopBanner } from "../../components";
import { FindInfoArea, GoSignupArea, SignupButton } from "../../components/SignupComponents/SignupStyles";
import logo from "../../assets/images/copo.png";
import LoginLogic from "./LoginLogic";
import { isRightEmail } from "../../global/helper";
import { Link } from "react-router-dom";

const Login = ({ history }) => {
   const { userInfo, setUserInfo, isPossibleLogin, inputRef, login } = LoginLogic({ history });
   return (
      <>
         <SignupTopBanner />
         <View>
            <SignupItemText
               text={!isRightEmail(userInfo.email) ? "이메일" : !isPossibleLogin ? "비밀번호" : "로그인버튼"}
               is_done={isPossibleLogin}
            />
            <SignupInput
               labelText={"이메일"}
               inputRef={inputRef.email}
               onChange={({ target: { value: email } }) => setUserInfo({ ...userInfo, email })}
            />
            <SignupInput
               labelText={"비밀번호"}
               inputRef={inputRef.password}
               onChange={({ target: { value: password } }) => setUserInfo({ ...userInfo, password })}
            />
            <SignupButton className={isPossibleLogin ? "possible" : "impossible"} onClick={login} disabled={isPossibleLogin ? false : true}>
               로그인
            </SignupButton>
            <FindInfoArea>
               <button>아이디 찾기</button>|<button>비밀번호 찾기</button>
            </FindInfoArea>
            <GoSignupArea>
               <p>
                  <img src={logo} alt="copo_logo" />가 처음이신가요?
               </p>
               <Link to="/signup">
                  <button>회원가입하러가기</button>
               </Link>
            </GoSignupArea>
         </View>
      </>
   );
};

const View = styled.main`
   margin: 0 auto;
   width: 90%;
   max-width: 380px;
`;

export default Login;
