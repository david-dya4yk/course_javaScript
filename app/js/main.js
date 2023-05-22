"use strict";

const appData = {
  rollBack: 10,
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  allServicesPrices: 0,
  fullPrice: 0,
  servicesPercentPrice: 0,
  services: {},
  servicePrice: 0,
  asking: function () {
    appData.title = appData.checkIfStringIsNumber(
      "Как называется ваш проект?",
      "Калькулятор верстки"
    );

    const screenType = appData.checkIfStringIsNumber(
      "Какие типы екранов нужно розрабативать?",
      "Простые"
    );
    let price = 0;

    do {
      price = +prompt(
        "Сколько будет стоить даная работа?",
        "    15000   "
      ).trim();
    } while (!appData.isNumber(price));

    appData.services[screenType] = +price;

    for (let i = 1; i < 3; i++) {
      let name = appData.checkIfStringIsNumber(
        "Какой дополнительный тип услуги нужен?",
        "Адаптив"
      );
      let price = 0;

      do {
        price = prompt("Сколько это будет стоить?", 7500);
      } while (!appData.isNumber(price));

      function checkName(screen) {
        return screen.name === name
      }

      const screen = appData.screens.find(checkName)

      if (screen){
        appData.screens.push({ id: i, name: name + i, price: price });
      } else {
        appData.screens.push({ id: i, name: name, price: price });
      }
    }
    appData.adaptive = confirm("Нужен адаптив на сайте?");
  },

  addPrices: function () {
    appData.screenPrice = appData.screens.reduce((p, c) => {
      return p + +c.price
    }, 0);
    // for (let screen of appData.screens) {
    //   appData.screenPrice += +screen.price;
    // }

    for (let key in appData.services) {
      appData.allServicesPrices += appData.services[key];
    }
  },

  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicesPercentPrice();
    appData.getTitle();

    appData.logger();
  },

  checkIfStringIsNumber: function (question, defaultAnswer) {
    const str = prompt(question, defaultAnswer).trim();

    if (appData.isNumber(+str)) {
      return appData.checkIfStringIsNumber(question, defaultAnswer);
    }
    return str;
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + +appData.allServicesPrices;
  },

  getServicesPercentPrice: function () {
    appData.servicesPercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollBack / 100);
  },

  getTitle: function () {
    const trimmed = appData.title.trim();
    appData.title = trimmed[0].toUpperCase() + trimmed.substr(1).toLowerCase();
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

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicesPercentPrice);
    console.log("screens", appData. screens)
  },
};

appData.start();
