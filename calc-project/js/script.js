const title = document.getElementsByTagName('h1')[0];

const buttonsCollection = document.getElementsByClassName('handler_btn')

const buttonCalculate = buttonsCollection[0];

const buttonReset = buttonsCollection[1];

const buttonAdd = document.querySelector('.screen-btn') ;

const otherItemsPercent = [...document.querySelectorAll('.other-items.percent')];

const otherItemsNumber = [...document.querySelectorAll('.other-items.number')];

const inputTypeRange = document.querySelector(".rollback  input");

const spanRangeValue = document.querySelector(".rollback .range-value");

const allInputs = [...document.getElementsByClassName('total-input')];

let screen = document.querySelectorAll('.screen')[0]

console.log(title)
console.log(buttonCalculate)
console.log(buttonReset)
console.log(buttonAdd)
console.log(otherItemsPercent)
console.log(otherItemsNumber)
console.log(inputTypeRange)
console.log(spanRangeValue)
console.log(allInputs)
console.log(screen)