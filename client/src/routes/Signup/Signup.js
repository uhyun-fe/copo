import React from "react";
import { SignupTopBanner } from "../../components";
import SignupLogic from "./SignupLogic";

const Signup = ({ history }) => {
   const { userInfo } = SignupLogic();
   return (
      <>
         <SignupTopBanner />
         회원가입 페이지
      </>
   );
};

export default Signup;
