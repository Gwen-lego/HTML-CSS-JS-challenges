"use strict";

const allQuestion = document.querySelectorAll(".question");
const iconPlus = document.querySelector(".icon-plus");
const iconMinus = document.querySelector(".icon-minus");
const answer = document.querySelectorAll(".answer");

//function to show and hide answer using the event target
const showHideAnswer = function (e) {
  const clicked = e.target.closest(".question");
  console.log(clicked);

  const answerTargeted = document.querySelector(
    `.answer${clicked.dataset.tab}`
  );
  const iconMinusTargeted = document.querySelector(
    `.icon-minus${clicked.dataset.tab}`
  );
  const iconPlusTargeted = document.querySelector(
    `.icon-plus${clicked.dataset.tab}`
  );

  if (answerTargeted.classList.contains("show-answer")) {
    // hide answer and show icon -
    answerTargeted.classList.remove("show-answer");
    iconMinusTargeted.classList.remove("show-icon");
    iconPlusTargeted.classList.add("show-icon");
  } else {
    // show answer and show icon +
    document
      .querySelector(`.answer${clicked.dataset.tab}`)
      .classList.add("show-answer");
    iconPlusTargeted.classList.remove("show-icon");
    iconMinusTargeted.classList.add("show-icon");
  }
};

// Call the function with add event listener
allQuestion.forEach((q) => q.addEventListener("click", showHideAnswer));
