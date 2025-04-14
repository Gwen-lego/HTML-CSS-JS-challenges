"use strict";

// Selectors

const titles = document.querySelectorAll(".title-box");
const allBtn = document.querySelectorAll(".btn-period");
const dailyBtn = document.querySelector(".btn-daily");

//functions

const loopOverTitles = function (period, data) {
  titles.forEach((title) => {
    for (let i = 0; i < data.length; i++) {
      //find title object in JSON file
      if (title.textContent === data[i].title) {
        // define current previous time elements to pass new html
        const currentItem = document.querySelector(
          `.current-time-${title.dataset.number}`
        );
        const prevTime = document.querySelector(
          `.previous-time-${title.dataset.number}`
        );
        currentItem.innerHTML = data[i].timeframes[`${period}`].current;
        prevTime.innerHTML = data[i].timeframes[`${period}`].previous;
      }
    }
  });
};

//  fetch data list from JSON FILE

function getData(period) {
  fetch("./data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(function (data) {
      loopOverTitles(period, data);
    })
    .catch((error) => console.error("Error fetching data:", error));
}
// loop over every element and display accurate times

allBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    allBtn.forEach((btn) => (btn.style.color = "var(--DesaturatedBlue)"));
    getData(btn.dataset.period);

    btn.style.color = "white";
  });
});

// download daily data by default

dailyBtn.style.color = "white";
getData("daily");
