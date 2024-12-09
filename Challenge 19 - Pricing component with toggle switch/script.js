"use strict";

// SELECTORS

const checkbox = document.querySelector(".checkbox");
const checkboxLabel = document.querySelector(".toggle");

const monthlyPrices = document.querySelectorAll(".monthly");
const annuallyPrices = document.querySelectorAll(".annually");

const changePrices = function () {
  if (checkbox.checked) {
    monthlyPrices.forEach((monthly) => {
      monthly.classList.add("hidden");
    });
    annuallyPrices.forEach((annually) => {
      annually.classList.remove("hidden");
    });
  } else {
    monthlyPrices.forEach((monthly) => {
      monthly.classList.remove("hidden");
    });
    annuallyPrices.forEach((annually) => {
      annually.classList.add("hidden");
    });
  }
};
checkboxLabel.addEventListener("click", changePrices);
