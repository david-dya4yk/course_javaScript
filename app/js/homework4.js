"use strict";

const text = prompt("Введите текст", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum repellendus impedit soluta est ad, ea, nihil quas vitae qu");
// const text = 5432;

const checkToString = function (str) {
  if (typeof str !== "string") {
    return "тип не строка";
  }

  const trimmedString = str.trim();

  if (trimmedString.length <= 30) {
    return trimmedString;
  }
  return trimmedString.slice(0, 30) + "...";
};

console.log("text", checkToString(text));

// const text = prompt(
//     "Введите текст",
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto debitis reprehenderit itaque"
//   );
// const text = 5432;
//   const MAX_STRING_LENGTH = 30;
//   const SEPARATOR = "...";

//   const checkToString = function (str) {
//     str = str.trim();

//     if (typeof str !== "string") {
//       return "тип не строка";
//     }

//     return str.length <= MAX_STRING_LENGTH
//       ? str
//       : str.slice(0, MAX_STRING_LENGTH) + SEPARATOR;
//   };

//   console.log("result: ", checkToString(text));

// ===========================

// const checkToString = function (str) {
//   str = str.trim();
//   if (typeof str !== "string") {
//     return "тип не строка";
//   }

//   return str.length <= 30 ? str : str.slice(0, 30) + "....";
// };

// checkToString("     asd");

// ===========================

// const checkToString = function (str) {
//   if (typeof str !== "string") {
//     return "тип не строка";
//   }

//   const trimmedString = str.trim();

//   return trimmedString.length <= 30
//     ? trimmedString
//     : trimmedString.slice(0, 30) + "....";
// };

// console.log("text", checkToString(text));

// ===========================

// const checkToString = function (str) {
//   if (typeof str !== "string") {
//     return "тип не строка";
//   }

//   const trimmedString = str.trim();
//   if (trimmedString.length <= 30) {
//     return trimmedString;
//   }

//   return trimmedString.slice(0, 30) + "....";
// };

// console.log("text", checkToString(text));
