"use strict";

const rollBack = 10;
let title;
let screens;
let screenPrice;
let adaptive;
let allServicesPrices;
let fullPrice;
let servicesPercentPrice;
let service1;
let service2;


const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор верстки");
  screens = prompt(
    "Какие типы екранов нужно розрабативать?",
    "Простые, Сложные"
  );


  do {
    screenPrice = +prompt("Сколько будет стоить даная работа?", "    15000   ").trim();
  } while (!isNumber(screenPrice));
  

  adaptive = confirm("Нужен адаптив на сайте?");
};

const getAllServicesPrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt(
        "Какой дополнительный тип услуги нужен?",
        "Отправка форм"
      );
    } else {
      service2 = prompt(
        "Какой дополнительный тип услуги нужен?",
        "Отправка форм2"
      );
    }

    let servicePrice;

    do {
      servicePrice = prompt("Сколько это будет стоить?", 7500);
    } while (!isNumber(servicePrice));

    sum += +servicePrice;

  }
  return sum
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getFullPrice = function () {
  return +screenPrice + +allServicesPrices;
};

const getServicesPercentPrice = function () {
  return fullPrice - (fullPrice * (rollBack / 100));
};

const getTitle = function () {
  return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  }
  if (price >= 15000) {
    return "Даем скидку в 5%";
  }
  if (price >= 0) {
    return "Скидка не предусмотрена";
  }

  return "Что то пошло не так";
};

asking();
allServicesPrices = getAllServicesPrices();
fullPrice = getFullPrice();
servicesPercentPrice = getServicesPercentPrice();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicesPrices: ", allServicesPrices);
console.log("fullPrice: ", getRollbackMessage(fullPrice));
console.log("title: ",  title);
console.log("screenPrice: ",  screenPrice);
console.log("adaptive: ",  adaptive);

console.log("screens", screens.length);
console.log("servicesPercentPrice", servicesPercentPrice);

console.log("Стоимость верстки" + " " + servicesPercentPrice + "рублей");
