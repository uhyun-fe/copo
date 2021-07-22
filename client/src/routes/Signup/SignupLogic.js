import { useEffect, useState } from "react";

// signup logic
const SignupLogic = () => {
   const [userInfo, setUserInfo] = useState(false);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return { userInfo };
};

export default SignupLogic;
