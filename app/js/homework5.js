"use strict";

const arr = [
  "54433",
  "876536",
  "34546",
  "1123439",
  "88735214",
  "2423557",
  "451214",
];


const isPrime = function (num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

const printPrimes = function () {
  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) console.log("Делители этого числа: 1 и ", i);
  }
}

printPrimes();
console.log(arr.filter((num) => ["2", "4"].includes(num.toString()[0])));

