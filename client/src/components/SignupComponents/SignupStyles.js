// set signup styles
import styled from "styled-components";

export const SignupButton = styled.button`
   margin: 10px 0 30px;
   width: 100%;
   height: 60px;
   color: #fff;
   font-size: 20px;
   font-weight: 700;
   border-radius: 25px;
   background: #8e95be;
   box-shadow: 4px 2px 5px 0 rgba(0, 0, 0, 0.25);
   transition: 0.2s ease-in-out;
   &:hover {
      background: #7c83ac;
   }
   &:active {
      background: #5b628b;
   }
`;

export const FindInfoArea = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 20px 0;
   color: #003141;
   font-size: 13px;
   font-weight: 300;
   border-top: 1px solid #e4e4e4;
   button {
      padding: 2px 10px;
      &:hover {
         color: #8e95be;
         font-weight: 500;
      }
   }
`;

export const GoSignupArea = styled.div`
   padding: 30px 0 20px;
   text-align: right;
   font-weight: 300;
   p {
      font-size: 15px;
      img {
         margin-right: 2px;
         width: 40px;
      }
   }
   button {
      padding: 2px 5px;
      font-size: 13px;
      transition: 0.2s ease-in-out;
      &:hover {
         color: #8e95be;
      }
   }
`;
