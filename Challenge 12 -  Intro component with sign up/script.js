"use strict";

//btn claim
const clainBtn = document.querySelector(".btn-claim");

//input
const firstName = document.querySelector("#input-firstName");
const lastName = document.querySelector("#input-lastName");
const email = document.querySelector("#input-email");
const password = document.querySelector("#input-password");

//all inputs
const allInputs = document.querySelectorAll("input");

//error message
const errorFirstName = document.querySelector(".error-message-firstName");
const errorLastName = document.querySelector(".error-message-lastName");
const errorEmail = document.querySelector(".error-message-email");
const errorPassword = document.querySelector(".error-message-password");

//error icons
const errorIconFirstName = document.querySelector(".fa-firstName");
const errorIconLastName = document.querySelector(".fa-lastName");
const errorIconEmail = document.querySelector(".fa-email");
const errorIconPassword = document.querySelector(".fa-password");

clainBtn.addEventListener("click", function () {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  console.log(regexEmail.test(email.value));

  if (!firstName.value) {
    firstName.placeholder = "";
    firstName.style.borderColor = "hsl(0, 100%, 74%)";
    errorIconFirstName.classList.add("fa-visible");
    errorFirstName.style.display = "block";
  } else {
    errorIconFirstName.classList.remove("fa-visible");
    errorFirstName.style.display = "none";
    firstName.style.borderColor = "black";
  }

  if (!lastName.value) {
    lastName.placeholder = "";
    lastName.style.borderColor = "hsl(0, 100%, 74%)";
    errorIconLastName.classList.add("fa-visible");
    errorLastName.style.display = "block";
  } else {
    errorIconLastName.classList.remove("fa-visible");

    errorLastName.style.display = "none";
    lastName.style.borderColor = "black";
  }
  if (!password.value) {
    password.placeholder = "";
    password.style.borderColor = "hsl(0, 100%, 74%)";
    errorIconPassword.classList.add("fa-visible");
    errorPassword.style.display = "block";
  } else {
    errorIconPassword.classList.remove("fa-visible");

    errorPassword.style.display = "none";
    password.style.borderColor = "black";
  }
  if (!regexEmail.test(email.value) || email.value === "email@example/com") {
    errorIconEmail.classList.add("fa-visible");

    email.value = "email@example/com";
    email.style.color = "hsl(0, 100%, 74%)";
    email.style.borderColor = "hsl(0, 100%, 74%)";
    errorEmail.style.display = "block";
  } else {
    errorIconEmail.classList.remove("fa-visible");
    errorEmail.style.display = "none";
    email.style.borderColor = "black";
    email.style.color = "black";
  }
  //email check format
});
