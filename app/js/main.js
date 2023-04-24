"use strict";
// const title = prompt('как называется ваш проект?');
// const screens = prompt('Какие типы экранов нужно разработать?','Простые, Сложные, Интерактивные');
// const screenPrice = prompt("Сколько будет стоить данная работа?", "1200");
// const rollBack = 55;
// const adaptive = confirm('Нужен ли адаптив на сайте?');
// const service1 = prompt('Какой дополнительный тип услуги нужен?');
// const servicePrice1 = prompt("Сколько это будет стоить?");
// const service2 = prompt('Какой дополнительный тип услуги нужен?');
// const servicePrice2 = prompt("Сколько это будет стоить?");

// const splits = screens.split(',');
// const fullPrice = +screenPrice + +servicePrice1 + +servicePrice2;
//   if (fullPrice >= 30000) {
//     alert("Даем скидку в 10%");
//   } else if (fullPrice >= 15000) {
//     alert("Даем скидку в 5%");
//   } else if (fullPrice > 0) {
//     alert('Скидка не предусмотрена')
//   } else if (fullPrice <= 0) {
//     alert("Что то пошло не так");
//   }

// const workerPrice = (fullPrice * rollBack) / 100;
// const servicePercentPrice = Math.round(fullPrice - workerPrice);

// console.log('title',title);
// console.log('fullPrice',fullPrice);
// console.log('adaptive',adaptive);
// console.log('screens',screens.length);
// console.log('fullPrice', fullPrice + 'UAH');
// console.log('screenPrice', screenPrice + 'UAH');
// console.log('screens',screens.toLowerCase());
// console.log('splits', splits);
// console.log('workerPrice', workerPrice)
// console.log('servicePercentPrice', servicePercentPrice);

// let num = 266219;
// const numToString = Array.from(String(num)).map((i) => Number(i));
// const multiplyNum = numToString.reduce((acc, rec) => acc * rec);
// const degreeMultiplyNum = multiplyNum ** 3;
// const sliceDegreeMultiplyNum = String(num).slice(0, 2);

// const a = 10;
// console.log(a)

const lang = prompt("Выберите язык", "ru & en");
const weekDaysRu = ["Понедельник", " Вторник", "Среда", "Четверг", "П'ятница"];
const weekDaysEn = ["Monday", "Tuesday", "Wednesday", "Thusday", "Friday"];

// if (lang == 'ru') {
//   console.log(weekDaysRu);
// } else if (lang == 'en'){
//   console.log(weekDaysEn)
// }

switch (lang) {
  case "ru":
    console.log(weekDaysRu);
    break
  case "en":
    console.log(weekDaysEn);
    break
}
