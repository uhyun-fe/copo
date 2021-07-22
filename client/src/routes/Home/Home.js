import React from "react";
import styled from "styled-components";

import MainNav from "../../components/MainNav/MainNav";
import HomeLogic from "./HomeLogic";

const Home = () => {
   const {} = HomeLogic();
   return (
      <View>
         <MainNav />
         <main></main>
      </View>
   );
};

const View = styled.div`
   main {
      padding-top: 60px;
      height: 1000px;
   }
`;

export default Home;
