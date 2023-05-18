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
  askForTitle: function () {
    const title = prompt("Как называется ваш проект?", "Калькулятор верстки")

    if(appData.isNumber(+title)){
      return appData.askForTitle()
    }
    return title
  },


  asking: function () {
    appData.title = appData.askForTitle()
  
    for (let i = 0; i < 1; i++) {
      let name = prompt("Какие типы екранов нужно розрабативать?", "Простые");
      let price = 0;

      do {
        price = +prompt(
          "Сколько будет стоить даная работа?",
          "    15000   "
        ).trim();
      } while (!appData.isNumber(price));

      appData.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let name = prompt("Какой дополнительный тип услуги нужен?", "адаптив");
      let price = 0;

      do {
        price = prompt("Сколько это будет стоить?", 7500);
      } while (!appData.isNumber(price));

      appData.services[name] = +price;
    }
    appData.adaptive = confirm("Нужен адаптив на сайте?");
  },

  addPrices: function() {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let key in appData.services) {
      appData.allServicesPrices += appData.services[key]
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

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  isString: function (str) {
    return Object.prototype.toString.call(str) === "string"
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
    console.log(appData.screens)
  },
};

appData.start();
