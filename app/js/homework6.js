"use strict";

const startGame = function (num) {
  let counter = 10;

  function checkNumber() {
    if (counter === 0) {
     const result = confirm("Попытки закончились, хотите сыграть еще?");
     if (result) {
      return startGame(Math.floor(Math.random() * 100) + 1);
     } 
     return
    }  

    const game = prompt("Угадай число от 1 до 100");

    console.log("game", game);
    console.log("num", num);

    if (game === null) {
      alert("Игра окончена");
      return;
    } else if (+game === num) {
      const result = confirm(
        "Поздравляю, Вы угадали!!! Хотели бы сыграть еще?"
      );
      if (result) {
        return startGame(Math.floor(Math.random() * 100) + 1);
      }
      return;
    } else if (+game < num) {
      counter -= 1;
      alert("Загаданное число больше, осталось попыток " + counter);
      checkNumber();
    } else if (+game > num) {
      counter -= 1;
      alert("Загаданное число меньше, осталось попыток " + counter);
      checkNumber();
    } else {
      alert("Введи число!");
      checkNumber();
    }
  }

  checkNumber();
};

startGame(Math.floor(Math.random() * 100) + 1);
