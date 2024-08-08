"use strict";

// button NotifyMe
const btnNotifyMe = document.querySelector(".btn-NotifyMe");

// input
const input = document.querySelector(".email-input");

//error message
const label = document.querySelector(".error-invalid-email");

btnNotifyMe.addEventListener("click", function () {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const checkEmail = regexEmail.test(input.value);

  if (!checkEmail) {
    label.classList.add("error-message-visible");
    input.style.borderColor = "hsl(354, 100%, 66%)";
    input.value = "email@example/com";
  } else if (checkEmail) {
    label.classList.remove("error-message-visible");
    input.style.borderColor = "hsl(0, 0%, 80%)";
  }
});
