const title = document.getElementsByTagName('h1')[0];

const buttonCalculate = document.getElementsByClassName('handler_btn')[0];

const buttonReset = document.getElementsByClassName('handler_btn')[1];

const buttonAdd = document.querySelector('.screen-btn') ;

const otherItemsPercent = [...document.querySelectorAll('.other-items.percent')];

const otherItemsNumber = [...document.querySelectorAll('.other-items.number')];

const inputTypeRange = document.querySelector("div.rollback > div > input");

const spanRangeValue = document.querySelector("div.rollback > div > span.range-value");

const inputAll = [...document.getElementsByClassName('total-input')];

let screen = document.querySelectorAll('.screen')[0]

console.log(title)
console.log(buttonCalculate)
console.log(buttonReset)
console.log(buttonAdd)
console.log(otherItemsPercent)
console.log(otherItemsNumber)
console.log(inputTypeRange)
console.log(spanRangeValue)
console.log(inputAll)
console.log(screen)