"use strict";

// SELECTORS

const allTitle = document.querySelectorAll(".title");
const redMessages = document.querySelectorAll(".error-message");
const allInput = document.querySelectorAll(".inputs");

const titleDay = document.querySelector(".h1-day");
const titleMonth = document.querySelector(".h1-month");
const titleYear = document.querySelector(".h1-year");

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");

const days = document.querySelector(".answer-days");
const months = document.querySelector(".answer-months");
const years = document.querySelector(".answer-years");

const btn = document.getElementById("calculate-btn");

btn.addEventListener("click", function () {
  let dayV = day.value;
  let monthV = month.value;
  let yearV = year.value;

  years.innerHTML = "--";
  months.innerHTML = "--";
  days.innerHTML = "--";

  let userDate = [];

  const daysInMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // RESET to normal
  allTitle.forEach(function (title) {
    title.classList.remove("turn-red");
  });
  redMessages.forEach(function (message) {
    message.textContent = "";
  });
  allInput.forEach(function (input) {
    input.classList.remove("border-red");
  });

  // CHECKING THE YEAR
  if (!yearV || yearV > currentYear + 1 || yearV < 1900) {
    year.classList.add("border-red");
    titleYear.classList.add("turn-red");
    if (!yearV) {
      errorYear.textContent = "This field is required";
    } else if (yearV > currentYear + 1) {
      errorYear.textContent = "Must be in the past";
    } else if (yearV < 1900) {
      errorYear.textContent = "Born centuries ago??";
    }
  } else {
    userDate.push(yearV);
  }

  // CHECKING THE MONTH
  if (!monthV || monthV > 13 || monthV < 1) {
    month.classList.add("border-red");
    titleMonth.classList.add("turn-red");
    if (!monthV) {
      errorMonth.textContent = "This field is required";
    } else if (monthV > 13 || monthV < 1) {
      errorMonth.textContent = "Must be a valid month";
    }
  } else {
    monthV -= 1;
    userDate.push(monthV);
  }

  // CHECKING THE DAY
  if (!dayV || dayV < 1 || dayV > 31 || dayV > daysInMonths[`${monthV}`]) {
    titleDay.classList.add("turn-red");
    day.classList.add("border-red");
    if (!dayV) {
      errorDay.textContent = "This field is required";
    } else if (dayV < 1 || dayV > 31) {
      errorDay.textContent = "Must be a valid day";
    } else if (dayV > daysInMonths[`${monthV}`]) {
      errorDay.textContent = "Must be a valid date";
      month.classList.add("border-red");
      titleMonth.classList.add("turn-red");
      year.classList.add("border-red");
      titleYear.classList.add("turn-red");
    }
  } else {
    userDate.push(dayV);
  }

  const validDate = new Date(...userDate);

  if (userDate.length > 2) {
    calcYearsBetweenDates(currentDate, validDate);
  }
});

// function to calculate time between two years
// YEARS
const calcYearsBetweenDates = (date1, date2) => {
  const First = (date1 - date2) / (1000 * 60 * 60 * 24 * 365.25);
  const ageYears = Math.abs(Math.floor(First));
  const yearsRemaining = (First - ageYears) * 365.25;
  const ageMonths = Math.floor(yearsRemaining / 30.44);
  const ageDays = Math.floor(yearsRemaining);

  years.innerHTML = ageYears;
  months.innerHTML = ageMonths;
  days.innerHTML = ageDays;
};
