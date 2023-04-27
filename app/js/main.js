"use strict";

const title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы екранов нужно розрабативать?');
const screenPrice = +prompt('Сколько будет стоить даная работа?');
const adaptive = confirm('Нужен адаптив на сайте?');
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = +prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = +prompt('Сколько это будет стоить?');
const rollBack = 10;
const fullPrice = screenPrice + servicePrice1 + servicePrice2;


const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return "Даем скидку в 10%"
    } else if (price >= 15000 && price < 30000){
        return "Даем скидку в 5%"
    } else if (price >= 0 && price < 15000){
        return "Скидка не предусмотрена"
    } else {
        return "Что то пошло не так"
    }
}

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollBack / 100));
  };

const servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);

console.log("Стоимость верстки экранов" + " " + screenPrice + "рублей");

console.log(servicePercentPrice)
