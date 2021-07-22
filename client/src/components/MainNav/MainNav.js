import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../../assets/images/copo.png";
import toggle from "../../assets/icons/menu.png";
import user from "../../assets/icons/user.png";
import close from "../../assets/icons/close.png";
import email from "../../assets/icons/email.png";
import kakao from "../../assets/icons/kakao.png";
import { nav, footer } from "../../assets/contents/test.json";

const MainNav = () => {
   const [isSideHidden, setIsSideHidden] = useState(true);
   const [navList, setNavList] = useState(nav.not_login_nav);

   return (
      <>
         <Div>
            <div className="icon" onClick={() => setIsSideHidden(false)}>
               <img src={toggle} alt="toggle_buttton" />
            </div>
            <h1>
               <Link to="/">
                  <img src={logo} alt="logo" />
               </Link>
            </h1>
            <div className="icon">
               <img src={user} alt="my_copo_buttton" />
            </div>
         </Div>
         <SideDiv className={isSideHidden ? "hidden" : "display"}>
            <div className="side_area">
               <div className="header">
                  <h1>
                     <Link to="/">
                        <img src={logo} alt="logo" />
                     </Link>
                  </h1>
                  <div className="icon" onClick={() => setIsSideHidden(true)}>
                     <img src={close} alt="close button" />
                  </div>
               </div>
               <Nav>
                  <span className="title">{nav.login_guide}</span>
                  <ul>
                     {navList.map((n, i) => (
                        <li key={i}>
                           <Link to={n.code}>{n.title}</Link>
                        </li>
                     ))}
                  </ul>
               </Nav>
               <div className="footer">
                  <span className="text_box">
                     <span className="title">
                        <span className="icon logo">
                           <img src={logo} alt="logo" />
                        </span>
                        {footer.title}
                     </span>
                     <span>{footer.name}</span>
                     <span>
                        <span className="icon">
                           <img src={email} alt="email_icon" />
                        </span>
                        {footer.email}
                     </span>
                     <span>
                        <span className="icon">
                           <img src={kakao} alt="kakaotalk_icon" />
                        </span>
                        {footer.kakao}
                     </span>
                  </span>
               </div>
            </div>
         </SideDiv>
      </>
   );
};

const Div = styled.div`
   position: fixed;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 5%;
   width: 100%;
   height: 60px;
   border-bottom: 5px solid #8f95be;
   box-shadow: 0 5px 5px #8f95be;
   background: #e9eaf0;
   h1 {
      img {
         width: 100px;
      }
   }
   .icon {
      cursor: pointer;
      img {
         width: 25px;
      }
   }
`;

const SideDiv = styled.div`
   position: fixed;
   display: flex;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.05);
   transition: 0.5s ease-in-out;
   &.hidden {
      left: -100vw;
   }
   .side_area {
      position: relative;
      width: 300px;
      background: #fff;
      box-shadow: 0 0 10px 5px #afafaf;
      .header {
         display: flex;
         justify-content: space-between;
         align-items: center;
         padding: 0 15px;
         height: 60px;
         background: #909db1;
         h1 img {
            width: 80px;
            filter: invert(100%);
         }
         .icon img {
            width: 20px;
            filter: invert(100%);
            cursor: pointer;
         }
      }
      .footer {
         position: absolute;
         right: 15px;
         bottom: 15px;
         display: flex;
         justify-content: flex-end;
         .text_box {
            display: flex;
            flex-direction: column;
            text-align: right;
            padding-top: 20px;
            color: #b1b8b6;
            font-size: 12px;
            border-top: 1px solid #e4e4e4;
            > span {
               display: flex;
               justify-content: flex-end;
               align-items: center;
               margin-bottom: 3px;
               &.title {
                  font-size: 17px;
               }
            }
            .icon {
               margin-right: 5px;
               width: 15px;
               height: 13px;
               &.logo {
                  width: 50px;
                  img {
                     filter: invert(50%);
                  }
               }
            }
         }
      }
   }
`;

const Nav = styled.nav`
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   padding-top: 30px;
   padding-right: 15px;
   .title {
      padding: 15px;
      padding-right: 0;
      margin-bottom: 20px;
      color: #6a6f6d;
      font-size: 15px;
      font-weight: 300;
      border-bottom: 1px solid #e4e4e4;
   }
   ul {
      li {
         padding: 15px 0;
         text-align: right;
         color: #b1b8b6;
         font-size: 20px;
         font-weight: 300;
         &:hover {
            font-weight: 500;
         }
      }
   }
`;

export default MainNav;
