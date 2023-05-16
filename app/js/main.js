"use strict";

const appData = {
  rollBack: 10,
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  allServicesPrices: 0,
  fullPrice: 0,
  servicesPercentPrice: 0,
  service1: "",
  service2: "",
  servicePrice: 0,
  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    appData.screens = prompt(
      "Какие типы екранов нужно розрабативать?",
      "Простые, Сложные"
    );
    do {
      appData.screenPrice = +prompt(
        "Сколько будет стоить даная работа?",
        "    15000   "
      ).trim();
    } while (!appData.isNumber(appData.screenPrice));

    appData.adaptive = confirm("Нужен адаптив на сайте?");
  },

  start: function () {
    appData.asking();
    appData.allServicesPrices = appData.getAllServicesPrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicesPercentPrice = appData.getServicesPercentPrice();
    appData.title = appData.getTitle();
    appData.logger();
  },

  logger: function () {
    for (let key in appData) {
      console.log(appData[key]);
    }
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  getAllServicesPrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.service1 = prompt(
          "Какой дополнительный тип услуги нужен?",
          "Отправка форм"
        );
      } else {
        appData.service2 = prompt(
          "Какой дополнительный тип услуги нужен?",
          "Отправка форм2"
        );
      }


      do {
        appData.servicePrice = prompt("Сколько это будет стоить?", 7500);
      } while (!appData.isNumber(appData.servicePrice));

      sum += +appData.servicePrice;
    }
    return sum;
  },

  getFullPrice: function () {
    return +appData.screenPrice + +appData.allServicesPrices;
  },

  getServicesPercentPrice: function () {
    return appData.fullPrice - appData.fullPrice * (appData.rollBack / 100);
  },

  getTitle: function () {
    const trimmed = appData.title.trim();
    return trimmed[0].toUpperCase() + trimmed.substr(1).toLowerCase();
  },

  getRollbackMessage: function (price) {
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
  },
};

appData.start();
