import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../../../assets/images/copo.png";
import banner from "../../../assets/images/login_banner.png";

const SignupTopBanner = () => {
   return (
      <View>
         <img src={banner} alt="copo logo" />
         <span>
            <Link to="/">
               <img src={logo} alt="copo logo" />
            </Link>
         </span>
      </View>
   );
};

const View = styled.div`
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 20px;
   height: 230px;
   overflow: hidden;
   > img {
      position: absolute;
      width: 105%;
      height: 100%;
   }
   span {
      position: relative;
      top: 20px;
      display: block;
      width: 135px;
      height: 52px;
      img {
         width: 100%;
      }
   }
`;

export default SignupTopBanner;
