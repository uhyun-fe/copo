import { useState } from "react";

// signup logic
const SignupLogic = () => {
   const [userInfo, setUserInfo] = useState(false);

   return { userInfo };
};

export default SignupLogic;
