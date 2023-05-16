"use strict";

const weekDays = [
  "понеділок",
  "вівторок",
  "середа",
  "четвер",
  "п'ятниця",
  "субота",
  "неділя",
];

const todayDate = new Date();
const todayDay = todayDate.toLocaleDateString("uk-UA", { weekday: "long" });


const start = function () {
  for (const day of weekDays) {
    const stylesDay = [];
    if (day === todayDay) {
      stylesDay.push("font-weight: 700;");
    }

    if (day === "субота" || day === "неділя") {
      stylesDay.push("font-style: italic;");
    }

    console.log(
      "%c" + day[0].toUpperCase() + day.slice(1),
      stylesDay.join(" ")
    );
  }
};

start();