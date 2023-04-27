"use strict"

const text = prompt('Введите текст');
// const text = 5432;

const checkToString = function (str) {
    if (typeof str === 'string'){
        str.trim()
        if (str.length <= 10){
           return str
        } else {
           return  str.slice(0, 10) + "...."
        }
    } else {
        return 'тип не строка'
    }
}

console.log('text', checkToString(text))