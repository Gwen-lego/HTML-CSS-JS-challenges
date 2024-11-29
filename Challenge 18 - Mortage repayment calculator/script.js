"use strict";

const red = "hsl(4, 69%, 50%)";
const Slate700 = "hsl(200, 24%, 40%)";
const Slate100 = "hsl(202, 86%, 94%)";
const Slate500 = "hsl(200, 26%, 54%)";

// SELECTORS

const inputs = document.querySelectorAll(".input-number");

const amount = document.getElementById("amount");
const years = document.getElementById("years");
const rate = document.getElementById("percents");

const TypeRep = document.getElementById("repayment");
const TypeInt = document.getElementById("interest");

// red label selector
const redLabels = document.querySelectorAll(".red-info");

const typeRequired = document.querySelector(".type-red-label");

//buttons

const BtnCalculate = document.querySelector(".btn-calculate");

const clear = document.querySelector(".btn-clearAll");

// display answers

const waitingPic = document.querySelector(".container-center");
const displayResults = document.querySelector(".display-results");

const monthlyRepay = document.querySelector(".monthly-value");
const totalRepay = document.querySelector(".repay-over-value");

// FUNCTIONS

// check value and adjust style if no value.

const checkValue = function () {
  let check = 4;
  inputs.forEach(function (input) {
    const container = input.closest(".input-container");
    if (input.value === "" || input.value < 1) {
      // select container

      //target element to modify

      container.querySelector(".red-info").classList.remove("hidden");
      container.querySelector(".input-box").style.borderColor = red;
      container.querySelector(".input-logo").style.backgroundColor = red;
      container.querySelector(".input-logo").style.color = "white";
    } else {
      container.querySelector(".red-info").classList.add("hidden");
      container.querySelector(".input-box").style.borderColor = Slate500;
      container.querySelector(".input-logo").style.backgroundColor = Slate100;
      container.querySelector(".input-logo").style.color = Slate700;
      check--;
    }
  });
  if (TypeRep.checked || TypeInt.checked) {
    typeRequired.classList.add("hidden");
    check--;
  } else {
    typeRequired.classList.remove("hidden");
  }
  return check === 0 ? true : false;
};

const calculateRepayment = function (e) {
  waitingPic.classList.remove("hidden");
  displayResults.classList.add("hidden");
  e.preventDefault();
  // n = number of payment in months
  const n = Number(years.value * 12);
  // i = annual interest rate(rates / 100 / 12)
  const i = Number(rate.value / 100 / 12);
  // p = principal amount
  const P = Number(amount.value);
  // M = Monthly payment
  let M = 0;
  // T = total amount paid over the term
  let T = 0;

  if (checkValue()) {
    waitingPic.classList.add("hidden");
    displayResults.classList.remove("hidden");
    if (TypeRep.checked) {
      // calculate total amount and monthly payments
      M = (P * (i * (1 + i) ** n)) / ((1 + i) ** n - 1);
      T = M * n;

      console.log(M);
    } else {
      //calculate interest only payments
      M = P * i;
      T = M * n + P;
    }
    M = Number(M).toFixed(2);
    T = Number(T).toFixed(2);

    //Add coma by formatting number to US currency
    const addComa = new Intl.NumberFormat("en-US");
    T = addComa.format(T);
    M = addComa.format(M);

    monthlyRepay.innerHTML = M;
    totalRepay.innerHTML = T;
  }
  return;
};

const reset = function () {
  redLabels.forEach(function (red) {
    if (!red.classList.contains("hidden")) {
      red.classList.add("hidden");
    }
  });

  inputs.forEach(function (input) {
    const container = input.closest(".input-container");
    container.querySelector(".input-box").style.borderColor = Slate500;
    container.querySelector(".input-logo").style.backgroundColor = Slate100;
    container.querySelector(".input-logo").style.color = Slate700;
  });
};

// Ad a listener to Button Calculate

BtnCalculate.addEventListener("click", calculateRepayment);

clear.addEventListener("click", reset);

// FORMULA

// Monthly payment interest Only
// Loan Payment = Amount x Interest Rate

// MORTGAGE REPAYMENT FORMULA

// n = number of payment in months
// i = annual interest rate(rates / 100 / 12)
// P = principal
// M = Monthy payment
// raised to the nth power in the following formula

// M = P x i(1 + i)n / (1 + i)n - 1
