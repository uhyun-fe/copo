import React from "react";
import styled from "styled-components";
import { koreanEulReulReturner } from "../../../global/helper";

const SignupItemText = ({ text }) => {
   return (
      <View>
         <span>
            <strong>{text}</strong>
            {koreanEulReulReturner(text)}
         </span>
         <span>입력해주세요</span>
      </View>
   );
};

const View = styled.div`
   margin-bottom: 15px;
   span {
      display: block;
      color: #003141;
      font-size: 20px;
      font-weight: 300;
      line-height: 1.2;
      strong {
         color: #8e95be;
         font-weight: 300;
      }
   }
`;

export default SignupItemText;
