"use strict";

// Selectors in order appearing on the page

const firstN = document.getElementById("first-name");
const lastN = document.getElementById("last-name");
const email = document.getElementById("email");
const queryGeneral = document.getElementById("general");
const querySupport = document.getElementById("support");

const queryContainer = document.querySelector(".query-selectors");
const message = document.getElementById("message");
const checkbox = document.getElementById("consent");

const allInput = document.querySelectorAll(".input-required");

// red messages in order

const redFirst = document.querySelector(".first-message");
const redLast = document.querySelector(".last-message");
const redEmail = document.querySelector(".email-message");
const redQuery = document.querySelector(".query-message");
const redMessage = document.querySelector(".textarea-message");
const redConsent = document.querySelector(".consent-message");
// select all the messages
const allRedMessages = document.querySelectorAll(".red-message");

// Submit btn and modal

const submit = document.querySelector(".btn-submit");
const modal = document.querySelector(".modal");

// select main
const main = document.querySelector("main");

//////////////////
// FUNCTIONS

const verifyInput = function () {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // clear all
  allRedMessages.forEach((message) => message.classList.remove("visible"));
  allInput.forEach((input) => input.classList.remove("red-borders"));

  let i = 0;
  // First name
  if (firstN.value.length < 2) {
    redFirst.classList.add("visible");
    firstN.classList.add("red-borders");
    i++;
  }

  // Last name
  if (lastN.value.length < 2) {
    redLast.classList.add("visible");
    lastN.classList.add("red-borders");
    i++;
  }
  // Email
  if (!regexEmail.test(email.value)) {
    redEmail.classList.add("visible");
    email.classList.add("red-borders");
    i++;
  }
  // Query type
  if (!queryGeneral.checked && !querySupport.checked) {
    redQuery.classList.add("visible");
    i++;
  }
  // Message
  if (message.value.length < 5) {
    redMessage.classList.add("visible");
    message.classList.add("red-borders");
    i++;
  }
  // Consent
  if (!checkbox.checked) {
    redConsent.classList.add("visible");
    i++;
  }
  if (!i) {
    modal.classList.add("visible");
    main.classList.add("disabled");
  }
};

submit.addEventListener("click", verifyInput);

// Change background of query selectors when ticked

queryContainer.addEventListener("click", function () {
  if (queryGeneral.checked) {
    queryGeneral.parentElement.classList.add("query-ticked");
    querySupport.parentElement.classList.remove("query-ticked");
  } else if (querySupport.checked) {
    queryGeneral.parentElement.classList.remove("query-ticked");
    querySupport.parentElement.classList.add("query-ticked");
  }
});
