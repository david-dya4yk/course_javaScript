"use strict";
// const title = 'Hello world';
// const screens = prompt('Какие типы экранов нужно разработать?','Простые, Сложные, Интерактивные');
const screenPrice = 1200;
const rollBack = 55;
// const adaptive = confirm('Нужен ли адаптив на сайте?');
// const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = 500;
// const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = 9000;

// const splits = screens.split(',');
const fullPrice = +screenPrice + +servicePrice1 + +servicePrice2;
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

// const lang = prompt("Выберите язык", "ru & en");
// const weekDaysRu = ["Понедельник", " Вторник", "Среда", "Четверг", "П'ятница"];
// const weekDaysEn = ["Monday", "Tuesday", "Wednesday", "Thusday", "Friday"];

// if (lang == 'ru') {
//   console.log(weekDaysRu);
// } else if (lang == 'en'){
//   console.log(weekDaysEn)
// }

// switch (lang) {
//   case "ru":
//     console.log(weekDaysRu);
//     break
//   case "en":
//     console.log(weekDaysEn);
//     break
// }

// const namePerson = 'Александр';
// console.log(namePerson === 'Артем' ? 'директор' : namePerson === 'Александр' ? 'преподаватель' : 'студент')

// 1
// const getAllServicePrices = function () {
//   return screenPrice + servicePrice1 + servicePrice2;
// };

// const allServicePrices = getAllServicePrices();

// console.log(allServicePrices);

// 2

// function getFullPrice(sp, asp) {
//   return sp + asp;
// }

// const fullPrice = getFullPrice(screenPrice, allServicePrices);

// console.log("fullPrice", fullPrice);

//3

// const getTitle = function () {
//   title;
//   const trimmedTitle = title.trim();
//   const titleUpperCase =
//     trimmedTitle.slice(0, 1).toUpperCase() +
//     trimmedTitle.slice(1).toLowerCase();
//   console.log(titleUpperCase);
  // return;
// };

// getTitle();

//4

// const getServicePercentPrices = function () {
//   return fullPrice - fullPrice * rollBack / 100
// };

// const servicePercentPrice = getServicePercentPrices();

// console.log(servicePercentPrice)



//5

const showTypeOff = function() {
  return
}

const screens = 'Простые, Сложные, Интерактивные';

const getRollBack = function() {
  "Даем скидку в 5%"
  return
}

const getServicePercentPrices = function () {
  return fullPrice * rollBack / 100
};
