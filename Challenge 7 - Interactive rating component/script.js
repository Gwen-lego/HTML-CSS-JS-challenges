"use strict";

const scores = document.querySelectorAll('.score');
const submit = document.querySelector('.submit-btn');
const submited = document.querySelector('.submitted');
const survey = document.querySelector('.survey');
const validatedRating = document.querySelector('.selected-rating');
const noScore = document.querySelector('.not-submitted');


let scoreSelected = -1;
// function clear all the background by removing .selected class
const clearSelected = function() {
for (const score of scores){
    score.classList.remove('selected');
}}

// change color of the selected button
for (const [i, score] of scores.entries()){
score.addEventListener('click',() => {
    clearSelected(); // calling the function to clear previous selection
    score.classList.add('selected');
    validatedRating.innerHTML = `${i + 1}`;
    scoreSelected = `${i}`;

});}

// when submit is clicked, ensure a rating is selected and save that rating.
submit.addEventListener('click',() => {
    if (scoreSelected >= 0){
        survey.style.display = 'none';
        submited.style.display = 'initial';
    } else {
        noScore.style.display = 'initial';
    }
})


