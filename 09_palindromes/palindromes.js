// function isAlphanumeric(str) {
//     return str.match(/^[a-zA-Z0-9]+$/) !== null;
//   }
  
// const palindromes = function (someString) {
//     let l = 0;
//     let r = someString.length - 1

//     while (l < r) {
//         while (l < r && !isAlphanumeric(someString[l])){
//             l += 1
//         }
//         while (l < r && !isAlphanumeric(someString[r])){
//             r -= 1
//         }

//         if (someString[l] != someString[r]) return false
//     }
//     return true
// };
const palindromes = function (string) {
    const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    return processedString.split("").reverse().join("") == processedString;
  };
// Do not edit below this line
module.exports = palindromes;
