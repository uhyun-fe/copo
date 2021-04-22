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
