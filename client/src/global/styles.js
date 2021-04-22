// set global styles
import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`

   @font-face {
        font-family: 'NEXON Lv2 Gothic';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic Light.woff') format('woff');
        font-weight: 300;
        font-style: normal;
    }
   @font-face {
        font-family: 'NEXON Lv2 Gothic';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'NEXON Lv2 Gothic';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic Bold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
    }

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      line-height: 1;
   }
   body {
    font-family: 'NEXON Lv2 Gothic', sans-serif;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
   }
   a {
      text-decoration: none;
      color: inherit;
   }
   img {
      width: 100%;
   }
   ul, ol {
      list-style-type: none;
   }
   input {
      font-family: inherit;
      color: inherit;
      font-size: inherit;
      outline: none;
   }
   /* input[type="radio"] {
      appearance: none;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18px;
      height: 18px;
      border: 1px solid #afafaf;
      &:checked {
         &::after {
            content: "";
            width: 8px;
            height: 8px;
            background: #6085cb;
            background-size: 100% 100%;
         }
      }
   }
   input[type="checkbox"] {
      appearance: none;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: bottom;
      margin: 0;
      width: 18px;
      height: 18px;
      border: 1px solid #afafaf;
      background:#ffffff;
      :checked {
         &::after {
            content: "";
            width: 8px;
            height: 8px;
            background: #6085cb;
            background-size: 100% 100%;
         }
      }
   }
   select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      color: inherit;
      font-family: inherit;
      outline: none;
      background-position-x: 90%;
      background-position-y: 50%;
      cursor: pointer;
   }
   textarea {
      font-family: inherit;
      color: inherit;
      border: none;
      outline: none;
      resize: none;
      &::-webkit-scrollbar {
         width: 10px;
      }
      &::-webkit-scrollbar-thumb {
         background-color: #6085cb;
         border-radius: 20px;
         background-clip: padding-box;
         border: 2px solid transparent;
      }
   } */
   button {
      font-family: inherit;
      color: inherit;
      font-size: inherit;
      font-weight: inherit;
      border: none;
      background: none;
      outline: none;
      cursor: pointer;
   }
   .drag {
      -webkit-user-select: text;
      -khtml-user-select: text;
      -moz-user-select: text;
      -ms-user-select: text;
      user-select: text;
   }
   .view {
      position: relative;
      .main {
         position: relative;
         top: 55px;
      }
   }
   .img {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
   }
`;

export default globalStyle;
