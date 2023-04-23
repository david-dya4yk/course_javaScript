const title = 'javaScript';
const screens = 'Простые, Сложные, Интерактивные';
const screenPrice = 42;
const rollBack = 55;
const fullPrice = 1000;
const adaptive = true;

const splits = screens.split(',');
const workerPrice = fullPrice * rollBack / 100;


console.log(title);
console.log(fullPrice);
console.log(adaptive);
console.log(screens.length);
console.log(fullPrice + 'UAH');
console.log(screenPrice + 'UAH');
console.log(screens.toLowerCase());
console.log(splits);
console.log(workerPrice)


let num = 266219;
const numToString = Array.from(String(num)).map(i=>Number(i));
const multiplyNum = numToString.reduce((acc, rec) => acc * rec);
const degreeMultiplyNum = multiplyNum ** 3;
const sliceDegreeMultiplyNum = String(num).slice(0,2);
console.log(sliceDegreeMultiplyNum)

