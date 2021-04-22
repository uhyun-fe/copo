// set helper

// 을(를) 구별
export const koreanEulReulReturner = (str) => {
   let strGa = 44032;
   let strHih = 55203;
   let lastStrCode = str.charCodeAt(str.length - 1);
   let prop = true;

   if (lastStrCode < strGa || lastStrCode > strHih) return false;
   if ((lastStrCode - strGa) % 28 === 0) prop = false;

   return prop ? "을" : "를";
};

// 이메일 형식 확인 (올바른 형식일 경우 return true)
export const isRightEmail = (str) => {
   var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
   return regExp.test(str); // is_right_email ? true : false
};
