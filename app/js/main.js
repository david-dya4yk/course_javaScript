"use strict";

// const firstName = 'david';
// const lastName = 'Dyachuk';
// const age = 20;
// const email = 'daviddya4yk@gmail.com';
// const country = 'Ukraine';
// const city = 'Chernivtsi';

//зробити кальклятор
//1 зробити 4 функції: додавання, ділення, множення, віднімання
//2 дабавити функціям 2 аргумента для роботи
//3 всердтні кожної функції зробити перевірку на
// те чи передані якісь аргкменти. якщо пругментів не має
//то видати alert - данні не передані

//exercise 1

const addNumbers = (a, b) => {
  return +a + +b
}

const subtractNumbers = (a, b) => {
  return a - b;
};

const multiplyNumbers = (a, b) => {
  return a * b;
};

const divisionNumbers = (a, b) => {
  return a / b
};

const start = () => {
  const firstNumber = prompt("Введіть перше число");
  if (firstNumber <= 0) {
    alert("Данні не коректні")
    return;
  }

  const secondNumber = prompt("Введіть друге число");
  if (secondNumber <= 0) {
    alert("Данні не коректні");
    return;
  }

  const action = prompt("Введіть знак щоб вичіслети рівняння - + * /");
  let result;
  if (action === "-") {
    result = subtractNumbers(firstNumber, secondNumber);
  }

  if (action === "+") {
    result = addNumbers(firstNumber, secondNumbe);
  }
  if (action === "*") {
    result = multiplyNumbers(firstNumber, secondNumber);
  }
  if (action === "/") {
    result = divisionNumbers(firstNumber, secondNumber);
  }
  console.log(result);
};

start()

// console.log(addNumbers);
// console.log(multiplicationNumbers);
// console.log(divisionNumbers);

// const num = 20;
// const question = prompt('Відгадайте задане число');

//     if (question = 20){
//         alert('Вітаємоб ви відгадали')
//     } else {
//         alert('Вітаємоб ви відгадfsdfsdfали')
//     }

// function calculateAge(year){
//     return 2022 - year
// }

// console.log(calculateAge(2002))
