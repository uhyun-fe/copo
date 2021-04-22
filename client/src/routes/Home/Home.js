import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
   return (
      <div>
         메인 페이지
         <br />
         <br />
         <Link to="/login">로그인</Link>
      </div>
   );
};

export default Home;
