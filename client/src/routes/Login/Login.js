import React from "react";
import styled from "styled-components";

import { SignupInput, SignupItemText, SignupTopBanner } from "../../components";
import { FindInfoArea, GoSignupArea, SignupButton } from "../../components/SignupComponents/SignupStyles";
import logo from "../../assets/images/copo.png";

const Login = () => {
   return (
      <>
         <SignupTopBanner />
         <View>
            <SignupItemText text={"이메일"} />
            <SignupInput labelText={"이메일"} onChange={() => console.log("쓰는중...")} />
            <SignupInput labelText={"비밀번호"} onChange={() => console.log("쓰는중...")} />
            <SignupButton>로그인</SignupButton>
            <FindInfoArea>
               <button>아이디 찾기</button>|<button>비밀번호 찾기</button>
            </FindInfoArea>
            <GoSignupArea>
               <p>
                  <img src={logo} alt="copo_logo" />가 처음이신가요?
               </p>
               <button>회원가입하러가기</button>
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
