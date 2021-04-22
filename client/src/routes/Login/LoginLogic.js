import React, { useState } from "react";

const LoginLogic = () => {
   const [userInfo, setUserInfo] = useState({ email: "" });

   return { userInfo };
};

export default LoginLogic;
