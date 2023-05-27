"use strict";

const addLeadingZero = function (n) {
  return n < 10 ? "0" + n : n;
};

let count1 = 0;

function parseDate(date, addZero) {
  return {
    day: addZero ? addLeadingZero(date.getDay()) : date.getDay(),
    year: addZero ? addLeadingZero(date.getSeconds()) : date.getFullYear(),
    hour: addZero ? addLeadingZero(date.getSeconds()) : date.getHours(),
    month: addZero ? addLeadingZero(date.getSeconds()) : date.getMonth(),
    minutes: addZero ? addLeadingZero(date.getSeconds()) : date.getMinutes(),
    seconds: addZero ? addLeadingZero(date.getSeconds()) : date.getSeconds(),
  };
}

let hourTime = function (hour) {
  if (hour < 7) {
    return "час";
  }
  if (hour < 14) {
    return "часов";
  }
  if (hour < 24) {
    return "часа";
  }
};

function logDate() {
  const date = new Date();
  const { day, minutes, hour, seconds, year } = parseDate(date);

  const dayString = date.toLocaleDateString("uk-RU", { weekday: "long" });
  const monthString = date.toLocaleString("uk-RU", { month: "long" });

  const formattedDate = `${"Сегодня"} ${dayString}, ${day} ${monthString} ${year} ${"года"}`;
  const formattedTime = `${hour} ${hourTime(
    hour
  )} ${minutes} ${"минут"} ${seconds} ${"секунды"}`;
  console.log(`${formattedDate}, ${formattedTime}`);

  if (count1 === 2) {
    clearInterval(getTimeA);
  }
  count1 += 1;
}

const getTimeA = setInterval(logDate, 1000);

let count = 0;

function logDate2() {
  const date = new Date();
  const { hour, minutes, day, seconds, year, month } = parseDate(date, true);

  console.log(`${hour}:${minutes}:${seconds} ${day}.${month}.${year}`);

  if (count === 2) {
    clearInterval(getTimeB);
  }

  count += 1;
}
const getTimeB = setInterval(logDate2, 1000);
