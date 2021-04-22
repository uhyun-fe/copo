import React from "react";
import styled from "styled-components";

const SignupInput = ({ labelText, onChange }) => {
   return (
      <View>
         <label htmlFor={labelText + "_input"}>
            <span>{labelText}</span>
            <div className="input_area">
               <input type="text" id={labelText + "_input"} onChange={onChange} />
            </div>
         </label>
      </View>
   );
};

const View = styled.div`
   margin-bottom: 20px;
   height: 90px;
   border-radius: 30px;
   background: #fcfcfc;
   box-shadow: 4px 2px 5px 0 rgba(0, 0, 0, 0.25);
   label {
      display: block;
      position: relative;
      padding: 18px 15px;
      width: 100%;
      height: 100%;
      color: #b1b8b6;
      font-size: 13px;
      font-weight: 300;
      border: 3px solid #fcfcfc;
      border-radius: 30px;
      transition: 0.2s ease-in-out;
      &:focus-within {
         color: #8e95be;
         border-color: #8e95be;
      }
   }
   .input_area {
      position: absolute;
      left: 20px;
      bottom: 15px;
      width: 89%;
      height: 30px;
      color: #003141;
      font-size: 20px;
      font-weight: 700;
      &::after {
         content: "";
         display: block;
         width: 0;
         height: 0;
         border-bottom: 2px solid #8e95be;
         transition: 0.4s ease-in-out;
      }
      &:focus-within {
         &::after {
            width: 100%;
         }
      }
      input {
         width: 100%;
         height: 100%;
         border: none;
         background: none;
      }
   }
`;

export default SignupInput;
